import "./index.css";

import CommentCard from "./components/CommentCard";
import { Link } from "react-router-dom";
import Marta from "../../images/marta.jpg";
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
    console.log(this.state.viagens);
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
            {this.state.viagens.slice(0, 3).map((viagem, index) => (
              <a href="">
                <div>
                  <Link to={`/viagem/${viagem.id}`}>
                    <ViagemCard viagem={viagem} />
                  </Link>
                </div>
              </a>
            ))}
          </div>
          <div className="viagem__card">
            {this.state.viagens.slice(3, 6).map((viagem, index) => (
              <a href="">
                <div>
                  <ViagemCard viagem={viagem} />
                </div>
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="comment_card">
            {this.state.viagens.slice(0, 3).map((viagem, index) => (
              <CommentCard viagem={viagem} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
