import React from "react";
import "../css/ress.css";
import "../css/style.css";
import { Link as Scroll } from "react-scroll";

const Header = () => {
  return (
    <div>
      <header className="header ">
        <div className="container">
          <h1 className="header-logo">
            <Scroll to="mv" smooth={true} duration={300}>
              Koiwa Koiking
            </Scroll>
          </h1>
          <nav className="gnav">
            <ul className="gnav-list">
              <li className="gnav-item">
                <Scroll to="about" smooth={true} duration={300}>
                  ABOUT
                </Scroll>
              </li>
              {/* <li className="gnav-item">
                <Scroll to="works" smooth={true} duration={300}>
                  WORKS
                </Scroll>
              </li> */}
              <li className="gnav-item">
                <Scroll to="skill" smooth={true} duration={300}>
                  SKILLS
                </Scroll>
              </li>
              <li className="gnav-item">
                <Scroll to="contact" smooth={true} duration={300}>
                  CONTACT
                </Scroll>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
