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
        <div classeName="title">
          <Navbar />
          <h1>Voa Campeão</h1>
        </div>
        <ul>
          {this.state.viagens.map((viagem, index) => (
            <ViagemCard viagem={viagem} />
          ))}
        </ul>
        <ul>
          {this.state.viagens.map((viagem, index) => (
            <CommentCard viagem={viagem} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
