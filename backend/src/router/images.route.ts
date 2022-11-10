import { Router } from "express";
import ImagesController from "../controllers/images.controller.js";

class ImagesRouter {

    public router: Router;
    private ImagesController: ImagesController;

    constructor() {
        this.router = Router();
        this.ImagesController = new ImagesController();
        this.config();
    }

    private config = (): void => {
        this.router.get('/:id', this.ImagesController.getImageById);
    }

}

export default ImagesRouter;