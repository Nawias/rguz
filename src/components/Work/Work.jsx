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
        "background-image": "url(" + props.img + ")",
      }}
    >
      <div>{props.caption}</div>
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
          <h2>oraz...</h2>
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
        >
          <img src="img/work/zakre.png" alt="zakre" />
          <img src="img/work/dariusz.png" alt="dariusz" />
          <img src="img/work/mieszko.png" alt="mieszko" />
        </Carousel>
        <AppBody>
          <h3>
            Napisz do nas w zakładce <Link to="/kontakt">Kontakt</Link>
          </h3>
        </AppBody>
      </div>
    );
  }
}

export default Work;
