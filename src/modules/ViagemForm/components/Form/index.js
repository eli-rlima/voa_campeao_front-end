import "./index.css";

import { Col, Row } from "react-flexbox-grid";
import { Field, reduxForm } from "redux-form";

import React from "react";

const required = value => (value ? undefined : "Required");

function normalizeDate(value, prevValue) {
  if (!value) return value;

  const valueOnlyNumbers = value.replace(/[^\d]/g, "");
  const prevValueOnlyNumbers = prevValue && prevValue.replace(/[^\d]/g, "");

  if (valueOnlyNumbers === prevValueOnlyNumbers) return value;

  const day = valueOnlyNumbers.slice(0, 2);
  const month = valueOnlyNumbers.slice(2, 4);
  const year = valueOnlyNumbers.slice(4, 8);

  if (valueOnlyNumbers.length < 2) return `${day}`;
  if (valueOnlyNumbers.length === 2) return `${day}/`;
  if (valueOnlyNumbers.length < 4) return `${day}/${month}`;
  if (valueOnlyNumbers.length === 4) return `${day}/${month}/`;
  if (valueOnlyNumbers.length > 4) return `${day}/${month}/${year}`;
}

let Form = props => {
  const { handleSubmit, submitting, valid } = props;
  return (
    <form className="Viagem-form" onSubmit={handleSubmit}>
      <Row>
        <Col xs={6}>
          <label className="Viagem-form__label" htmlFor="data_ida">
            Data de ida:
          </label>
          <Field
            className="Viagem-form__input"
            name="data_ida"
            component="input"
            type="text"
            normalize={normalizeDate}
            validate={required}
          />
        </Col>
        <Col xs={6}>
          <label className="Viagem-form__label" htmlFor="data_volta">
            Data de volta:
          </label>
          <Field
            className="Viagem-form__input"
            name="data_volta"
            component="input"
            type="text"
            normalize={normalizeDate}
            validate={required}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <label className="Viagem-form__label" htmlFor="origem">
            Origem:
          </label>
          <Field
            className="Viagem-form__input"
            name="origem"
            component="input"
            type="text"
            validate={required}
          />
        </Col>
        <Col xs={6}>
          <label className="Viagem-form__label" htmlFor="destino">
            Destino:
          </label>
          <Field
            className="Viagem-form__input"
            name="destino"
            component="input"
            type="text"
            validate={required}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <label className="Viagem-form__label" htmlFor="modalidade_comp">
            Modalidade:
          </label>
          <Field
            className="Viagem-form__input"
            name="modalidade_comp"
            component="input"
            type="text"
            validate={required}
          />
        </Col>
        <Col xs={6}>
          <label className="Viagem-form__label" htmlFor="competicao">
            Competição:
          </label>
          <Field
            className="Viagem-form__input"
            name="competicao"
            component="input"
            type="text"
            validate={required}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <label className="Viagem-form__label" htmlFor="descricao_comp">
            Conte um pouco sobre a competição:
          </label>
          <Field
            className="Viagem-form__textarea"
            name="descricao_comp"
            component="textarea"
            type="textarea"
            validate={required}
          />
        </Col>
      </Row>
      <Row>
        <button
          disabled={submitting || !valid}
          className="Viagem-form__submit"
          type="submit"
        >
          Submeter à avaliação
        </button>
      </Row>
    </form>
  );
};

Form = reduxForm({
  // a unique name for the form
  form: "viagem"
})(Form);

export default Form;
