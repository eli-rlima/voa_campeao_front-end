import "./index.css";

import Navbar from "../Navbar";
import React from "react";
import Viagem from "./components/ViagemCard";
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
    console.log(this.state);
    return (
      <div>
        <Navbar />
        <h1>Voa Campeão</h1>
        <ul>
          {this.state.viagens.map((viagem, index) => (
            <Viagem viagem={viagem} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
