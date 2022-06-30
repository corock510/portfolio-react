import React from "react";
import "../css/ress.css";
import "../css/style.css";
import TwitterIcon from "./img/TwitterIcon.svg";
import GitHubIcon from "./img/GitHubIcon.svg";
import MailIcon from "./img/MailIcon.svg";

const Contact = () => {
  return (
    <div>
      <section className="contact section" id="contact">
        <div className="container">
          <h2 className="title">CONTACT</h2>
          <p className="lead">
            お問い合わせは、SNSかメールにてお願いいたします。
            <br />
            ツイッターのDMが返信早いと思います。
          </p>
          <div className="contact-list">
            <a
              className="contact-item"
              href="https://twitter.com/koiwa_510/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={TwitterIcon} alt="" className="contact-icon" />
            </a>
            <a
              className="contact-item"
              href="https://github.com/corock510/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GitHubIcon} alt="" className="contact-icon" />
            </a>

            <a
              className="contact-item"
              href="mailto:megane562@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={MailIcon} alt="" className="contact-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
