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
const carritos_model_js_1 = __importDefault(require("../models/mysql/carritos.model.js"));
const carritosProductos_model_js_1 = __importDefault(require("../models/mysql/carritosProductos.model.js"));
const productos_model_js_1 = __importDefault(require("../models/mongo/productos.model.js"));
const users_model_js_1 = __importDefault(require("../models/mysql/users.model.js"));
class CarritoController {
    constructor() {
        this.getCarrito = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_user } = req.params;
                const carrito = yield carritos_model_js_1.default.findOne({
                    attributes: { exclude: ['id_user'] },
                    where: { id_user },
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
                for (let i = 0; i < _productos.length; i++) {
                    var _producto = yield productos_model_js_1.default.findById(_productos[i].id_producto);
                    if (_producto) {
                        productos.push({ producto: _producto, cantidad: _productos[i].cantidad });
                        const precio_total_producto = _producto.precio * _productos[i].cantidad;
                        precio += precio_total_producto;
                        precio_total += (precio_total_producto * (100 - _producto.descuento) / 100);
                    }
                }
                return res.json({ 'error': 0, carrito, precio, precio_total, productos });
            }
            catch (error) {
                return res.json({ 'error': 1, 'msg': error.message });
            }
        });
        this.addProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id_user = parseInt(req.params.id_user);
                const { id_producto, cantidad } = req.body;
                const _carrito = yield carritos_model_js_1.default.findOne({ where: { id_user } });
                if (_carrito === null) {
                    const carrito = yield carritos_model_js_1.default.create({ id_user });
                    var id_carrito = carrito.id;
                }
                else {
                    var id_carrito = _carrito.id;
                }
                const producto_carrito = yield carritosProductos_model_js_1.default.findOne({ where: { id_carrito, id_producto } });
                console.log(producto_carrito);
                if (producto_carrito === null) {
                    if (cantidad < 0)
                        return res.json({ 'error': 2, 'msg': 'No se pudo crear' });
                    yield carritosProductos_model_js_1.default.create({ id_carrito, id_producto, cantidad });
                }
                else {
                    const cantidad_final = producto_carrito.cantidad + cantidad;
                    if (cantidad_final <= 0) {
                        yield producto_carrito.destroy();
                    }
                    else {
                        yield producto_carrito.update({
                            cantidad: cantidad_final
                        });
                    }
                }
                return res.json({ 'error': 0, 'msg': 'Update' });
            }
            catch (error) {
                return res.json({ 'error': 1, 'msg': error.message });
            }
        });
        this.deleteProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_user, id_producto } = req.params;
                const carrito = yield carritos_model_js_1.default.findOne({ where: { id_user } });
                if (carrito === null)
                    return res.json({ 'error': 2, 'msg': 'No existe el carrito' });
                const producto = yield carritosProductos_model_js_1.default.findOne({
                    where: { id_producto, id_carrito: carrito.id },
                });
                if (producto)
                    yield producto.destroy();
                return res.json({ 'error': 0, 'msg': 'Deleted' });
            }
            catch (error) {
                return res.json({ 'error': 1, 'msg': error.message });
            }
        });
    }
}
exports.default = CarritoController;
