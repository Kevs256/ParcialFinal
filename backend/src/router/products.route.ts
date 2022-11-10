import { Router } from "express";
import ProductController from "../controllers/productos.controller.js";

class ProductRoute {

    public router: Router;
    private ProductController: ProductController;

    constructor() {
        this.router = Router();
        this.ProductController = new ProductController();
        this.config();
    }

    private config = (): void => {
        this.router.get('/', this.ProductController.getAllProducts);
        this.router.post('/', this.ProductController.insertOneProduct);
        this.router.post('/many', this.ProductController.insertManyProducts);
        this.router.get('/:id', this.ProductController.getProductById);
    }

}

export default ProductRoute;