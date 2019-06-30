import AtletaCard from "./components/AtletaCard";
import ButtonCard from "./components/ButtonCard";
import DescricaoCard from "./components/DescricaoCard";
import InfoCompCard from "./components/InfoCompCard";
import Navbar from "../Navbar";
import React from "react";
import { connect } from "react-redux";

class Viagem extends React.Component {
  render() {
    console.log(this.props.viagem);
    const { viagem } = this.props;
    return (
      <div>
        <Navbar />
        {viagem && (
          <div>
            <div>
              <AtletaCard viagem={viagem} />
            </div>
            <div>
              <InfoCompCard viagem={viagem} />
            </div>
            <div>
              <DescricaoCard viagem={viagem} />
            </div>
            <div>
              <ButtonCard />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    viagem: state.viagens.selectedViagem
  };
};

export default connect(mapStateToProps)(Viagem);
