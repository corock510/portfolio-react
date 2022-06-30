import React from "react";
import ImgKoikingIcon from "./img/koiking_400x400.jpeg";

const About = () => {
  return (
    <div>
      <section className="about section" id="about">
        <div className="container">
          <h2 className="title">ABOUT</h2>
          <div className="profile">
            <p className="profile-img">
              <img src={ImgKoikingIcon} alt="" />
            </p>
            <div className="profile-body">
              <p>東京都在住 無職の28歳 Webエンジニアをやってます。</p>
              <p>
                2012年にバンドで売れるために岩手から上京。ピコリーモバンドで精力的に活動するも芽が出なかったため就職。
                <br />
                2016年に新卒で金融系SIerに就職し、右も左も分からぬまま汎用系ソフトウェア案件のプロジェクトマネージャーを担当。
                <br />
                2019年に業務系Webアプリ開発会社に転職し、Webアプリの主にバックエンドの開発に3年ほど従事したが、残業が月140時間を越え限界突破して退職。
              </p>
              <p>趣味はサウナ、人狼、ボードゲーム、キャンプ</p>

              <a
                href="https://poiwaifarm.hatenablog.com/entry/2019/05/01/120449"
                target="_blank"
                rel="noreferrer"
              >
                詳細な歴史
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
