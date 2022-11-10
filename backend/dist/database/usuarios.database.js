"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = new sequelize_1.Sequelize('eco_store', 'root', process.env.MYSQL_PASSWORD, {
    dialect: 'mysql',
    host: 'localhost',
    port: 3307,
    logging: false,
    password:'root_password'
});
