import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  state = {};

  render() {
    return (
      <div className={`modal ${this.props.className}`}>
        <div className="modalBody">
          {this.props.children}
          <img src="img/golab.png" />
          <h2>Łatwe ciastka fistaszkowe</h2>
          <p>
            Nie masz fistaszków? Nie przejmuj się. Po prostu dorzuć do ciastek
            taką samą ilość innych, ulubionych orzechów lub suszonych owoców
            (większe warto wcześniej nieco posiekać).
          </p>
          <br />
          <h2>Łatwe ciastka fistaszkowe - składniki:</h2>
          <ul>
            <li>110g masła</li>
            <li>200g cukru białego lub trzcinowego</li>
            <li>1 jajko</li>
            <li>250g mąki</li>
            <li>1/2 łyżeczki proszku do pieczenia</li>
            <li>150g niesolonych orzeszków ziemnych</li>
          </ul>
          <br />
          <h2>Łatwe ciastka fistaszkowe - przepis:</h2>
          <p>
            Masło z cukrem ucieramy na puszystą masę, wbijamy jajko i ucieramy
            dalej, aż masa znowu będzie jednolita i kremowa. Dodajemy mąkę
            wymieszaną z proszkiem do pieczenia, krótko mieszamy mikserem na
            najniższych obrotach. Wsypujemy orzeszki, mieszamy łyżką, aby równo
            rozłożyły się w cieście. Porcje ciasta (1 łyżka na 1 ciastko)
            kładziemy na blasze wyściełanej pergaminem, zachowując odstępy, bo
            ciastka trochę rosną. Pieczemy 8-10 minut w 180 st. C na złoty
            kolor.
          </p>
          <hr />
          <h4>
            Po więcej przepisów zapraszamy na bloga{" "}
            <a href="https://haps.pl/Haps/56,167709,12884981,szybkie-male-co-nieco-10-przepisow-na-ciasteczka.html">
              haps.pl
            </a>
            .
          </h4>
        </div>
      </div>
    );
  }
}

export default Modal;
