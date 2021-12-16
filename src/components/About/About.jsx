import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppBody } from "../../App";
import InProgress from "../InProgress";
import "./About.css";
import Person from "./Components/Person";
import History from "./Components/History";
import Colors from "./Components/Colors";
class About extends Component {
  render() {
    return (
      <div className="aboutComponent">
        <AppBody>
          <div className="People">
            <Person
              name="Darek"
              description="The lass vandalizes with urchin, crush the seychelles until it hobbles."
              img="/img/about/darek.png"
            />
            <Person
              name="Nawias"
              description="The lad ransacks with riddle, raid the cook islands until it travels."
              img="/img/about/nawias.png"
              rtl
            />
            <Person
              name="Zakre"
              description="Cannibals stutter with amnesty! The ale hauls with halitosis, rob the freighter before it sings."
              img="/img/about/zakre.png"
            />
            <Person
              name="Ty!"
              description={
                <>
                  Nasz najbardziej obiecujący pracownik! Sprawdź ofertę
                  w&nbsp;sekcji&nbsp;<Link to="/praca">Praca</Link>
                </>
              }
              img="/img/about/you.png"
              rtl
            />
          </div>
          <div className="spacer" />
          <History />
          <div className="spacer" />
          <Colors />
          <div className="spacer" />
        </AppBody>
      </div>
    );
  }
}

export default About;
