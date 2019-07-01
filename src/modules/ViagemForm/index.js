import "./index.css";

import Form from "./components/Form";
import React from "react";
import { connect } from "react-redux";
import { createViagem } from "../../services";
import moment from "moment";
import { setSelectedViagem } from "../../actions";

class ViagemForm extends React.Component {
  submit = values => {
    const data = {
      ...values,
      atleta: "10334907411",
      data_ida: moment(values.data_ida).format("YYYY-MM-DD"),
      data_volta: moment(values.data_volta).format("YYYY-MM-DD")
    };
    createViagem(data)
      .then(sucess => {
        this.props.setSelectedViagem(sucess.data);
        this.props.history.push("/viagem");
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="Viagem-form">
        <h1 className="Viagem-form__title">Cadastro de Viagem</h1>
        <h4 className="Viagem-form__subtitle">
          precisamos de algumas informações sobre a viagem, preencha os campos
          abaixo:
        </h4>
        <div className="Viagem-form__form" />
        <Form onSubmit={this.submit} />
      </div>
    );
  }
}
export default connect(
  null,
  { setSelectedViagem }
)(ViagemForm);
