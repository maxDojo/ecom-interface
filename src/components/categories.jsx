import React, { Component } from "react";

class Categories extends Component {
  state = {};
  render() {
    return (
      <div className="categories">
        <div className="section_container">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="categories_list_container">
                  <ul className="categories_list d-flex flex-row align-items-center justify-content-start">
                    <li>
                      <a href="categories.html">new arrivals</a>
                    </li>
                    <li>
                      <a href="categories.html">recommended</a>
                    </li>
                    <li>
                      <a href="categories.html">best sellers</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
