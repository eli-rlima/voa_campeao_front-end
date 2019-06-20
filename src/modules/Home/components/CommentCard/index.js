import "./index.css";

import React from "react";
import profile from "../../../../icons/profile.png";

const CommentCard = ({ viagem }) => (
  <div className="itemViagem1">
    <div className="container">
      <img src={profile} alt="Avatar" className="image" />
      <div className="middle">
        <div className="text">{viagem.atleta.nome}</div>
      </div>
    </div>
    <h4>{viagem.atleta.nome}</h4>
    <div>
      "Ter participado do Voa Campeão me proporcionou o sonho de competir na{" "}
      {viagem.competicao}!
    </div>
  </div>
);

export default CommentCard;
