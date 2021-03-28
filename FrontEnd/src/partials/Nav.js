import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white  shadow-lg"
      }`}
    >
      <div className="navigation">
        <div className="container">
          <div className="row">
            <div className="w-full">
              <nav className="flex items-center justify-between navbar navbar-expand-md">
                <a className="mr-4 navbar-brand" href="index.html">
                  <img src="assets/images/logo.svg" alt="Logo" />
                </a>

                <button
                  className="block navbar-toggler focus:outline-none md:hidden"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarOne"
                  aria-controls="navbarOne"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div
                  className="absolute left-0 z-30 hidden w-full px-5 py-3 duration-300 bg-white shadow md:opacity-100 md:w-auto collapse navbar-collapse md:block top-100 mt-full md:static md:bg-transparent md:shadow-none"
                  id="navbarOne"
                >
                  <ul className="items-center content-start mr-auto lg:justify-center md:justify-end navbar-nav md:flex">
                    <li className="nav-item active">
                      <a className="page-scroll" href="#home">
                        HOME
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#service">
                        SERVICES
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#pricing">
                        PRICING
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#testimonial">
                        Testimonial
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#contact">
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="items-center justify-end hidden navbar-social lg:flex">
                  <span className="mr-4 font-bold text-gray-900 uppercase">
                    FOLLOW US
                  </span>
                  <ul className="flex footer-social">
                    <li>
                      <a href="#">
                        <i className="lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-instagram-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
