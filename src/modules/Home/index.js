import "./index.css";

import CommentCard from "./components/CommentCard";
import Navbar from "../Navbar";
import React from "react";
import ViagemCard from "./components/ViagemCard";
import { getViagens } from "../../services/index";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { viagens: [] };
  }
  componentDidMount() {
    getViagens()
      .then(sucess => this.setState({ viagens: sucess.data.results }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="center">
        <div>
          <Navbar />
          <h1>Voa Campeão</h1>
        </div>
        <div className="viagens__cards">
          <span className="viagens">Viagens</span>
          <span className="mais_viagens">Ver mais viagens</span>
          <ul className="viagem__card">
            {this.state.viagens.slice(0, 3).map((viagem, index) => (
              <ViagemCard viagem={viagem} />
            ))}
          </ul>
          <ul className="viagem__card">
            {this.state.viagens.slice(3, 6).map((viagem, index) => (
              <ViagemCard viagem={viagem} />
            ))}
          </ul>
        </div>
        <div>
          <ul className="comment_card">
            {this.state.viagens.slice(0, 3).map((viagem, index) => (
              <CommentCard viagem={viagem} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
