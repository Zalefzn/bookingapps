import { Sequelize } from 'sequelize';

const db = new Sequelize('bookingapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        charset: 'utf8mb4',
    },
});

export default db;