import "./index.css";

import { setSelectedViagem, setViagens } from "../../actions";

import React from "react";
import ViagemCard from "../Home/components/ViagemCard";
import { connect } from "react-redux";
import { getViagens } from "../../services/index";

class Viagens extends React.Component {
  componentDidMount() {
    getViagens()
      .then(sucess => this.props.setViagens(sucess.data))
      .catch(err => console.log(err));
  }

  handleCardClick = Viagem => {
    this.props.setSelectedViagem(Viagem);
    this.props.history.push("/viagem");
  };

  render() {
    const { viagens } = this.props;
    return (
      <div>
        <div className="viagens__ajude">
          <p>Ajude um atleta a voar mais alto!</p>
        </div>
        <div className="viagens__all">
          <div className="viagens__card">
            {viagens.reverse().map((viagem, index) => (
              <ViagemCard
                viagem={viagem}
                onClick={() => this.handleCardClick(viagem)}
              />
            ))}
          </div>
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
