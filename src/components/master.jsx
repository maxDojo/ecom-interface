import React, { Component } from "react";
import Header from "./header";
import Menu from "./menu";
import Sidebar from "./sidebar";
import Home from "./home";
import Boxes from "./boxes";
import Categories from "./categories";
import Products from "./products";
import Newsletter from "./newsletter";
import Footer from "./footer";

class Master extends Component {
  state = {};
  render() {
    return (
      <div className="super_container">
        <Header />
        <Menu />
        <Sidebar />
        <Home />
        <Boxes />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
      </div>
    );
  }
}

export default Master;
