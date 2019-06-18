import Navbar from "../Navbar";
import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Shopping List for DAle</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export default Home;
