import AtletaCard from "./components/AtletaCard";
import InfoCompCard from "./components/InfoCompCard";
import Navbar from "../Navbar";
import React from "react";
import { getViagens } from "../../services/index";

class Viagem extends React.Component {
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
    console.log(this.state);
    return (
      <div>
        <div classeName="title">
          <Navbar />
          <h1>Voa Campeão</h1>
        </div>
        <ul>
          {this.state.viagens.map((viagem, index) => (
            <AtletaCard viagem={viagem} />
          ))}
        </ul>
        <ul>
          {this.state.viagens.map((viagem, index) => (
            <InfoCompCard viagem={viagem} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Viagem;
