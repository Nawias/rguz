import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavLink extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className={this.props.className}>
        <Link to={this.props.to}>{this.props.value}</Link>
      </li>
    );
  }
}
