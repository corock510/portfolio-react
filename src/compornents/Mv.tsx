import React from "react";
import "../css/ress.css";
import "../css/style.css";
// import ImgIcon from "./img/koiking_400x400.jpeg";

const Mv = () => {
  return (
    <div className="mv">
      <div className="mv-container">
        {/* <img src={ImgIcon} alt="" className="mv-icon" /> */}
        <p className="mv-title">Koiwa Koiking</p>
        <p className="mv-subtitle">PORTFOLIO</p>
        <p className="mv-text">
          コイワコイキングのポートフォリオです
          <br />
          ごゆっくりどうぞ
          <br />
        </p>
      </div>
    </div>
  );
};

export default Mv;
