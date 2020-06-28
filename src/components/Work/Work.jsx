import React, { Component } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./Work.css";
import { AppBody } from "../../App";

class Work extends Component {
  render() {
    return (
      <div className="workComponent">
        <AppBody>
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
        <AppBody></AppBody>
      </div>
    );
  }
}

export default Work;
