import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  state = { collapsed: false };

  getItemClasses() {
    let classes = "item";
    classes += this.state.collapsed ? " active" : "";
    return classes;
  }
  getIconClasses() {
    let classes = "fas fa-";
    classes += this.state.collapsed ? "times" : "bars";
    return classes;
  }
  render() {
    let itemClasses = this.getItemClasses();
    let iconClasses = this.getIconClasses();
    return (
      <div className="headerComponent">
        <div className="logoImg">
          <img src="GT-RGuZ.png" alt="LOGO" />
        </div>

        <nav>
          <ul className="menu">
            <li className={itemClasses}>
              <Link to="/">STRONA GŁÓWNA</Link>
            </li>
            <li className={itemClasses}>
              <Link to="/o-nas">O NAS</Link>
            </li>
            <li className={itemClasses}>
              <Link to="uslugi">USŁUGI</Link>
            </li>
            <li className={itemClasses}>
              <Link to="/praca">PRACA</Link>
            </li>
            <li className={itemClasses}>
              <Link to="kontakt">KONTAKT</Link>
            </li>
            <li className="toggle">
              <a href="#" onClick={this.toggleMenu}>
                <i className={iconClasses}></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  toggleMenu = () => {
    let c = this.state.collapsed;
    this.setState({ collapsed: !c });
  };
}

export default Header;
