
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('eco_store', 'root', process.env.MYSQL_PASSWORD, {
    dialect: 'mysql',
    host: 'localhost',
    port: 3307,
    logging: false,
    password:'root_password'
});

sequelize.authenticate().then(()=>{console.log("Mysql database connected")});

export default sequelize;
