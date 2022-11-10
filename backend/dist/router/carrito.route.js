"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carrito_controller_js_1 = __importDefault(require("../controllers/carrito.controller.js"));
class CarritoRouter {
    constructor() {
        this.config = () => {
            this.router.get('/:id_user/carrito', this.CarritoController.getCarrito);
            this.router.post('/:id_user/carrito', this.CarritoController.addProduct);
            this.router.delete('/:id_user/carrito/:id_producto', this.CarritoController.deleteProduct);
        };
        this.router = (0, express_1.Router)();
        this.CarritoController = new carrito_controller_js_1.default();
        this.config();
    }
}
exports.default = CarritoRouter;
