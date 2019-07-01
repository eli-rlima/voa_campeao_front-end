import "./index.css";

import Form from "./components/Form";
import React from "react";
import { createViagem } from "../../services";

class ViagemForm extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values);
    createViagem(values)
      .then(sucess => console.log(sucess))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <div className="Viagem-form">
          <h1 className="Viagem-form__title">Cadastro de Viagem</h1>
          <h4 className="Viagem-form__subtitle">
            precisamos de algumas informações sobre a viagem, preencha os campos
            abaixo:
          </h4>
        </div>
        <Form onSubmit={this.submit} />
      </div>
    );
  }
}

export default ViagemForm;
