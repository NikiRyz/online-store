import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";


const App = observer(() => {
  //получили состояние пользователя
    const {user} = useContext(Context)
    //создали локальное состояние с загрузкой
    //сначала в статусе true, потом делаем запрос на сервер, когда вернулся ответ в false
    const [loading, setLoading] = useState(true)
    //useEffect представляет собой совокупность методов componentDidMount, componentDidUpdate, и componentWillUnmount
    useEffect(() => {
        check().then(() => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    })

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;
