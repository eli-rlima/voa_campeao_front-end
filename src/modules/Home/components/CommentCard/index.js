import "./index.css";

import React from "react";

const CommentCard = ({ viagem }) => (
  <div className="itemViagem1">
    <h4>{viagem.atleta.nome}</h4>
    <div>
      "Ter participado do Voa Campeão me proporcionou o sonho de competir na{" "}
      {viagem.competicao}!
    </div>
  </div>
);

export default CommentCard;
