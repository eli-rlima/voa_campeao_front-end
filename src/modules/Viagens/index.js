import "./index.css";

import { setSelectedViagem, setViagens } from "../../actions";

import React from "react";
import ViagemCard from "../Home/components/ViagemCard";
import { connect } from "react-redux";
import { getViagens } from "../../services/index";

const viagem = {
  id: 1,
  origem: "Jaboatão dos Guararapes",
  destino: "São Paulo",
  data_ida: "2019-06-08",
  data_volta: "2019-06-15",
  competicao: "São Silvestre",
  descricao_comp:
    "ashduaushduashduahdsuahsudhasuhdaushduahsduadshausdhausdhuashduahsduahs",
  modalidade_comp: "Corrida",
  atleta: {
    cpf: "10334907411",
    nome: "Elivelton Rodrigues",
    sexo: "M",
    data_nascimento: "1995-07-28",
    tipo_usuario: "0"
  },
  status: "1"
};

const viagens = [
  viagem,
  viagem,
  viagem,
  viagem,
  viagem,
  viagem,
  viagem,
  viagem,
  viagem,
  viagem,
  viagem,
  viagem,
  viagem,
  viagem,
  viagem,
  viagem,
  viagem,
  viagem,
  viagem
];

class Viagens extends React.Component {
  componentDidMount() {
    getViagens()
      .then(sucess => this.props.setViagens(sucess.data.results))
      .catch(err => console.log(err));
  }

  handleCardClick = Viagem => {
    this.props.setSelectedViagem(Viagem);
    this.props.history.push("/viagem");
  };

  render() {
    // const { viagens } = this.props;
    return (
      <div>
        <div className="viagens__card">
          {viagens.map((viagem, index) => (
            <ViagemCard
              viagem={viagem}
              onClick={() => this.handleCardClick(viagem)}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    viagens: state.viagens.viagens
  };
};

export default connect(
  mapStateToProps,
  { setViagens, setSelectedViagem }
)(Viagens);
