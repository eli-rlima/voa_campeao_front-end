import { BrowserRouter, Route, Switch } from "react-router-dom";

import Construcao from "./modules/Construcao";
import Footer from "./modules/Footer";
import Home from "./modules/Home";
import Navbar from "./modules/Navbar";
import { Provider } from "react-redux";
import React from "react";
import Store from "./store";
import Viagem from "./modules/Viagem";
import { render } from "react-dom";

render(
  <Provider store={Store}>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/viagem"} component={Viagem} />
        <Route exact path={"/depoimento"} component={Construcao} />
        <Route exact path={"/suporte"} component={Construcao} />
        <Route exact path={"/ajude"} component={Construcao} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
