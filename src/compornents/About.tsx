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
              <p>東京都在住 無職の29歳 Webエンジニアをやってます。</p>
              <p>
                2012年にバンドで売れるために岩手から上京。ピコリーモバンドで精力的に活動するも芽が出なかったため冷静に就職。
                <br />
                2016年に新卒で金融系SIerに就職し、右も左も分からぬまま汎用系ソフトウェア案件のプロジェクトマネージャーを担当。
                <br />
                2019年に小売系Webアプリ開発会社に転職し、Webアプリの主にバックエンドの開発に3年ほど従事したが、残業が月160時間を越え限界突破して退職。
                <br />
                2022年に医療系Webアプリ開発会社に転職し、Webアプリのフロントエンド・バックエンドの開発に従事。プロジェクトマネージャーも兼任。
                <br />
                その傍ら、フリーのWebエンジニアとしても活動中。現在に至る。
              </p>
              <p>趣味はサウナ、人狼、ボードゲーム、キャンプ、筋トレ</p>

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
