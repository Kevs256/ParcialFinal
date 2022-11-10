"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
require("./database/mongo.database.js");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const products_route_js_1 = __importDefault(require("./router/products.route.js"));
const images_route_js_1 = __importDefault(require("./router/images.route.js"));
const usuarios_route_js_1 = __importDefault(require("./router/usuarios.route.js"));
const carrito_route_js_1 = __importDefault(require("./router/carrito.route.js"));
const pedidos_router_js_1 = __importDefault(require("./router/pedidos.router.js"));
class Server {
    constructor() {
        this.config = () => {
            this.backend.use((0, cors_1.default)());
            this.backend.use((0, morgan_1.default)('dev'));
            this.backend.set('port', 1802);
            this.backend.use((0, express_1.urlencoded)({ extended: true }));
            this.backend.use((0, express_1.json)());
        };
        this.route = () => {
            this.backend.use('/api/auth', this.userRoute.routerAuth);
            this.backend.use('/api/productos', this.productRouter.router);
            this.backend.use('/api/image', this.imagesRouter.router);
            this.backend.use('/api/user', this.CarritoRouter.router);
            this.backend.use('/api/user', this.PedidosRouter.router);
        };
        this.start = () => {
            this.backend.listen(this.backend.get('port'), () => {
                console.log(`SERVER: http://${process.env.HOST}:${process.env.PORT}/`);
            });
        };
        this.backend = (0, express_1.default)();
        this.productRouter = new products_route_js_1.default();
        this.imagesRouter = new images_route_js_1.default();
        this.userRoute = new usuarios_route_js_1.default();
        this.CarritoRouter = new carrito_route_js_1.default();
        this.PedidosRouter = new pedidos_router_js_1.default();
        this.config();
        this.route();
        this.start();
    }
}
const server = new Server();
