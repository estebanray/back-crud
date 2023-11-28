import { Sequelize } from "sequelize";

const db = new Sequelize('granjas', 'root', '1588', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;