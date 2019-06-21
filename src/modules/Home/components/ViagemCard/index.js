import "./index.css";

import React from "react";
import profile from "../../../../icons/profile.png";

let artigo = "oi";
const ViagemCard = ({ viagem }) => (
  <div className="itemViagem">
    <div>
      <img src={profile} className="perfil" alt="perfil" />
      <div className="texto">
        {(() => {
          if (viagem.atleta.sexo === "M") {
            artigo = "O";
          } else if (viagem.atleta.sexo === "F") {
            artigo = "A";
          } else {
            artigo = "";
          }
        })()}
        {artigo} <span className="nomeAtleta">{viagem.atleta.nome}</span> irá
        competir na <span className="nomeCompeticao">{viagem.competicao}</span>,
        na modalidade{" "}
        <span className="nomeModalidade">{viagem.modalidade_comp}</span>,
        ajude-o a ganhar mais essa medalha!
      </div>
    </div>
  </div>
);

export default ViagemCard;
