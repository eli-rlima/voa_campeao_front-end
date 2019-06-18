import "./index.css";

import React from "react";

const Viagem = ({ viagem }) => (
  <li className="itemViagem">
    <div>{viagem.origem}</div>
    <div>{viagem.destino}</div>
    <div>{viagem.data_ida}</div>
    <div>{viagem.data_volta}</div>
  </li>
);

export default Viagem;
