const {Type} = require('../models/models')
const ApiError=require('../error/ApiError')
class TypeController {
    async create(req, res) {
        //из тела запроса и звлекаем название типа
        const {name}=req.body
        //создаем этот тип, id присвоится автоматически
        const type= await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        //возвращаем все существующие типы в бд
        const types= await Type.findAll()
        return res.json(types)
    }

}

module.exports = new TypeController()