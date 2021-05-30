import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import {Spinner} from "react-bootstrap";
import { Context } from "./index";
import { check } from "./http/userAPI";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    check()
      .then(() => {
        user.setUser(true);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  });
  if(loading){
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
