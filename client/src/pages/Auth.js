import React, { useContext, useState } from "react";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { login, registration } from "../http/userAPI";
import {Context} from "../index";

const Auth = observer(() => {
  const {user}= useContext(Context)
  const history = useHistory()
  //проверяет по какой ссылке находимся
  const location = useLocation();
  //проверяем находимся ли мы на странице авторизации
  const isLogin = location.pathname === "/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const click = async () => {
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await registration(email, password);
      }
      user.setUser(user)
      user.setIsAuth(true)
      history.push('/')
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль..."
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Нет аккаунта?
                <NavLink to="/registration">Зарегистрируйся!</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to="/login">Войдите!</NavLink>
              </div>
            )}
            <Button onClick={click} variant={"outline-success"}>
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
