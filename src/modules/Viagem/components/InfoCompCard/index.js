import "./index.css";

import React from "react";

const InfoCompCard = ({ viagem }) => (
  <div className="container">
    <div classeName="two">
      A competição de <span>{viagem.modalidade_comp}</span> ocorrerá entre os
      dias <span>{viagem.data_ida}</span> e <span>{viagem.data_volta}</span>, na
      cidade de <span>{viagem.destino}</span>.
    </div>
  </div>
);
export default InfoCompCard;
