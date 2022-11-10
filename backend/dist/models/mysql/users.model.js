"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_database_js_1 = __importDefault(require("../../database/mysql.database.js"));
exports.default = mysql_database_js_1.default.define('users', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: sequelize_1.DataTypes.STRING,
    correo: sequelize_1.DataTypes.STRING,
    password: sequelize_1.DataTypes.STRING,
}, {
    freezeTableName: true,
    timestamps: false
});
