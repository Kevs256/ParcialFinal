"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pedidos_model_js_1 = __importDefault(require("../models/mysql/pedidos.model.js"));
const pedidosProductos_model_js_1 = __importDefault(require("../models/mysql/pedidosProductos.model.js"));
const carritos_model_js_1 = __importDefault(require("../models/mysql/carritos.model.js"));
const carritosProductos_model_js_1 = __importDefault(require("../models/mysql/carritosProductos.model.js"));
const productos_model_js_1 = __importDefault(require("../models/mongo/productos.model.js"));
const users_model_js_1 = __importDefault(require("../models/mysql/users.model.js"));
class PedidosController {
    constructor() {
        this.getUserPedidos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id_user = parseInt(req.params.id_user);
                const pedidos = yield pedidos_model_js_1.default.findAll({ where: { id_user } });
                return res.json({ 'error': 0, pedidos });
            }
            catch (error) {
                return res.json({ 'error': 1, 'msg': error.message });
            }
        });
        this.getPedidoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id_user = parseInt(req.params.id_user);
                const id_pedido = parseInt(req.params.id_pedido);
                const pedido = yield pedidos_model_js_1.default.findOne({
                    where: { id_user, id: id_pedido }
                });
                if (pedido === null)
                    return res.json({ 'error': 1, 'msg': 'No existe el pedido' });
                const _productos = yield pedidosProductos_model_js_1.default.findAll({
                    where: { id_pedido: pedido.id }
                });
                const productos = [];
                for (let i = 0; i < _productos.length; i++) {
                    var _producto = yield productos_model_js_1.default.findById(_productos[i].id_producto)
                        .select('nombre descripcion marca uri');
                    if (_producto) {
                        productos.push({ producto: _producto, cantidad: _productos[i].cantidad });
                    }
                }
                return res.json({ 'error': 0, pedido, productos });
            }
            catch (error) {
                return res.json({ 'error': 1, 'msg': error.message });
            }
        });
        this.generarPedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id_user = parseInt(req.params.id_user);
                const carrito = yield carritos_model_js_1.default.findOne({
                    where: { id_user },
                    attributes: { exclude: ['id_user'] },
                    include: {
                        model: users_model_js_1.default,
                        attributes: { exclude: ['password'] }
                    }
                });
                if (carrito === null)
                    return res.json({ 'error': 1, 'msg': 'No existe el carrito' });
                const _productos = yield carritosProductos_model_js_1.default.findAll({
                    where: { id_carrito: carrito.id }
                });
                const productos = [];
                var precio = 0;
                var precio_total = 0;
                var pedido = yield pedidos_model_js_1.default.create({
                    subtotal: precio,
                    precio_total: precio_total,
                    id_user
                });
                for (let i = 0; i < _productos.length; i++) {
                    var _producto = yield productos_model_js_1.default.findById(_productos[i].id_producto);
                    if (_producto) {
                        yield pedidosProductos_model_js_1.default.create({
                            id_pedido: pedido.id,
                            id_producto: _producto.id,
                            cantidad: _productos[i].cantidad,
                            precio: _producto.precio,
                            descuento: _producto.descuento
                        });
                        productos.push({ producto: _producto, cantidad: _productos[i].cantidad });
                        precio += (_producto.precio * _productos[i].cantidad);
                        precio_total += (precio * (100 - _producto.descuento) / 100);
                    }
                }
                yield pedido.update({
                    subtotal: precio,
                    precio_total: precio_total
                });
                yield carritosProductos_model_js_1.default.destroy({
                    where: { id_carrito: carrito.id }
                });
                yield carrito.destroy();
                return res.json({ 'error': 0, 'msg': 'Pedido creado' });
            }
            catch (error) {
                return res.json({ 'error': 1, 'msg': error.message });
            }
        });
    }
}
exports.default = PedidosController;
