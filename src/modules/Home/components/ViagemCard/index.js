import "./index.css";

import React from "react";

const Viagem = ({ viagem, usuario }) => (
  <div className="itemViagem">
    <div>
      O usuário irá competir na competição, na modalidade{" "}
      {viagem.modalidade_comp}, ajude-o a ganhar mais essa medalha!
    </div>
  </div>
);

export default Viagem;
