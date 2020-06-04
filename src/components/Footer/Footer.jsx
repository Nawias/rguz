import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="content">
          <div className="about">
            <h4>KRÓTKO O NAS</h4>
            Jesteśmy firmą przewozowo-usługową zajmującą się transportem towarów
            na terenie Europy.
          </div>
          <div className="contactInfo">
            <h4>KONTAKT</h4>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur rem iste, nobis eos culpa dicta at, tempora voluptatum
            quasi, id illum quos cupiditate quae repellendus porro soluta
            praesentium nostrum vel.
          </div>
          <div className="footerMenu">
            <h4>MENU</h4>
            <ul className="footerMenu">
              <li>
                <Link to="/">STRONA GŁÓWNA</Link>
              </li>
              <li>
                <Link to="/o-nas">O NAS</Link>
              </li>
              <li>
                <Link to="uslugi">USŁUGI</Link>
              </li>
              <li>
                <Link to="/praca">PRACA</Link>
              </li>
              <li>
                <Link to="kontakt">KONTAKT</Link>
              </li>
            </ul>
          </div>

          <div className="facebook">
            <h4>POLUB NAS NA FACEBOOKU</h4>{" "}
            <i className="fab fa-facebook fa-3x"></i>
          </div>
        </div>
        <div className="line">
          <hr />
        </div>
        <p className="devnote">Grupa Transportowa RGuZ @ 2020</p>
      </div>
    );
  }
}

export default Footer;
