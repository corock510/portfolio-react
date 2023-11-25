import React from "react";
import "../css/ress.css";
import "../css/style.css";
import About from "./About";
import Contact from "./Contact";
import Mv from "./Mv";
import Skill from "./Skill";
import Works from "./Works";

const Main = () => {
  return (
    <div className="content">
      <section id="mv">
        <Mv />
      </section>

      <section id="about">
        <About />
      </section>

      {/* <section id="works">
        <Works />
      </section> */}

      <section id="skill">
        <Skill />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Main;
