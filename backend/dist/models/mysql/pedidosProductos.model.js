"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_database_js_1 = __importDefault(require("../../database/mysql.database.js"));
const pedidos_model_js_1 = __importDefault(require("./pedidos.model.js"));
const Pedidos_productos = mysql_database_js_1.default.define('pedidos_productos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_pedido: sequelize_1.DataTypes.INTEGER,
    id_producto: sequelize_1.DataTypes.INTEGER,
    cantidad: sequelize_1.DataTypes.INTEGER,
    precio: sequelize_1.DataTypes.INTEGER,
    descuento: sequelize_1.DataTypes.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
});
Pedidos_productos.belongsTo(pedidos_model_js_1.default, { foreignKey: 'id' });
exports.default = Pedidos_productos;
