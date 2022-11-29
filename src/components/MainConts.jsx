import React from "react";
import { RandomConts, SelectOneConts, ListOneConts } from "./index";

const MainConts = () => {
  return (
    <main id="main">
      <h2 className="main__desc">
        ‘어떤 음료를 고를까’ 선택 불가 증후군을 겪는 당신을 위한 <br />
        Favorite만의 기분 좋은 메뉴 선정
      </h2>
      <section className="select container">
        <div className="select__inner">
          <RandomConts />
          <SelectOneConts />
          <ListOneConts />
        </div>
      </section>
    </main>
  );
};

export default MainConts;
