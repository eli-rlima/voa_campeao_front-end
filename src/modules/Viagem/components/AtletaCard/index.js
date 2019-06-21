import "./index.css";

import React from "react";
import profile from "../../../../icons/profile.png";

const AtletaCard = ({ viagem }) => (
  <div className="container_atleta">
    <div className="one">
      <img src={profile} alt="Avatar" className="image" />
    </div>
    <div classeName="two">
      <h2 className="detail_atleta"> {viagem.atleta.nome}</h2>
      <h2 className="detail_atleta"> 25 anos</h2>
      <h2 className="detail_atleta"> {viagem.modalidade_comp}</h2>
    </div>
  </div>
);
export default AtletaCard;
