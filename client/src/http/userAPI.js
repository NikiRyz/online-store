import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";
//функция регистрации
export const registration = async (email, password) => {
    //делаем запрос
    const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
    //записали токен в хранилище браузера
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
//функция авторизации
export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
//проверяет валидность токена, если все норм, оставляет, если нет - разлогинивает пользователя
export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
