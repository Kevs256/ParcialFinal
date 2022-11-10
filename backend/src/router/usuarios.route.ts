import { Router } from "express";
import UserController from "../controllers/usuarios.controller.js";

class UserRoute {

    public routerAuth: Router;
    public routerUser: Router;
    private UserController: UserController;

    constructor() {
        this.routerAuth = Router();
        this.routerUser = Router();
        this.UserController = new UserController();
        this.config();
    }

    private config = (): void => {
        this.routerAuth.post('/', this.UserController.auth);
        this.routerAuth.post('/login', this.UserController.login);
        this.routerAuth.post('/register', this.UserController.register);
    }

}

export default UserRoute;