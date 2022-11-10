"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_database_js_1 = __importDefault(require("../../database/mysql.database.js"));
const users_model_js_1 = __importDefault(require("./users.model.js"));
const Carritos = mysql_database_js_1.default.define('carritos', {
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
Carritos.belongsTo(users_model_js_1.default, { foreignKey: 'id' });
exports.default = Carritos;
