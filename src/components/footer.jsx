import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  // componentDidMount() {
  //   let jquery = "libs/jquery-3.2.1.min.js",
  //     popper = "libs/bootstrap-4.1.3/popper.js",
  //     bootjs = "libs/bootstrap-4.1.3/bootstrap.min.js",
  //     tm = "libs/greensock/TweenMax.min.js",
  //     tlm = "libs/greensock/TimelineMax.min.js",
  //     sm = "libs/scrollmagic/ScrollMagic.min.js",
  //     gsap = "libs/greensock/animation.gsap.min.js",
  //     stp = "libs/greensock/ScrollToPlugin.min.js",
  //     oc = "libs/OwlCarousel2-2.2.1/owl.carousel.js",
  //     easing = "libs/easing/easing.js",
  //     parax = "libs/parallax-js-master/parallax.min.js",
  //     isotope = "libs/Isotope/isotope.pkgd.min.js",
  //     fitcol = "libs/Isotope/fitcolumns.js",
  //     custom = "libs/custom.js";

  //   const script1 = document.createElement("script");
  //   script1.async = true;
  //   script1.src = jquery;
  //   document.body.appendChild(script1);

  //   const script2 = document.createElement("script");
  //   script2.async = true;
  //   script2.src = popper;
  //   document.body.appendChild(script2);

  //   const script3 = document.createElement("script");
  //   script3.async = true;
  //   script3.src = bootjs;
  //   document.body.appendChild(script3);

  //   const script4 = document.createElement("script");
  //   script4.async = true;
  //   script4.src = tm;
  //   document.body.appendChild(script4);

  //   const script5 = document.createElement("script");
  //   script5.async = true;
  //   script5.src = tlm;
  //   document.body.appendChild(script5);

  //   const script6 = document.createElement("script");
  //   script6.async = true;
  //   script6.src = sm;
  //   document.body.appendChild(script6);

  //   const script7 = document.createElement("script");
  //   script7.async = true;
  //   script7.src = gsap;
  //   document.body.appendChild(script7);

  //   const script8 = document.createElement("script");
  //   script8.async = true;
  //   script8.src = stp;
  //   document.body.appendChild(script8);

  //   const script9 = document.createElement("script");
  //   script9.async = true;
  //   script9.src = oc;
  //   document.body.appendChild(script9);

  //   const script10 = document.createElement("script");
  //   script10.async = true;
  //   script10.src = easing;
  //   document.body.appendChild(script10);

  //   const script11 = document.createElement("script");
  //   script11.async = true;
  //   script11.src = parax;
  //   document.body.appendChild(script11);

  //   const script12 = document.createElement("script");
  //   script12.async = true;
  //   script12.src = isotope;
  //   document.body.appendChild(script12);

  //   const script13 = document.createElement("script");
  //   script13.async = true;
  //   script13.src = fitcol;
  //   document.body.appendChild(script13);

  //   const script14 = document.createElement("script");
  //   script14.async = true;
  //   script14.src = custom;
  //   document.body.appendChild(script14);
  // }
  state = {};
  render() {
    return (
      <footer className="footer">
        <div className="footer_content">
          <div className="section_container">
            <div className="container">
              <div className="row">
                {/* <!-- About --> */}
                <div className="col-xxl-3 col-md-6 footer_col">
                  <div className="footer_about">
                    {/* <!-- Logo --> */}
                    <div className="footer_logo">
                      <a href="#">
                        <div>
                          a<span>star</span>
                        </div>
                      </a>
                    </div>
                    <div className="footer_about_text">
                      <p>
                        Donec vitae purus nunc. Morbi faucibus erat sit amet
                        congue mattis. Nullam fringilla faucibus urna, id
                        dapibus erat iaculis ut. Integer ac sem.
                      </p>
                    </div>
                    <div className="cards">
                      <ul className="d-flex flex-row align-items-center justify-content-start">
                        <li>
                          <a href="#">
                            <img src="images/card_1.jpg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/card_2.jpg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/card_3.jpg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/card_4.jpg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/card_5.jpg" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <!-- Questions --> */}
                <div className="col-xxl-3 col-md-6 footer_col">
                  <div className="footer_questions">
                    <div className="footer_title">questions</div>
                    <div className="footer_list">
                      <ul>
                        <li>
                          <a href="#">About us</a>
                        </li>
                        <li>
                          <a href="#">Track Orders</a>
                        </li>
                        <li>
                          <a href="#">Returns</a>
                        </li>
                        <li>
                          <a href="#">Jobs</a>
                        </li>
                        <li>
                          <a href="#">Shipping</a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                        </li>
                        <li>
                          <a href="#">Partners</a>
                        </li>
                        <li>
                          <a href="#">Bloggers</a>
                        </li>
                        <li>
                          <a href="#">Support</a>
                        </li>
                        <li>
                          <a href="#">Terms of Use</a>
                        </li>
                        <li>
                          <a href="#">Press</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <!-- Blog --> */}
                <div className="col-xxl-3 col-md-6 footer_col">
                  <div className="footer_blog">
                    <div className="footer_title">blog</div>
                    <div className="footer_blog_container">
                      {/* <!-- Blog Item --> */}
                      <div className="footer_blog_item d-flex flex-row align-items-start justify-content-start">
                        <div className="footer_blog_image">
                          <a href="blog.html">
                            <img src="images/footer_blog_1.jpg" alt="" />
                          </a>
                        </div>
                        <div className="footer_blog_content">
                          <div className="footer_blog_title">
                            <a href="blog.html">what shoes to wear</a>
                          </div>
                          <div className="footer_blog_date">june 06, 2018</div>
                          <div className="footer_blog_link">
                            <a href="blog.html">Read More</a>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Blog Item --> */}
                      <div className="footer_blog_item d-flex flex-row align-items-start justify-content-start">
                        <div className="footer_blog_image">
                          <a href="blog.html">
                            <img src="images/footer_blog_2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="footer_blog_content">
                          <div className="footer_blog_title">
                            <a href="blog.html">trends this year</a>
                          </div>
                          <div className="footer_blog_date">june 06, 2018</div>
                          <div className="footer_blog_link">
                            <a href="blog.html">Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Contact --> */}
                <div className="col-xxl-3 col-md-6 footer_col">
                  <div className="footer_contact">
                    <div className="footer_title">contact</div>
                    <div className="footer_contact_list">
                      <ul>
                        <li className="d-flex flex-row align-items-start justify-content-start">
                          <span>C.</span>
                          <div>Your Company Ltd</div>
                        </li>
                        <li className="d-flex flex-row align-items-start justify-content-start">
                          <span>A.</span>
                          <div>
                            1481 Creekside Lane Avila Beach, CA 93424, P.O. BOX
                            68
                          </div>
                        </li>
                        <li className="d-flex flex-row align-items-start justify-content-start">
                          <span>T.</span>
                          <div>+53 345 7953 32453</div>
                        </li>
                        <li className="d-flex flex-row align-items-start justify-content-start">
                          <span>E.</span>
                          <div>office@youremail.com</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Social --> */}
        <div className="footer_social">
          <div className="section_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="footer_social_container d-flex flex-row align-items-center justify-content-between">
                    {/* <!-- Instagram --> */}
                    <a href="#">
                      <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                        <div className="footer_social_icon">
                          <FontAwesomeIcon icon="instagram" />
                          {/* <i className="fa fa-instagram" aria-hidden="true"></i> */}
                        </div>
                        <div className="footer_social_title">instagram</div>
                      </div>
                    </a>
                    {/* <!-- Google + --> */}
                    <a href="#">
                      <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                        <div className="footer_social_icon">
                          <FontAwesomeIcon icon="google-plus" />{" "}
                        </div>
                        <div className="footer_social_title">google +</div>
                      </div>
                    </a>
                    {/* <!-- Pinterest --> */}
                    <a href="#">
                      <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                        <div className="footer_social_icon">
                          <FontAwesomeIcon icon="pinterest" />
                          {/* <i className="fa fa-pinterest" aria-hidden="true"></i> */}
                        </div>
                        <div className="footer_social_title">pinterest</div>
                      </div>
                    </a>
                    {/* <!-- Facebook --> */}
                    <a href="#">
                      <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                        <div className="footer_social_icon">
                          <FontAwesomeIcon icon="facebook" />
                          {/* <i className="fa fa-facebook" aria-hidden="true"></i> */}
                        </div>
                        <div className="footer_social_title">facebook</div>
                      </div>
                    </a>
                    {/* <!-- Twitter --> */}
                    <a href="#">
                      <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                        <div className="footer_social_icon">
                          <FontAwesomeIcon icon="twitter" />
                          {/* <i className="fa fa-twitter" aria-hidden="true"></i> */}
                        </div>
                        <div className="footer_social_title">twitter</div>
                      </div>
                    </a>
                    {/* <!-- YouTube --> */}
                    <a href="#">
                      <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                        <div className="footer_social_icon">
                          {/* <i className="fa fa-youtube" aria-hidden="true"></i> */}
                          <FontAwesomeIcon icon="youtube" />
                        </div>
                        <div className="footer_social_title">youtube</div>
                      </div>
                    </a>
                    {/* <!-- Tumblr --> */}
                    <a href="#">
                      <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                        <div className="footer_social_icon">
                          <FontAwesomeIcon icon="tumblr-square" />
                        </div>
                        <div className="footer_social_title">tumblr</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Credits --> */}
        <div className="credits">
          <div className="section_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="credits_content d-flex flex-row align-items-center justify-content-end">
                    <div className="credits_text"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
