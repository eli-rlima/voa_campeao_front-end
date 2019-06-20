import "./index.css";

import React from "react";

const AtletaCard = ({ viagem }) => (
  <div className="itemViagem">
    <div>{viagem.atleta.nome}</div>
    <div>Idadinha do serumaninho</div>
    <div>{viagem.modalidade}</div>
  </div>
);

export default AtletaCard;
