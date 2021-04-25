import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
//для того, чтобы работали ссылки
import {useHistory} from 'react-router-dom'

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory()
  //ставим пустого пользователя и говорим, что не авторизировались
  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
}
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to="/">
          КупиДевайс
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button variant={"outline-light"} className="ml-2">
              Выйти
            </Button>
          </Nav>
        ) : (
          <NavLink className="ml-auto" style={{ color: "white" }} to='/login'>
            <Button variant={"outline-light"} >Авторизация</Button>
          </NavLink>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
