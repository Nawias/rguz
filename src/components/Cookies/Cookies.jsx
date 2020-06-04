import React, { Component } from "react";
import "./Cookies.css";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

class CookiesComponent extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = { closed: cookies.get("damian") };
  }

  getClasses() {
    let classes = "cookiesModal";
    classes += this.state.closed ? " closed" : "";
    return classes;
  }

  onAccept = () => {
    const { cookies } = this.props;
    cookies.set("damian", true, { path: "/" });
    this.setState({ closed: true });
  };
  render() {
    let classes = this.getClasses();
    return (
      <div className={classes}>
        <i className="fas fa-cookie-bite"></i>
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
        <div className="buttons">
          <button className="accept" onClick={this.onAccept}>
            Akceptuj
          </button>
          <button className="accept">Zaintrygowałeś mnie</button>
        </div>
      </div>
    );
  }
}

export default withCookies(CookiesComponent);
