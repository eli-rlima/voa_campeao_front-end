import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./modules/Home";
import React from "react";
import { render } from "react-dom";

render(
  <BrowserRouter>
    <Switch>
      <Route exact path={"/"} component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
