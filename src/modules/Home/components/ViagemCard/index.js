import "./index.css";

import React from "react";
import profile from "../../../../icons/profile.png";

let artigo = "";
let ajuda = "";
const ViagemCard = ({ viagem, onClick }) => (
  <div className="viagemcard__item" onClick={onClick}>
    <div>
      <img src={profile} className="viagem__perfil" alt="perfil" />
      <div className="viagemcard__texto">
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
        {artigo}{" "}
        <span className="viagemcard__destaque">{viagem.atleta.nome}</span> irá
        competir na{" "}
        <span className="viagemcard__destaque">{viagem.competicao}</span>, na
        modalidade{" "}
        <span className="viagemcard__destaque">{viagem.modalidade_comp}</span>,{" "}
        {ajuda} a ganhar mais essa medalha!
      </div>
    </div>
  </div>
);

export default ViagemCard;
