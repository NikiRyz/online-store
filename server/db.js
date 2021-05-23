const {Sequelize} = require('sequelize') //импортировали sequelize

module.exports = new Sequelize(
    'online_store', // Название БД
    'postgres', // Пользователь
    'кщще', // ПАРОЛЬ
    {
        dialect: 'postgres',
        port: 5432
    }
)