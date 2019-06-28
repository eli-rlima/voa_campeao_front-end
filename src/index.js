import { BrowserRouter, Route, Switch } from "react-router-dom";

import Construcao from "./modules/Construcao";
import Home from "./modules/Home";
import React from "react";
import Viagem from "./modules/Viagem";
import { render } from "react-dom";

render(
  <BrowserRouter>
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/viagem"} component={Viagem} />
      <Route exact path={"/depoimento"} component={Construcao} />
      <Route exact path={"/suporte"} component={Construcao} />
      <Route exact path={"/ajude"} component={Construcao} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
