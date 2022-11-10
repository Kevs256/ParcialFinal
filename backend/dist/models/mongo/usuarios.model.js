"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    nombres: { type: String, required: true },
    correo: { type: String, required: true },
    password: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)('usuarios', schema);
