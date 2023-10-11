import React from "react";
import "./PoketmonObject.css";

const PoketmonObject = ({ property1, property2, imglink, title, content }) => {
  return (
    <div className="PoketmonObject">
      <div className="checkbox_col">
        <input type="checkbox" />
      </div>
      <img src={imglink} className="img_col" />
      <div className="property1_col">{property1}</div>
      <div className="property2_col">{property2}</div>
      <div className="title_col">{title}</div>
      <div className="content_col">{content}</div>
      <div className="date_col">{new Date().toLocaleDateString()}</div>
      <div className="btn_col">
        <button>삭제</button>
      </div>
    </div>
  );
};

export default PoketmonObject;
