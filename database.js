const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    database: 'files-importer',
    username: 'root',
    password: 'root',
    dialect: 'mysql',
});

module.exports = sequelize;
