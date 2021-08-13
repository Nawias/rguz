import React, { Component } from "react";
import { AppBody } from "../../App";
import InProgress from "../InProgress";
import "./About.css";
import Person from "./Components/Person";
class About extends Component {
  render() {
    return (
      <div className="aboutComponent">
        <AppBody>
          <div className="People">
            <Person
              name="Darek"
              description="Programista C i czasami Java(C)."
              img="/img/about/darek.png"
            />
            <Person
              name="Nawias"
              description="Pisze tą jebaną strone od 2020."
              img="/img/about/nawias.png"
              rtl
            />
            <Person
              name="Zakre"
              description="Niby prezes ale chuja go obchodzi przyszłość firmy. Przynajmniej ma firmowe Seicento."
              img="/img/about/zakre.png"
            />
          </div>
        </AppBody>
      </div>
    );
  }
}

export default About;
