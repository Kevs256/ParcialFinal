"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const images_controller_js_1 = __importDefault(require("../controllers/images.controller.js"));
class ImagesRouter {
    constructor() {
        this.config = () => {
            this.router.get('/:id', this.ImagesController.getImageById);
        };
        this.router = (0, express_1.Router)();
        this.ImagesController = new images_controller_js_1.default();
        this.config();
    }
}
exports.default = ImagesRouter;
