import React from "react";
import { Link } from "react-router-dom";

const SelectOneConts = () => {
  return (
    <div className="emotion">
      <Link to="/select/">
        <img src={`${process.env.PUBLIC_URL}/assets/img/good.png`} alt="기분" />
        <span>기분에 따라 맞춤 추천</span>
      </Link>
    </div>
  );
};

export default SelectOneConts;
