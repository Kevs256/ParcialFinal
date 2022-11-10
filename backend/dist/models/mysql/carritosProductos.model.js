"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_database_js_1 = __importDefault(require("../../database/mysql.database.js"));
const carritos_model_js_1 = __importDefault(require("./carritos.model.js"));
const Carritos_productos = mysql_database_js_1.default.define('carritos_productos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_carrito: sequelize_1.DataTypes.INTEGER,
    id_producto: sequelize_1.DataTypes.STRING,
    cantidad: sequelize_1.DataTypes.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
});
Carritos_productos.belongsTo(carritos_model_js_1.default, { foreignKey: 'id' });
exports.default = Carritos_productos;
