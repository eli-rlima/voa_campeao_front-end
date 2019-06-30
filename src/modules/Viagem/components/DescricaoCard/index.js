import "./index.css";

import React from "react";

const DescricaoCard = ({ viagem }) => (
  <div className="container_desc">
    <div classeName="two">O que {viagem.atleta.nome} diz sobre a viagem:</div>
    <br />
    <div> {viagem.descricao_comp} </div>
  </div>
);
export default DescricaoCard;
