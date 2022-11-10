import { Request, Response } from "express";
import pedidosModel from "../models/mysql/pedidos.model.js";
import pedidosProductosModel from "../models/mysql/pedidosProductos.model.js";
import carritosModel from "../models/mysql/carritos.model.js";
import carritosProductosModel from "../models/mysql/carritosProductos.model.js";
import productosModel from "../models/mongo/productos.model.js";
import usersModel from "../models/mysql/users.model.js";
import IProducto from '../interfaces/producto.interface';

class PedidosController {

    constructor() {
    }

    public getUserPedidos = async (req: Request, res: Response) => {
        try{
            const id_user = parseInt(req.params.id_user);
            
            const pedidos = await pedidosModel.findAll({where: {id_user}});
        
            return res.json({'error': 0, pedidos});
            
        }catch(error){
            return res.json({'error': 1, 'msg': (error as Error).message});
        }
    }

    public getPedidoById = async (req: Request, res: Response) => {
        try{
            const id_user = parseInt(req.params.id_user);
            const id_pedido = parseInt(req.params.id_pedido);

            const pedido = await pedidosModel.findOne({
                where: {id_user, id: id_pedido}
            });
            
            if(pedido===null) return res.json({'error': 1, 'msg': 'No existe el pedido'});

            const _productos = await pedidosProductosModel.findAll({
                where: {id_pedido: pedido.id}
            });

            const productos:{producto:IProducto, cantidad:number}[]= [];

            for(let i=0;i<_productos.length;i++){
                var _producto = await productosModel.findById(_productos[i].id_producto)
                    .select('nombre descripcion marca uri');
                if(_producto){
                    productos.push({producto: _producto, cantidad: _productos[i].cantidad});
                }
            }
        
            return res.json({'error': 0, pedido, productos});
            
        }catch(error){
            return res.json({'error': 1, 'msg': (error as Error).message});
        }
    }

    public generarPedido = async (req: Request, res: Response) => {
        try{
            const id_user = parseInt(req.params.id_user);
            const carrito = await carritosModel.findOne({
                where: {id_user},
                attributes: {exclude: ['id_user']},
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

            var pedido = await pedidosModel.create({
                subtotal: precio,
                precio_total: precio_total,
                id_user
            });

            for(let i=0;i<_productos.length;i++){
                var _producto = await productosModel.findById(_productos[i].id_producto);
                if(_producto){
                    await pedidosProductosModel.create({
                        id_pedido: pedido.id,
                        id_producto: _producto.id,
                        cantidad: _productos[i].cantidad,
                        precio: _producto.precio,
                        descuento: _producto.descuento
                    });
                    productos.push({producto: _producto, cantidad: _productos[i].cantidad});
                    precio += (_producto.precio*_productos[i].cantidad);
                    precio_total += (precio*(100-_producto.descuento)/100);
                }
            }

            await pedido.update({
                subtotal: precio,
                precio_total: precio_total
            });

            await carritosProductosModel.destroy({
                where: {id_carrito: carrito.id}
            });
            await carrito.destroy();

            return res.json({'error': 0, 'msg': 'Pedido creado'});
            
        }catch(error){
            return res.json({'error': 1, 'msg': (error as Error).message});
        }
    }

}

export default PedidosController;