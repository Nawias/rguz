import React, { Component } from "react";
import "./InProgress.css";

class InProgress extends Component {
  render() {
    return (
      <div className="inProgressPage">
        <img src="img/inprogress.png" alt="InProgress" />
        <h2>Strona w budowie</h2>
        <h5>Zapraszamy już wkrótce!</h5>
      </div>
    );
  }
}

export default InProgress;
