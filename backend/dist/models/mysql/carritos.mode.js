"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const usuarios_database_js_1 = __importDefault(require("../../database/usuarios.database.js"));
exports.default = usuarios_database_js_1.default.define('carritos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: sequelize_1.DataTypes.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
});
