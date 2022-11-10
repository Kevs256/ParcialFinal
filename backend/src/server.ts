import express, { Application, json, urlencoded } from "express";
import './database/mongo.database.js';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

import ProductRoute from "./router/products.route.js";
import ImagesRouter from "./router/images.route.js";
import UserRoute from "./router/usuarios.route.js";
import CarritoRouter from "./router/carrito.route.js";
import PedidosRouter from "./router/pedidos.router.js";

class Server {

    private backend: Application;
    private productRouter: ProductRoute;
    private imagesRouter: ImagesRouter;
    private userRoute: UserRoute;
    private CarritoRouter: CarritoRouter;
    private PedidosRouter: PedidosRouter;

    constructor() {
        this.backend = express();
        this.productRouter = new ProductRoute();
        this.imagesRouter = new ImagesRouter();
        this.userRoute = new UserRoute();
        this.CarritoRouter = new CarritoRouter();
        this.PedidosRouter = new PedidosRouter();
        this.config();
        this.route();
        this.start();
    }

    public config = (): void => {
        this.backend.use(cors());
        this.backend.use(morgan('dev'));
        this.backend.set('port', 1802);
        this.backend.use(urlencoded({extended: true}));
        this.backend.use(json());  
    }

    public route = (): void => {
        this.backend.use('/api/auth', this.userRoute.routerAuth);
        this.backend.use('/api/productos', this.productRouter.router);
        this.backend.use('/api/image', this.imagesRouter.router);
        this.backend.use('/api/user', this.CarritoRouter.router);
        this.backend.use('/api/user', this.PedidosRouter.router);
    }

    public start = (): void => {
        this.backend.listen(this.backend.get('port'), () => {
            console.log(`SERVER: http://${process.env.HOST}:${process.env.PORT}/`);
        });
    }

}

const server = new Server();