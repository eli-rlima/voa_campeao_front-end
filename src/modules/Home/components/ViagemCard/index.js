import "./index.css";

import React from "react";

const ViagemCard = ({ viagem }) => (
  <div className="itemViagem">
    <div>
      O {viagem.atleta.nome} irá competir na {viagem.competicao}, na modalidade{" "}
      {viagem.modalidade_comp}, ajude-o a ganhar mais essa medalha!
    </div>
  </div>
);

export default ViagemCard;
