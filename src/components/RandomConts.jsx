import React from "react";
import { Link } from "react-router-dom";

const RandomConts = () => {
  return (
    <div className="random">
      <Link to="/coffeView/:id">
        <img
          src={`${process.env.PUBLIC_URL}/assets/img/random.png`}
          alt="랜덤"
        />
        <span>랜덤 추천</span>
      </Link>
    </div>
  );
};

export default RandomConts;
