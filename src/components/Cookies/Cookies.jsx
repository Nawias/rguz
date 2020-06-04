import React, { Component } from "react";
import "./Cookies.css";

class Cookies extends Component {
  state = { closed: false };
  render() {
    return (
      <div className="cookiesModal">
        <div className="content">
          <h4>ZBIERAMY CIASTECZKA DLA JARUSIA</h4>
          Piekarnik rozgrzej do temperatury 170 st. C. Miękkie masło, cukier
          puder i skórkę z cytryny przełóż do dużej miski i ubij mikserem na
          puszystą masę. Do masy dodaj mąkę pszenną i mąkę ziemniaczaną,
          wymieszaj. Masę przełóż do rękawa cukierniczego i wyciskaj na blachę
          wyłożoną papierem do pieczenia niewielkie ciasteczka (o średnicy około
          3 cm). Piecz 12-14 minut na złotobrązowy kolor. Wszystkie składniki
          kremu ubij na puszystą masę. Smaruj nim ciasteczka i sklejaj je po
          dwa.
        </div>
        <button className="accept">Akceptuj</button>
      </div>
    );
  }
}

export default Cookies;
