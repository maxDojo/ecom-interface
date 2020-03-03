import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header_content d-flex flex-row align-items-center justify-content-start">
          {/* <!-- Hamburger --> */}
          <div className="hamburger menu_mm">
            {/* <i className="fa fa-bars menu_mm" aria-hidden="true"></i> */}
            <FontAwesomeIcon icon="bars" className="menu_mm" />
          </div>

          {/* <!-- Logo --> */}
          <div className="header_logo">
            <a href="#">
              <div>
                a<span>star</span>
              </div>
            </a>
          </div>

          {/* <!-- Navigation --> */}
          <nav className="header_nav">
            <ul className="d-flex flex-row align-items-center justify-content-start">
              <li>
                <a href="index.html">home</a>
              </li>
              <li>
                <a href="#">woman</a>
              </li>
              <li>
                <a href="#">man</a>
              </li>
              <li>
                <a href="#">lookbook</a>
              </li>
              <li>
                <a href="#">blog</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </nav>

          {/* <!-- Header Extra --> */}
          <div className="header_extra ml-auto d-flex flex-row align-items-center justify-content-start">
            {/* <!-- Language --> */}
            <div className="info_languages has_children">
              <div className="language_flag">
                <img
                  src="images/flag_1.svg"
                  alt="https://www.flaticon.com/authors/freepik"
                />
              </div>
              <div className="dropdown_text">english</div>
              <div className="dropdown_arrow">
                {/* <i className="fa fa-angle-down" aria-hidden="true"></i> */}
                <FontAwesomeIcon icon="angle-down" />
              </div>

              {/* <!-- Language Dropdown Menu --> */}
              <ul>
                <li>
                  <a href="#">
                    <div className="language_flag">
                      <img
                        src="images/flag_2.svg"
                        alt="https://www.flaticon.com/authors/freepik"
                      />
                    </div>
                    <div className="dropdown_text">french</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="language_flag">
                      <img
                        src="images/flag_3.svg"
                        alt="https://www.flaticon.com/authors/freepik"
                      />
                    </div>
                    <div className="dropdown_text">japanese</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="language_flag">
                      <img
                        src="images/flag_4.svg"
                        alt="https://www.flaticon.com/authors/freepik"
                      />
                    </div>
                    <div className="dropdown_text">russian</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="language_flag">
                      <img
                        src="images/flag_5.svg"
                        alt="https://www.flaticon.com/authors/freepik"
                      />
                    </div>
                    <div className="dropdown_text">spanish</div>
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Currency --> */}
            <div className="info_currencies has_children">
              <div className="dropdown_text">usd</div>
              <div className="dropdown_arrow">
                {/* <i className="fa fa-angle-down" aria-hidden="true"></i> */}
                <FontAwesomeIcon icon="angle-down" />
              </div>

              {/* <!-- Currencies Dropdown Menu --> */}
              <ul>
                <li>
                  <a href="#">
                    <div className="dropdown_text">EUR</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="dropdown_text">YEN</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="dropdown_text">GBP</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="dropdown_text">CAD</div>
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Cart --> */}
            <div className="cart d-flex flex-row align-items-center justify-content-start">
              <div className="cart_icon">
                <a href="cart.html">
                  <img src="images/bag.png" alt="" />
                  <div className="cart_num">2</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
