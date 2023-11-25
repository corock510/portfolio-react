import React from "react";
import "../css/ress.css";
import "../css/style.css";

import ImgHtml from "./img/lang/html-5.svg";
import ImgCss from "./img/lang/css-3.svg";
import ImgJs from "./img/lang/js.svg";
import ImgReact from "./img/lang/react.svg";
import ImgVue from "./img/lang/vue.svg";
import ImgBootstrap from "./img/lang/bootstrap.svg";
import ImgDotnet from "./img/lang/dotnet.svg";
import ImgDb from "./img/lang/db.svg";
import ImgLaravel from "./img/lang/Laravel.png";
import ImgAws from "./img/lang/aws.svg";
import ImgDocker from "./img/lang/docker.svg";
import ImgFirebase from "./img/lang/firebase.svg";
import ImgCubase from "./img/lang/cubase.png";
import ImgBass from "./img/lang/bass.png";
import ImgMovie from "./img/lang/movie.png";
import ImgDumbbell from "./img/lang/dumbbell.svg";
import ImgCamp from "./img/lang/camp.png";
import ImgSauna from "./img/lang/sauna.png";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const chart = {
  width: "40%",
  minWidth: "300px",
};

const dataFrontend = {
  labels: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Bootstrap"],
  datasets: [
    {
      label: "frontend",
      data: [3, 3, 4, 2, 4, 4],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 2,
    },
  ],
};

const dataBackend = {
  labels: ["PHP/Laravel", "C#/.Net", "DB", "AWS", "Docker", "Firebase"],
  datasets: [
    {
      label: "backend/infra",
      data: [4, 3, 4, 3, 2, 2],
      backgroundColor: "rgba(0,153,255,0.2)",
      borderColor: "rgba(0,153,255,1)",
      borderWidth: 2,
    },
  ],
};

const dataOther = {
  labels: [
    "作曲/DTM",
    "エレキベース",
    "動画編集",
    "筋トレ",
    "キャンプ",
    "サウナ",
  ],
  datasets: [
    {
      label: "Other",
      data: [2, 3, 1, 3, 2, 4],
      backgroundColor: "rgba(40,255,40,0.2)",
      borderColor: "rgba(40,255,40,1)",
      borderWidth: 2,
    },
  ],
};

const options = {
  scale: {
    r: {
      min: 0,
      max: 5,
      stepSize: 1,
    },
  },
};

const Skill = () => {
  return (
    <div>
      <section className="skill section" id="skill">
        <div className="container">
          <h2 className="title">SKILLS</h2>

          <div className="skill">
            <div style={chart} className="chart">
              <Radar data={dataFrontend} options={options} />
            </div>
            <div className="skill-list">
              <div className="skill-item">
                <p className="skill-img">
                  <img src={ImgHtml} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">HTML5</h3>
                  <p className="skill-text">基本的なタグは網羅してます。</p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={ImgCss} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">CSS3</h3>
                  <p className="skill-text">
                    基本的なレスポンシブデザイン程度であれば記述できます。
                  </p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={ImgJs} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">JavaScript</h3>
                  <p className="skill-text">
                    基本的なDOM操作が可能。TypeScriptも使用可能です。
                  </p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={ImgReact} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">React</h3>
                  <p className="skill-text">
                    個人開発で少し勉強中。このポートフォリオをReactで作成しました。
                  </p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={ImgVue} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">Vue.js</h3>
                  <p className="skill-text">
                    業務経験2年。メインで使用してます。
                  </p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={ImgBootstrap} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">Bootstrap</h3>
                  <p className="skill-text">
                    基本的なレスポンシブデザイン程度であれば記述できます。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-space"></div>
          <div className="skill">
            <div style={chart} className="chart">
              <Radar data={dataBackend} options={options} />
            </div>
            <div className="skill-list">
              <div className="skill-item">
                <p className="skill-img">
                  <img src={ImgLaravel} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">PHP/Laravel</h3>
                  <p className="skill-text">
                    実務経験2年。MVCでWebアプリを0から構築可能。マイクロサービス化も経験あり。
                  </p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={ImgDotnet} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">C#/.Net</h3>
                  <p className="skill-text">
                    実務経験3年間。EFCore、DapperなどORMを使ってました。WebAPIを開発していました。
                  </p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={ImgDb} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">DB</h3>
                  <p className="skill-text">
                    テーブル設計やDBチューニングも対応可能。MySQLとPostgresQLが得意です。OSSDB
                    Silver取得。
                  </p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={ImgAws} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">AWS</h3>
                  <p className="skill-text">
                    EC2、RDS、S3、Cloud9の使用経験があります.
                  </p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={ImgDocker} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">Docker</h3>
                  <p className="skill-text">
                    DockerComposeでWebアプリのデプロイができます。
                  </p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={ImgFirebase} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">Firebase</h3>
                  <p className="skill-text">
                    FireStore、Hosting、Authenticationの使用経験があります。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="skill-space"></div>

          <div className="skill">
            <div style={chart} className="chart">
              <Radar data={dataOther} options={options} />
            </div>
            <div className="skill-list">
              <div className="skill-item">
                <p className="skill-img">
                  <img src={ImgCubase} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">作曲/DTM</h3>
                  <p className="skill-text">
                    大学時代にCubaseを使ってバンドの曲を作ってました。最近全然作ってないけど作りたいです。
                  </p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={ImgBass} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">エレキベース</h3>
                  <p className="skill-text">高2から上達してません。</p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={ImgMovie} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">動画編集</h3>
                  <p className="skill-text">
                    自分のバンドの動画をAviUtlで作ったりしてました。
                  </p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={ImgDumbbell} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">筋トレ</h3>
                  <p className="skill-text">ベンチプレスMAX現在80kg。</p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={ImgCamp} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">キャンプ</h3>
                  <p className="skill-text">
                    将来的にはキャンプしながらエンジニアやりたいです。
                  </p>
                </div>
              </div>
              <div className="skill-item">
                <p className="skill-img">
                  <img src={ImgSauna} alt="" />
                </p>
                <div className="skill-body">
                  <h3 className="skill-name">サウナ</h3>
                  <p className="skill-text">
                    好きすぎて2021年にサウナスパ健康アドバイザーの資格を取得しました。
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="skill-bottom-space" />
        </div>
      </section>
    </div>
  );
};

export default Skill;
