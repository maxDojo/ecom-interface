import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";
import Master from "./components/master";
import Hamburger from "./components/headerElements/hamburger";

library.add(fab, fas);
function App() {
  return (
    <React.Fragment>
      <Hamburger />
    </React.Fragment>
  );
}

export default App;
