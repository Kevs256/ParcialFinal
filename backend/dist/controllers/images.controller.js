"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
class ImagesController {
    constructor() {
        this.getImageById = (req, res) => {
            return res.sendFile(path_1.default.join(__dirname, `../../public/images/${req.params.id}.jpg`));
        };
    }
}
exports.default = ImagesController;
