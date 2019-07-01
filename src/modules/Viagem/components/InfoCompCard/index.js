import "./index.css";

import React from "react";
import moment from "moment";

const InfoCompCard = ({ viagem }) => (
  <div className="viagem__container-info">
    <div classeName="viagem__info">
      A competição de{" "}
      <span className="text_color">{viagem.modalidade_comp}</span> ocorrerá
      entre os dias{" "}
      <span className="text_color">
        {moment(viagem.data_ida).format("DD/MM/YYYY")}
      </span>{" "}
      e{" "}
      <span className="text_color">
        {moment(viagem.data_volta).format("DD/MM/YYYY")}
      </span>
      , na cidade de <span className="text_color">{viagem.destino}</span>.
      <span> O {viagem.atleta.nome} vai sar da cidade</span>{" "}
      <span>{viagem.atleta.origem}</span>.
    </div>
  </div>
);
export default InfoCompCard;
