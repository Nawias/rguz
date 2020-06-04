import React, { Component } from "react";
import "./Header.css";
import NavLink from "../NavLink";

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
            <NavLink className={itemClasses} to="/" value="STRONA GŁÓWNA" />
            <NavLink className={itemClasses} to="/o-nas" value="O NAS" />
            <NavLink className={itemClasses} to="/uslugi" value="USŁUGI" />
            <NavLink className={itemClasses} to="/praca" value="PRACA" />
            <NavLink className={itemClasses} to="/kontakt" value="KONTAKT" />
            <li className="toggle">
              <button onClick={this.toggleMenu}>
                <i className={iconClasses}></i>
              </button>
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
