import "./index.css";

import { setSelectedViagem, setViagens } from "../../actions";

import CommentCard from "./components/CommentCard";
import Marta from "../../images/marta.jpg";
import Navbar from "../Navbar";
import React from "react";
import ViagemCard from "./components/ViagemCard";
import { connect } from "react-redux";
import { getViagens } from "../../services/index";

class Home extends React.Component {
  componentDidMount() {
    getViagens()
      .then(sucess => this.setViagens(sucess.data.results))
      .catch(err => console.log(err));
  }

  handleCardClick = Viagem => {
    this.props.setSelectedViagem(Viagem);
    this.props.history.push("/viagem");
  };

  render() {
    const { viagens } = this.props;
    return (
      <div className="center">
        <div>
          <Navbar />
        </div>
        <div className="marta_slide">
          <img src={Marta} alt="Slide" className="marta_image" />
        </div>
        <div className="viagens__cards">
          <div>
            <span className="viagens">Patrocine:</span>
            <a className="mais_viagens" href="/viagem">
              Ver mais viagens
            </a>
          </div>
          <div className="viagem__card">
            {viagens.slice(0, 3).map((viagem, index) => (
              <ViagemCard
                viagem={viagem}
                onClick={() => this.handleCardClick(viagem)}
              />
            ))}
          </div>
          <div className="viagem__card">
            {viagens.slice(3, 6).map((viagem, index) => (
              <ViagemCard
                viagem={viagem}
                onClick={() => this.handleCardClick(viagem)}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="comment_card">
            {viagens.slice(0, 3).map((viagem, index) => (
              <CommentCard viagem={viagem} />
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
)(Home);
