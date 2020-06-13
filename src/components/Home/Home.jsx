import React, { Component } from "react";
import "./Home.css";
import { AppBody } from "../../App";
import { Link } from "react-router-dom";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h2>
        Grupa Transportowa <span style={{ color: "brown" }}>R</span>
        <span style={{ color: "black" }}>G</span>
        <span style={{ color: "brown" }}>uZ</span>
      </h2>
      <h1>Transport z pasją!</h1>
      <h3>Dołącz do nas!</h3>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <img src={props.img} />
      <div className="cardbody">{props.children}</div>
    </div>
  );
}

function HorizontalHeading(props) {
  return (
    <div className="horizontalHeading">
      <h1>{props.heading}</h1>
      <div className="hbody">{props.children}</div>
    </div>
  );
}

function Partners(props) {
  const partners = props.partners.map((p) => <img src={p} />);

  return (
    <div className="partners">
      <h2>Partnerzy:</h2>
      <div className="imgs">{partners}</div>
    </div>
  );
}

class Home extends Component {
  render() {
    return (
      <div className="homeComponent">
        <Jumbotron />
        <AppBody>
          <Card title="TRANSPORT" img="img/card-transport.png">
            Rozwozimy towary po całej Europie. Od Uralu po Gibraltar.
          </Card>
          <Card title="PRACA" img="img/card-work.png">
            Tworzymy miejsca pracy w krajach Europy, m.in. Polsce, Niemczech i
            Francji.
          </Card>
          <Card title="WYDARZENIA" img="img/card-events.png">
            Bierzemy udział w globalnych przedsięwzięciach i wydarzeniach
            społeczeństwa kierowców ciężarówek.
          </Card>
          <HorizontalHeading heading="Potrzebujesz podwózki?">
            Sprawdź naszą ofertę w zakładce <Link to="/uslugi">Usługi</Link>
          </HorizontalHeading>
          <HorizontalHeading heading="Chcesz z nami jeździć?">
            Złóż swoje CV w zakładce <Link to="/praca">Praca</Link>
          </HorizontalHeading>

          <h1 className="joinus">Dołącz do pasjonatów!</h1>
          <Partners partners={["img/partners/p1.png"]} />
        </AppBody>
      </div>
    );
  }
}

export default Home;
