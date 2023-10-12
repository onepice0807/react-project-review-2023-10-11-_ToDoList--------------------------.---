import React from "react";
import "./PoketmonObject.css";

const PoketmonObject = ({
  id,
  property1,
  property2,
  imglink,
  title,
  content,
  isDone,
  createdDate,
  onUpdate,
  onDelete,
}) => {
  const onChangeCheckBox = () => {
    onUpdate(id); // 수정된 TodoItem 객체를 확인학기 위해 id를 매개변수로 보낸다.
  };

  const onClickButton = () => {
    onDelete(id);
  };
  return (
    <div className="PoketmonObject">
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
      </div>
      <img src={imglink} className="img_col" />
      <div className="property1_col">{property1}</div>
      <div className="property2_col">{property2}</div>
      <div className="title_col">{title}</div>
      <div className="content_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickButton}>삭제</button>
      </div>
    </div>
  );
};

export default PoketmonObject;
