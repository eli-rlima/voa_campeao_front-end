import "./index.css";

import React from "react";
import profile from "../../../../icons/profile.png";

const CommentCard = ({ viagem }) => (
  <div className="commentcard__item">
    <div className="commentcard__container">
      <img src={profile} alt="Avatar" className="commentcard_image" />
      <div className="commentcard__middle">
        <div className="commentcard__text">{viagem.atleta.nome}</div>
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
