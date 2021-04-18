import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    //_ т.к. переменную изменять не можем
    this._isAuth = false;
    this._user = {};
    // mobx следит сам за всеми изменениями и, если они есть, обновляет
    makeAutoObservable(this);
  }
  //действия(экшены)
  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }
//для получения переменных из состояния
//вызываются только если переменная обновилась
  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
}
