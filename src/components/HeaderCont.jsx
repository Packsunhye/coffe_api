import React from "react";
import { SearchBar } from "./index.js";
import { Link } from "react-router-dom";

const HeaderCont = () => {
  return (
    <header id="header">
      <div className="header__inner">
        <div className="header__logo">
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/logo.png`}
            alt="로고"
          />
          <Link to="/">
            <h2>Favorite</h2>
          </Link>
        </div>
        <div className="header__menu container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/coffeView/:id">Random</Link>
            </li>
            <li>
              <Link to="/select/">Feeling</Link>
            </li>
            <li>
              <Link to="/List/:id ">List</Link>
            </li>
          </ul>
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default HeaderCont;
