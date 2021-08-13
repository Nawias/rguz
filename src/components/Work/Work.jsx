import React, { Component } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./Work.css";
import { AppBody } from "../../App";
import { Link } from "react-router-dom";

function Meme(props) {
  return (
    <div
      className="meme"
      style={{
        backgroundImage: "url(" + props.img + ")",
      }}
    >
      <div>{props.caption}</div>
    </div>
  );
}

function OfferItem(props) {
  return (
    <div className="offerItem">
      <i className={props.iconClass}></i>
      {props.children}
    </div>
  );
}

class Work extends Component {
  render() {
    return (
      <div className="workComponent">
        <AppBody>
          <h1 style={{ padding: "15px 10px" }}>Czy chcesz...</h1>
          <Meme
            img="/img/work/crash.png"
            alt="crash"
            caption="Jeździć po swojemu?"
          ></Meme>
          <h2 className="memeAnd">oraz...</h2>
          <Meme
            img="/img/work/cash.png"
            alt="cash"
            caption="Mieć kasy jak lodu?"
          ></Meme>
          <h1 className="joinus">Dołącz do naszej ekipy!</h1>
          <h2>Zobacz co mówią nasi pracownicy:</h2>
        </AppBody>
        <Carousel
          centered
          dots
          infinite
          arrows
          autoPlay={5000}
          animationSpeed={750}
          itemWidth={900}
        >
          <img src="img/work/zakre.png" alt="zakre" />
          <img src="img/work/dariusz.png" alt="dariusz" />
          <img src="img/work/mieszko.png" alt="mieszko" />
        </Carousel>
        <AppBody>
          <h2 className="driver"> Kierowca Międzynarodowy C+E </h2>
          <div className="offer">
            <h2>U nas dostajesz...</h2>
            <div className="offerItems">
              <OfferItem iconClass="fas fa-money-bill-wave fa-fw">
                <p>
                  Wynagrodzenie zasadniczo jest, ale praktycznie różnie bywa...
                  plus dieta cud do 30KG mniej W MIESIĄC
                </p>
              </OfferItem>
              <OfferItem iconClass="fas fa-stopwatch fa-fw">
                <p>
                  Elastyczne systemy pracy takie jak: 2/1, 2/2, 3/1, 4/1-4/2,
                  √3, 2π, 10<sup>100</sup>...
                </p>
              </OfferItem>
              <OfferItem iconClass="fas fa-ambulance fa-fw">
                <p>Możliwość objęcia ubezpieczeniem grupowym*</p>
                <p style={{ fontSize: "10px", paddingTop: "40%" }}>
                  *chyba, że mieszkasz w Kraśniku - strefie wolnej od PZU
                </p>
              </OfferItem>
              <OfferItem iconClass="fas fa-bus fa-fw">
                <p>
                  Ciągniki VOLVO, DAF i SCANIA, w które włożysz wiele pasji (i
                  pieniążków); jeśli nie masz własnej ciężarówki to lepiej
                  szybko na nią zarób ;)
                </p>
              </OfferItem>
              <OfferItem iconClass="fas fa-graduation-cap fa-fw">
                <p>
                  Jeśli jesteś bez doświadczenia, ale ciężarówki są twoją pasją
                  to zapraszamy do tutoriala w Euro Truck Simulator 2 -
                  pokryjemy koszty szkolenia*
                </p>
                <p style={{ fontSize: "10px", paddingTop: "7%" }}>
                  *szkolenie jest darmowe
                </p>
              </OfferItem>
            </div>
          </div>
          <div className="requirements">
            <h2>Wiemy, że posiadasz...</h2>
            <ul>
              <li>
                Aktualne prawo jazdy C+E, a przede wszystkim{" "}
                <span className="code95">kod 95</span>
              </li>
              <li>Karty kierowcy - bo na tarczki już nie mamy :)</li>
              <li>
                Świadectwo kwalifikacji zawodowej (masz to w{" "}
                <span className="code95">kodzie 95</span>)
              </li>
              <li>
                Aktualne orzeczenie psychologiczne (to też masz w{" "}
                <span className="code95">kodzie 95</span>)
              </li>
              <li>
                Zaświadczenie lekarskie (to też jest w{" "}
                <span className="code95">kodzie 95</span>)
              </li>
              <li>Chęć i zaangażowanie w pracę (bez pasji ciężko pracować)</li>
            </ul>
            <p style={{ textAlign: "center" }}>
              ...a nawet jeśli nie posiadasz to i tak wszystkiego Cię nauczymy.
            </p>
          </div>
          <h3>
            Zaintrygowany? Napisz do nas w zakładce{" "}
            <Link to="/kontakt">Kontakt</Link>
          </h3>
        </AppBody>
      </div>
    );
  }
}

export default Work;
