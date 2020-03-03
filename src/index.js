import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/main_styles.css";
import "./styles/OwlCarousel2-2.2.1/owl.carousel.css";
import "./styles/OwlCarousel2-2.2.1/owl.theme.default.css";
import "./styles/OwlCarousel2-2.2.1/animate.css";
import "./styles/responsive.css";
// import "bootstrap/dist/js/bootstrap";
// import "./plugins/greensock/TweenMax.min.js";
// import "./plugins/greensock/TimelineMax.min.js";
// import "./plugins/scrollmagic/ScrollMagic.min.js";
// import "./plugins/greensock/animation.gsap.min.js";
// import "./plugins/greensock/ScrollToPlugin.min.js";
// import "./plugins/OwlCarousel2-2.2.1/owl.carousel";
// import "./plugins/easing/easing";
// import './plugins/Isotope/isotope.pkgd.min.js'
// import './plugins/Isotope/fitcolumns'
// import "./custom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
