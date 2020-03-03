import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import "./hamburger.css";

class Hamburger extends Component {
  state = {};

  render() {
    return (
      <div className="hamburger menu_mm">
        {/* <i className="fa fa-bars menu_mm" aria-hidden="true"></i> */}
        <FontAwesomeIcon icon="bars" className="menu_mm" ariaHidden="true" />
      </div>
    );
  }
}

export default Hamburger;
