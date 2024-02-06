import { Sequelize } from "sequelize";
import process from "process";

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    dialectOptions: {
        createDatabase: true // Corrected option name
    }
});

export default sequelize;
