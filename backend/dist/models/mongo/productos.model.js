"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    nombre: { type: String },
    descripcion: { type: String },
    marca: { type: String },
    precio: { type: Number },
    descuento: { type: Number },
    uri: { type: String }
});
exports.default = (0, mongoose_1.model)('productos', schema);
