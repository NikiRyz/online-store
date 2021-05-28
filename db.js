const {Sequelize} = require('sequelize') //импортировали sequelize

module.exports = new Sequelize(
    'df01rak35ep7lc', // Название БД
    'bxwkaipkydiasb', // Пользователь
    '1a44c043966e06adb9a2d4c5628b9c18440001fd24ee6627bef3486ac6f62a2b', // ПАРОЛЬ
    {
        dialect: 'postgres',
        port: 5432
    }
)