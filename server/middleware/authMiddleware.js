const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    try {
				//получаем токен
        const token = req.headers.authorization.split(' ')[1] 
        if (!token) {
            return res.status(401).json({message: "Не авторизован"})
        }
				//декодируем токен
        const decoded = jwt.verify(token, 'я секретный ключ')
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({message: "Не авторизован"})
    }
};