import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className="sidebar">
        {/* <!-- Info --> */}
        <div className="info">
          <div className="info_content d-flex flex-row align-items-center justify-content-start">
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
                <FontAwesomeIcon icon="angle-down" />
                {/* <i className="fa fa-angle-down" aria-hidden="true"></i> */}
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
          </div>
        </div>

        {/* <!-- Logo --> */}
        <div className="sidebar_logo">
          <a href="#">
            <div>
              a<span>star</span>
            </div>
          </a>
        </div>

        {/* <!-- Sidebar Navigation --> */}
        <nav className="sidebar_nav">
          <ul>
            <li>
              <a href="index.html">
                <FontAwesomeIcon icon="angle-right" />
                {/* home<i className="fa fa-angle-right" aria-hidden="true"></i> */}
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon="angle-right" />
                {/* woman<i className="fa fa-angle-right" aria-hidden="true"></i> */}
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon="angle-right" />
                {/* man<i className="fa fa-angle-right" aria-hidden="true"></i> */}
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon="angle-right" />
                {/* lookbook<i className="fa fa-angle-right" aria-hidden="true"></i> */}
              </a>
            </li>
            <li>
              <a href="blog.html">
                <FontAwesomeIcon icon="angle-right" />
                {/* blog<i className="fa fa-angle-right" aria-hidden="true"></i> */}
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon="angle-right" />
                {/* contact<i className="fa fa-angle-right" aria-hidden="true"></i> */}
              </a>
            </li>
          </ul>
        </nav>

        {/* <!-- Search --> */}
        <div className="search">
          <form action="#" className="search_form" id="sidebar_search_form">
            <input
              type="text"
              className="search_input"
              placeholder="Search"
              required="required"
            />
            <button className="search_button">
              <FontAwesomeIcon icon="search" />
              {/* <i className="fa fa-search" aria-hidden="true"></i> */}
            </button>
          </form>
        </div>

        {/* <!-- Cart --> */}
        <div className="cart d-flex flex-row align-items-center justify-content-start">
          <div className="cart_icon">
            <a href="cart.html">
              <img src="images/bag.png" alt="" />
              <div className="cart_num">2</div>
            </a>
          </div>
          <div className="cart_text">bag</div>
          <div className="cart_price">$39.99 (1)</div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
