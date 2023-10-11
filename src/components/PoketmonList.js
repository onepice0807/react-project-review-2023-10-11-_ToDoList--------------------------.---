import React from "react";
import "./PoketmonList.css";
import PoketmonObject from "./PoketmonObject";

const PoketmonList = ({ property1, property2, imglink, title, content }) => {
  return (
    <div>
      <div className="PoketmonList">
        <h4>포켓몬 리스트</h4>
        <input
          type="text"
          placeholder="검색할 포켓몬은 누구인가요?"
          className="searchBar"
        />
        <div className="List_wrapper">
          <PoketmonObject
            property1={property1}
            property2={property2}
            imglink={imglink}
            title={title}
            content={content}
          />
        </div>
      </div>
    </div>
  );
};

export default PoketmonList;
