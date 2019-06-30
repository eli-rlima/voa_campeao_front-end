import { Link } from "react-router-dom";
import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <body>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdnjs.cloudflare.comLinkjax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossOrigin="anonymous"
        />
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossOrigin="anonymous"
        />
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <Link class="my-0 mr-md-auto font-weight-normal" to="/">
            Voa Campeão
          </Link>
          <nav class="my-2 my-md-0 mr-md-3">
            <Link class="p-2 text-dark" to="/cadastro">
              peça ajuda
            </Link>
            <Link class="p-2 text-dark" to="/ajude">
              ajude um atleta
            </Link>
            <Link class="p-2 text-dark" to="/suporte">
              suporte
            </Link>
            <Link class="p-2 text-dark" to="/depoimento">
              depoimentos
            </Link>
          </nav>
          <button class="btn btn-outline-success my-2 my-sm-0" href="#">
            Login
          </button>
        </div>
      </body>
    );
  }
}

export default Navbar;
