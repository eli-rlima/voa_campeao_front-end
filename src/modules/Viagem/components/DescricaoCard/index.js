import "./index.css";

import React from "react";

const DescricaoCard = ({ viagem }) => (
  <div className="viagem__container-desc">
    <div classeName="viagem__desc">
      <br />
      <p>O que {viagem.atleta.nome} diz sobre a viagem:</p>
    </div>
    <br />
    <div> " {viagem.descricao_comp} " </div>
  </div>
);
export default DescricaoCard;
