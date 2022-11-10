import { Router } from "express";
import CarritoController from "../controllers/carrito.controller.js";

class CarritoRouter {

    public router: Router;
    private CarritoController: CarritoController;

    constructor() {
        this.router = Router();
        this.CarritoController = new CarritoController();
        this.config();
    }

    private config = (): void => {
        this.router.get('/:id_user/carrito', this.CarritoController.getCarrito);
        this.router.post('/:id_user/carrito', this.CarritoController.addProduct);
        this.router.delete('/:id_user/carrito/:id_producto', this.CarritoController.deleteProduct);
    }

}

export default CarritoRouter;