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
const productos_model_js_1 = __importDefault(require("../models/mongo/productos.model.js"));
class ProductController {
    constructor() {
        this.insertOneProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const producto = new productos_model_js_1.default(req.body);
                yield producto.save();
                return res.json({ 'error': 0, 'msg': 'API: insert' });
            }
            catch (error) {
                return res.status(401).json({ 'error': 1, 'msg': error.message });
            }
        });
        this.insertManyProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield productos_model_js_1.default.insertMany(req.body.productos);
                return res.json({ 'error': 0, 'msg': 'API: insert' });
            }
            catch (error) {
                return res.status(401).json({ 'error': 1, 'msg': error.message });
            }
        });
        this.getProductById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const producto = yield productos_model_js_1.default.findById(req.params.id);
                return res.json({ 'error': 0, producto });
            }
            catch (error) {
                return res.status(401).json({ 'error': 1, 'msg': error.message });
            }
        });
        this.getAllProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const producto = yield productos_model_js_1.default.find();
                return res.json({ 'error': 0, producto });
            }
            catch (error) {
                return res.status(401).json({ 'error': 1, 'msg': error.message });
            }
        });
    }
}
exports.default = ProductController;
