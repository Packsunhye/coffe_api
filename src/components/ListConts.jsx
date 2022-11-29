import React from "react";
import { Link } from "react-router-dom";

const ListConts = () => {
  return (
    <main id="main">
      <section id="beverage__list" className="container">
        <h2>
          <span className="searchIcon">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/Rectangle.png`}
              alt="목록 아이콘"
            />
          </span>
          Favorite 에서 보여드리는 모든 음료
        </h2>
        <div className="list__wrap">
          <div className="list__cont">
            <h3>분류 보기</h3>
            <div className="listSelects">
              <button className="starbucks">스타벅스</button>
              <button className="tomtoms">탐앤탐스</button>
              <button className="paik">빽다방</button>
              <button className="yoger">요거프레소</button>
            </div>
            <div className="listCard">
              <div className="listDesc">
                <Link to="/coffeView/:id">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Starbucks_MintColdBrew 1.jpg`}
                    alt="음료 이미지1"
                  />
                  <p className="beverageName">민트 콜드 브루</p>
                </Link>
              </div>
              <div className="listDesc">
                <Link to="/coffeView/:id">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Starbucks_SparklingCitrusEspresso 1.jpg`}
                    alt="음료 이미지2"
                  />
                  <p className="beverageName">스파클링 시트러스 에스프레소</p>
                </Link>
              </div>
              <div className="listDesc">
                <Link to="/coffeView/:id">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Starbucks_YujaPassionStarbucksFizzio 1.jpg`}
                    alt="음료 이미지3"
                  />
                  <p className="beverageName">유자 패션 피지오</p>
                </Link>
              </div>
              <div className="listDesc">
                <Link to="/coffeView/:id">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Starbucks_IcedBloomingFruitY-Tea 1.jpg`}
                    alt="음료 이미지4"
                  />
                  <p className="beverageName">
                    아이스 블루밍 프루트 유스베리 티
                  </p>
                </Link>
              </div>
              <div className="listDesc">
                <Link to="/coffeView/:id">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Starbucks_VelvetDarkMochaNitro 1.jpg`}
                    alt="음료 이미지5"
                  />
                  <p className="beverageName">벨벳 다크 모카 나이트로</p>
                </Link>
              </div>
              <div className="listDesc">
                <Link to="/coffeView/:id">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Starbucks_IcedBlondeVanillaDoubleShotMacchiato 1.jpg`}
                    alt="음료 이미지6"
                  />
                  <p className="beverageName">
                    아이스 블론드 바닐라 더블 샷 마키아또
                  </p>
                </Link>
              </div>
              <div className="listDesc">
                <Link to="/coffeView/:id">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Starbucks_HoneyEarlGreyMilkTea 1.jpg`}
                    alt="음료 이미지7"
                  />
                  <p className="beverageName">허니 얼 그레이 밀크티</p>
                </Link>
              </div>
              <div className="listDesc">
                <Link to="/coffeView/:id">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Starbucks_MalchaShotAffogato 1.jpg`}
                    alt="음료 이미지8"
                  />
                  <p className="beverageName">말차 샷 아포가토</p>
                </Link>
              </div>
              <div className="listDesc">
                <Link to="/coffeView/:id">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Starbucks_ColdBrewwithOatMilk 1.jpg`}
                    alt="음료 이미지9"
                  />
                  <p className="beverageName">콜드 브루 오트 라떼</p>
                </Link>
              </div>
              <div className="listDesc">
                <Link to="/coffeView/:id">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Starbucks_OatCreamButterScotchColdBrew 1.jpg`}
                    alt="음료 이미지10"
                  />
                  <p className="beverageName">오트 크림 스카치 콜드 브루</p>
                </Link>
              </div>
              <div className="listDesc">
                <Link to="/coffeView/:id">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Starbucks_DolceBlackMilkTea 1.jpg`}
                    alt="음료 이미지11"
                  />
                  <p className="beverageName">돌체 블랙 밀크티</p>
                </Link>
              </div>
              <div className="listDesc">
                <Link to="/coffeView/:id">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Starbucks_CaffeAmericano 1.jpg`}
                    alt="음료 이미지12"
                  />
                  <p className="beverageName">카페 아메리카노</p>
                </Link>
              </div>
              <div className="listDesc">
                <Link to="/coffeView/:id">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Starbucks_ColdBrewFloat 1.jpg`}
                    alt="음료 이미지13"
                  />
                  <p className="beverageName">콜드 브루 플로트</p>
                </Link>
              </div>
              <div className="listDesc">
                <Link to="/coffeView/:id">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Starbucks_LavenderCafeBreve 1.jpg`}
                    alt="음료 이미지14"
                  />
                  <p className="beverageName">라벤더 카페 브레베</p>
                </Link>
              </div>
              <div className="listDesc">
                <Link to="/coffeView/:id">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Starbucks_AuroraChamomileTeaRelaxer 1.jpg`}
                    alt="음료 이미지15"
                  />
                  <p className="beverageName">오로라 캐모마일 릴렉서</p>
                </Link>
              </div>
              <div className="listDesc">
                <Link to="/coffeView/:id">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Starbucks_SignatureHotChocolate 1.jpg`}
                    alt="음료 이미지16"
                  />
                  <p className="beverageName">시그니처 핫 초콜릿</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ListConts;
