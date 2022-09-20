import React from "react";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav
          className="navbar navbar-navs navbar-expend navbar-expand-md fixed-top"
          id="menu-top"
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              E-comm
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarDefault"
              aria-controls="navbarDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span />
              <span />
              <span />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarDefault"
            >
              <ul className="navbar-nav ml-auto">
                <li className="menu-nav">
                  <a className="nav-link page-scroll active" href="#home">
                    Home
                  </a>
                </li>
                <li className="menu-nav">
                  <a className="nav-link page-scroll" href="#feature">
                    Feature
                  </a>
                </li>
                <li className="menu-nav">
                  <a className="nav-link page-scroll" href="#about">
                    About
                  </a>
                </li>
                <li className="menu-nav">
                  <a className="nav-link page-scroll" href="#service">
                    Service
                  </a>
                </li>
                <li className="menu-nav">
                  <a className="nav-link page-scroll" href="#screenshot">
                    Mobile
                  </a>
                </li>
                <li className="menu-nav">
                  <a className="nav-link page-scroll" href="#team">
                    Team
                  </a>
                </li>
                <li className="menu-nav">
                  <a className="nav-link page-scroll" href="#pricing">
                    Price
                  </a>
                </li>
                <li className="menu-nav">
                  <a className="nav-link page-scroll" href="#blog">
                    Blog
                  </a>
                </li>
                <li className="menu-nav">
                  <a className="nav-link page-scroll" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*- END CONTAINER */}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
