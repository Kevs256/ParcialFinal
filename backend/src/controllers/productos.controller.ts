import { Request, Response } from "express";
import ProductModel from "../models/mongo/productos.model.js";

class ProductController {

    constructor() {
    }
    
    public insertOneProduct = async (req: Request, res: Response) => {
        try{
            const producto = new ProductModel(req.body);
            await producto.save();
            return res.json({ 'error': 0, 'msg': 'API: insert' });
        }catch(error){
            return res.status(401).json({'error': 1, 'msg': (error as Error).message});
        }
    }

    public insertManyProducts = async (req: Request, res: Response) => {
        try{
            await ProductModel.insertMany(req.body.productos);
            return res.json({ 'error': 0, 'msg': 'API: insert' });
        }catch(error){
            return res.status(401).json({'error': 1, 'msg': (error as Error).message});
        }
    }

    public getProductById = async (req: Request, res: Response) => {
        try{
            const producto = await ProductModel.findById(req.params.id);
            return res.json({ 'error': 0, producto });
        }catch(error){
            return res.status(401).json({'error': 1, 'msg': (error as Error).message});
        }
    }

    public getAllProducts = async (req: Request, res: Response) => {
        try{
            const producto = await ProductModel.find();
            return res.json({ 'error': 0, producto });
        }catch(error){
            return res.status(401).json({'error': 1, 'msg': (error as Error).message});
        }
    }

}

export default ProductController;