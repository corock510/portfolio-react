import React from "react";
import "../css/ress.css";
import "../css/style.css";
import ImgMental from "./img/mental.png";
import ImgTodo from "./img/todo.png";
import ImgMMM from "./img/mmm.jpg";

const Works = () => {
  return (
    <div>
      <section className="works section" id="works">
        <div className="container">
          <h2 className="title">WORKS</h2>
          <div className="works-list">
            <a
              className="works-item"
              href="https://mental-db67c.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="works-img">
                <img src={ImgMental} alt="" />
              </div>
              <p className="works-name">メンタル記録アプリ</p>
              <p className="works-info">
                今日の調子を記録するアプリです。まだ作成途中...
                <br />
                React/Material-UI/Firebase
              </p>
            </a>

            <a
              className="works-item"
              href="https://udemy-todo-4e101.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="works-img">
                <img src={ImgTodo} alt="" />
              </div>
              <p className="works-name">ToDoアプリ</p>
              <p className="works-info">
                タスク管理アプリです。まだ作成途中...
                <br />
                React/Firebase
              </p>
            </a>

            <a
              className="works-item"
              href="https://www.youtube.com/watch?v=JRJjeitMA2Y/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="works-img">
                <img src={ImgMMM} alt="" />
              </div>
              <p className="works-name">曲と動画</p>
              <p className="works-info">
                バンドをやっていた時に作った曲と動画です。はずかちいけどエモい
                <br />
                Cubase
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
