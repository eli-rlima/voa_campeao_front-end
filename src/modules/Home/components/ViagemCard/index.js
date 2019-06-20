import "./index.css";

import React from "react";

const ViagemCard = ({ viagem }) => (
  <div className="itemViagem">
    <div>
      O <span className="nomeAtleta">{viagem.atleta.nome}</span> irá competir na{" "}
      <span className="nomeCompeticao">{viagem.competicao}</span>, na modalidade{" "}
      <span className="nomeModalidade">{viagem.modalidade_comp}</span>, ajude-o
      a ganhar mais essa medalha!
    </div>
  </div>
);

export default ViagemCard;
