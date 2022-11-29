import React from "react";
import { Link } from "react-router-dom";

const SelectViewConts = () => {
  return (
    <main id="main">
      <h2 className="recommend__desc">
        <p>
          당신의 기분에 대한 음료를 추천합니다.
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/142.png`}
            alt="best thumb"
          />
        </p>
      </h2>
      <section className="recommend container">
        <div className="recommend__inner">
          <div className="recommend__title">
            <div className="recommend__result">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/kingsmileemoji.png`}
                alt="스마일"
              />
              <p>오후의 나른함을 깨워줄 상쾌함에 빠져보세요.</p>
            </div>
            <p className="rerecommend">
              <Link to="/select/">
                <span>다시 추천 받기</span>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/rerecommend.png`}
                  alt="다시 추천 받기"
                />
              </Link>
            </p>
          </div>
          <div className="beverage__box">
            <div className="beverage1">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/sb1.jpg`}
                alt="음료1"
              />
              <div className="beverage__desc">
                <span>민트 콜드 브루</span>

                <Link to="/coffeView/:id">자세히 보기</Link>
              </div>
            </div>
            <div className="beverage2">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/sb2.jpg`}
                alt="음료2"
              />
              <div className="beverage__desc">
                <span>스파클링 시트러스 에스프레소</span>

                <Link to="/coffeView/:id">자세히 보기</Link>
              </div>
            </div>
            <div className="beverage3">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/sb3.jpg`}
                alt="음료3"
              />
              <div className="beverage__desc">
                <span>유자 패션 피지오</span>

                <Link to="/coffeView/:id">자세히 보기</Link>
              </div>
            </div>
            <div className="beverage4">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/sb4.jpg`}
                alt="음료4"
              />
              <div className="beverage__desc">
                <span>아이스 블루밍 프루트 유스베리 티</span>

                <Link to="/coffeView/:id">자세히 보기</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SelectViewConts;
