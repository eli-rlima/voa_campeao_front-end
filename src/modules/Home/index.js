import "./index.css";

import Navbar from "../Navbar";
import React from "react";
import Viagem from "./components/Viagem";
import { getViagem } from "../../services/index";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { viagens: [] };
  }
  componentDidMount() {
    getViagem()
      .then(sucess => this.setState({ viagens: sucess.data.results }))
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Navbar />
        <h1>Shopping List for DAle</h1>
        <ul className="viagensInfo">
          {this.state.viagens.map((item, index) => (
            <Viagem viagem={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
