import React from "react";
import { Link } from "react-router-dom";

const SelectConts = () => {
  return (
    <main id="main">
      <h2 className="recommend__desc">
        <p>
          기분에 따른 음료를 추천해드립니다.
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/142.png`}
            alt="best thumb"
          />
        </p>
      </h2>
      <section className="recommend container">
        <div className="recommend__inner">
          <div className="recommend__title">
            <p className="feelings">
              <span>
                지금 당신의 기분은 어떤가요
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/questionmark.png`}
                  alt="기분"
                />
              </span>
            </p>
          </div>
          <div className="recommend__icon1">
            <Link to="/selectview/:id" className="emoji1">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/happyemoji.png`}
                alt="이모지1"
              />
              <p>활기찬 시작</p>
            </Link>
            <Link to="/selectview/:id" className="emoji2">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/withemoji.png`}
                alt="이모지2"
              />
              <p>함께 하고 싶어요</p>
            </Link>
          </div>
          <div className="recommend__icon2">
            <Link to="/selectview/:id" className="emoji3">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/spleepyemoji.png`}
                alt="이모지3"
              />
              <p>졸음주의보</p>
            </Link>
            <Link to="/selectview/:id" className="emoji4">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/blackemoji.png`}
                alt="이모지4"
              />
              <p>파랗다 못해 검은 기분</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SelectConts;
