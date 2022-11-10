"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_controller_js_1 = __importDefault(require("../controllers/productos.controller.js"));
class ProductRoute {
    constructor() {
        this.config = () => {
            this.router.get('/', this.ProductController.getAllProducts);
            this.router.post('/', this.ProductController.insertOneProduct);
            this.router.post('/many', this.ProductController.insertManyProducts);
            this.router.get('/:id', this.ProductController.getProductById);
        };
        this.router = (0, express_1.Router)();
        this.ProductController = new productos_controller_js_1.default();
        this.config();
    }
}
exports.default = ProductRoute;
