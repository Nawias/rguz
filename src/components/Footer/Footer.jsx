import React, { Component } from "react";
import "./Footer.css";
import NavLink from "../NavLink";

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
            <p>
              <i className="fas fa-map-marker-alt" /> 60-169 Poznań,
              ul.&nbsp;Gorzelna&nbsp;17
            </p>
            <p>
              <i className="fas fa-phone" /> Tel. Kom.
              +48&nbsp;516&nbsp;617&nbsp;242
            </p>
            <p>
              <i className="fas fa-at" /> biuro.rguz@yandex.com
            </p>
            <p>
              <i className="fab fa-discord" />{" "}
              <a href="https://discord.gg/VEHDYpQ" target="_blank">
                https://discord.gg/VEHDYpQ
              </a>
            </p>
            <p>
              <i className="fas fa-dove" /> Gołąb pocztowy - Jaruś, reaguje na
              imię i chleb ze smalcem
            </p>
          </div>
          <div className="footerMenu">
            <h4>MENU</h4>
            <ul>
              <NavLink to="/" value="Strona Główna" />
              <NavLink to="/o-nas" value="O Nas" />
              <NavLink to="/praca" value="Praca" />
              <NavLink to="/kontakt" value="Kontakt" />
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
        <p className="devnote">
          Grupa Transportowa RGuZ @ 2020-{`${new Date().getFullYear()}`}
        </p>
      </div>
    );
  }
}

export default Footer;
