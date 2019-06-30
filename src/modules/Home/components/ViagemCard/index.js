import "./index.css";

import React from "react";
import profile from "../../../../icons/profile.png";

let artigo = "";
let ajuda = "";
const ViagemCard = ({ viagem, onClick }) => (
  <div className="itemViagem" onClick={onClick}>
    <div>
      <img src={profile} className="perfil" alt="perfil" />
      <div className="texto">
        {(() => {
          if (viagem.atleta.sexo === "M") {
            artigo = "O";
            ajuda = "ajude-o";
          } else if (viagem.atleta.sexo === "F") {
            artigo = "A";
            ajuda = "ajude-a";
          } else {
            artigo = "";
            ajuda = "ajude";
          }
        })()}
        {artigo} <span className="nomeAtleta">{viagem.atleta.nome}</span> irá
        competir na <span className="nomeCompeticao">{viagem.competicao}</span>,
        na modalidade{" "}
        <span className="nomeModalidade">{viagem.modalidade_comp}</span>,{" "}
        {ajuda} a ganhar mais essa medalha!
      </div>
    </div>
  </div>
);

export default ViagemCard;
