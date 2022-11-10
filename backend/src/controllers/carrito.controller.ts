import { Request, Response } from "express";
import carritosModel from "../models/mysql/carritos.model.js";
import carritosProductosModel from "../models/mysql/carritosProductos.model.js";
import productosModel from "../models/mongo/productos.model.js";
import usersModel from "../models/mysql/users.model.js";
import IProducto from '../interfaces/producto.interface';

class CarritoController {

    constructor() {
    }

    public getCarrito = async (req: Request, res: Response) => {
        try{
            const {id_user} = req.params;

            const carrito = await carritosModel.findOne({
                attributes: {exclude: ['id_user']},
                where: {id_user},
                include: {
                    model: usersModel,
                    attributes: {exclude: ['password']}
                }
            });

            if(carrito===null) return res.json({'error': 1, 'msg': 'No existe el carrito'});

            const _productos = await carritosProductosModel.findAll({
                where: {id_carrito: carrito.id}
            });
            
            const productos:{producto:IProducto, cantidad:number}[]= [];
            var precio = 0;
            var precio_total = 0;

            for(let i=0;i<_productos.length;i++){
                var _producto = await productosModel.findById(_productos[i].id_producto);
                if(_producto){
                    productos.push({producto: _producto, cantidad: _productos[i].cantidad});
                    const precio_total_producto = _producto.precio*_productos[i].cantidad;
                    precio += precio_total_producto;
                    precio_total += (precio_total_producto*(100-_producto.descuento)/100);
                }
            }

            return res.json({'error': 0, carrito, precio, precio_total, productos});
            
        }catch(error){
            return res.json({'error': 1, 'msg': (error as Error).message});
        }
    }
    
    public addProduct = async (req: Request, res: Response) => {
        try{
            const id_user = parseInt(req.params.id_user);
            const {id_producto, cantidad} = req.body;

            const _carrito = await carritosModel.findOne({where: {id_user}});
            
            if(_carrito===null){
                const carrito = await carritosModel.create({id_user});
                var id_carrito = carrito.id;
            }else{
                var id_carrito = _carrito.id;
            }
            
            const producto_carrito = await carritosProductosModel.findOne({where: { id_carrito, id_producto}});
        
            if(producto_carrito===null){
                if(cantidad<0) return res.json({'error': 2, 'msg': 'No se pudo crear'});
                await carritosProductosModel.create({id_carrito, id_producto, cantidad});
            }else{
                const cantidad_final = producto_carrito.cantidad + cantidad;
                if(cantidad_final<=0){
                    await producto_carrito.destroy();
                }else{
                    await producto_carrito.update({
                        cantidad: cantidad_final
                    });
                }
            }
            return res.json({'error': 0, 'msg': 'Update'});
        }catch(error){
            return res.json({'error': 1, 'msg': (error as Error).message});
        }
    }

    public deleteProduct = async (req: Request, res: Response) => {
        try{
            const {id_user, id_producto} = req.params;
            const carrito = await carritosModel.findOne({where: {id_user}});

            if(carrito===null) return res.json({'error': 2, 'msg': 'No existe el carrito'});
            
            const producto = await carritosProductosModel.findOne({
                where: {id_producto, id_carrito: carrito.id},
            });
            
            if(producto) await producto.destroy();
            return res.json({'error': 0, 'msg': 'Deleted'});            
        }catch(error){
            return res.json({'error': 1, 'msg': (error as Error).message});
        }
    }

}

export default CarritoController;