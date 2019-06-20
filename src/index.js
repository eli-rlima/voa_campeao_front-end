import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./modules/Home";
import React from "react";
import Viagem from "./modules/Viagem";
import { render } from "react-dom";

render(
  <BrowserRouter>
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/viagem/"} component={Viagem} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
