import { Request, Response } from "express";
import UsuariosModel from '../models/mysql/users.model.js';
import bc from 'bcrypt';
import jwt from 'jsonwebtoken';


class UserController {

    constructor() {
    }
    
    public auth = async (req: Request, res: Response) => {
        try{
            const ber_token = req.get('Authorization');
            if(ber_token===undefined || ber_token.split(' ')[0].toLowerCase()!=='bearer'){
                return res.json({ 'error': 2, 'msg': 'Invalid token' });
            }
            const token = ber_token.split(' ')[1];
            interface token{id_user:number};
            var decoded = jwt.verify(token, process.env.SECRET!) as token;
            
            const user = await UsuariosModel.findByPk(decoded.id_user, {
                attributes: {exclude: ['password']}
            });

            res.status(200).json({user});
        }catch(error){
            return res.json({'error': 1, 'msg': (error as Error).message});
        }
    }

    public login = async (req: Request, res: Response) => {
        try{
            const {correo, password} = req.body;
            const _user = await UsuariosModel.findOne({where: {correo}});
            if(_user===null) return res.json({ 'error': 2, 'msg': 'Credenciales invalidas' });
            const _password = await bc.compare(password, _user.password);
            if(!_password) return res.json({ 'error': 2, 'msg': 'Credenciales invalidas' });
            else{
                var token = jwt.sign({id_user: _user.id}, process.env.SECRET!);
                return res.json({ 'error': 0, user: _user, token });
            }
        }catch(error){
            return res.json({'error': 1, 'msg': (error as Error).message});
        }
    }

    public register = async (req: Request, res: Response) => {
        try{
            req.body.password = await bc.hash(req.body.password, 10);
            const _user = await UsuariosModel.findOne({where: {correo: req.body.correo}});
            if(_user!==null) return res.json({ 'error': 2, 'msg': 'Correo electronico ya registrado' });
            else{
                const user = await UsuariosModel.create(req.body);
                var token = jwt.sign({id_user: user.id}, process.env.SECRET!);
                return res.json({ 'error': 0, user, token });
            }
        }catch(error){
            return res.json({'error': 1, 'msg': (error as Error).message});
        }
    } 

}

export default UserController;