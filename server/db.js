const {Sequelize} = require('sequelize')
module.exports= new Sequelize(
    'store',
    'postgres',
    'кщще',
    {
        dialect: 'postgres',
        port: 5432
    }

)