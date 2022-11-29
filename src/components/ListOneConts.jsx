import React from "react";
import { Link } from "react-router-dom";

const ListOneConts = () => {
  return (
    <div className="list">
      <Link to="/List/:id">
        <img
          src={`${process.env.PUBLIC_URL}/assets/img/list.png`}
          alt="리스트"
        />
        <span>전체 목록</span>
      </Link>
    </div>
  );
};

export default ListOneConts;
