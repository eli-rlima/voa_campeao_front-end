import "./index.css";

import React from "react";
import moment from "moment";
import profile from "../../../../icons/profile.png";

const AtletaCard = ({ viagem }) => (
  <div className="viagem__container">
    <div className="viagem__image">
      <img src={profile} alt="Avatar" className="viagem__imagem-detalhe" />
    </div>
    <div classeName="viagem__atleta">
      <h2 className="viagem__detalhe-atleta"> {viagem.atleta.nome}</h2>
      <h2 className="viagem__detalhe-atleta">
        {moment().diff(viagem.atleta.data_nascimento, "years")} anos
      </h2>
      <h2 className="viagem__detalhe-atleta"> {viagem.modalidade_comp}</h2>
    </div>
  </div>
);
export default AtletaCard;
