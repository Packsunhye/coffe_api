import React from "react";
import { Link } from "react-router-dom";

const SearchConts = () => {
  return (
    <main id="main">
      <h2 className="main__desc">검색 결과 1잔의 음료가 있습니다.</h2>
      <section className="random__view">
        <div className="random__inner">
          <p className="random__restart">
            <Link to="/">
              <span>다시 추천 보기</span>
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/rerecommend.png`}
                alt="되돌이표"
              />
            </Link>
          </p>
          <div className="view__box">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/pic.png`}
              alt="사진"
            />
            <div className="coffee">
              <h2 className="coffee__name">
                딸기 아사이 레모네이드 스타벅스 리프레셔
              </h2>
              <div className="coffee__desc">
                딸기, 아사이베리 주스와 레모네이드가 달콤 상큼하게 조화된 맛에
                가볍게 에너지 부스팅을 할 수 있는 리프레셔 음료
              </div>
              <div className="coffee__nutrition">
                <span>제품 영양 정보</span>
                <div>Tall(톨) / 355ml(12 fl oz)</div>
              </div>
              <div className="bottom">
                <ul className="line_01">
                  <li>1회 제공량(kcal) : 105</li>
                  <li>포화지방(g) : 0</li>
                  <li>단백질(g) : 1</li>
                </ul>
                <ul className="line_02">
                  <li>나트륨(mg) : 0</li>
                  <li>당류(g) : 24</li>
                  <li>카페인(mg) : 30</li>
                </ul>
              </div>
            </div>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/logo_me.png`}
            alt="사진"
            className="logo__view"
          />
        </div>
      </section>
    </main>
  );
};

export default SearchConts;
