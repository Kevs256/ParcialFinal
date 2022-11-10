"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidos_controller_js_1 = __importDefault(require("../controllers/pedidos.controller.js"));
class PedidosRouter {
    constructor() {
        this.config = () => {
            this.router.post('/:id_user/pedidos', this.PedidosController.generarPedido);
            this.router.get('/:id_user/pedidos', this.PedidosController.getUserPedidos);
            this.router.get('/:id_user/pedidos/:id_pedido', this.PedidosController.getPedidoById);
        };
        this.router = (0, express_1.Router)();
        this.PedidosController = new pedidos_controller_js_1.default();
        this.config();
    }
}
exports.default = PedidosRouter;
