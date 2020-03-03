import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div className="menu d-flex flex-column align-items-start justify-content-start menu_mm trans_400">
        <div className="menu_close_container">
          <div className="menu_close">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="menu_top d-flex flex-row align-items-center justify-content-start">
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
              <FontAwesomeIcon icon="angle-down" />
              {/* <i className="fa fa-angle-down" aria-hidden="true"></i> */}
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
        <div className="menu_search">
          <form action="#" className="header_search_form menu_mm">
            <input
              type="search"
              className="search_input menu_mm"
              placeholder="Search"
              required="required"
            />
            <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
              {/* <i className="fa fa-search menu_mm" aria-hidden="true"></i> */}
              <FontAwesomeIcon icon="search" className="menu_mm" />
            </button>
          </form>
        </div>
        <nav className="menu_nav">
          <ul className="menu_mm">
            <li className="menu_mm">
              <a href="index.html">home</a>
            </li>
            <li className="menu_mm">
              <a href="#">woman</a>
            </li>
            <li className="menu_mm">
              <a href="#">man</a>
            </li>
            <li className="menu_mm">
              <a href="#">lookbook</a>
            </li>
            <li className="menu_mm">
              <a href="blog.html">blog</a>
            </li>
            <li className="menu_mm">
              <a href="contact.html">contact</a>
            </li>
          </ul>
        </nav>
        <div className="menu_extra">
          <div className="menu_social">
            <ul>
              <li>
                <a href="#">
                  {/* <i className="fa fa-pinterest" aria-hidden="true"></i> */}
                  <FontAwesomeIcon icon="pinterest" />
                </a>
              </li>
              <li>
                <a href="#">
                  {/* <i className="fa fa-facebook" aria-hidden="true"></i> */}
                  <FontAwesomeIcon icon="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  {/* <i className="fa fa-instagram" aria-hidden="true"></i> */}
                  <FontAwesomeIcon icon="instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  {/* <i className="fa fa-twitter" aria-hidden="true"></i> */}
                  <FontAwesomeIcon icon="twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
