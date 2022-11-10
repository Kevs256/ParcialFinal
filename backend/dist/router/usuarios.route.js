"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controller_js_1 = __importDefault(require("../controllers/usuarios.controller.js"));
class UserRoute {
    constructor() {
        this.config = () => {
            this.routerAuth.post('/', this.UserController.auth);
            this.routerAuth.post('/login', this.UserController.login);
            this.routerAuth.post('/register', this.UserController.register);
        };
        this.routerAuth = (0, express_1.Router)();
        this.routerUser = (0, express_1.Router)();
        this.UserController = new usuarios_controller_js_1.default();
        this.config();
    }
}
exports.default = UserRoute;
