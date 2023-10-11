import React from "react";
import "./PoketmonEditor.css";

const PoketmonEditor = () => {
  return (
    <div className="PoketmonEditor">
      <h4>
        포켓몬 추가하기
        <i class="fa-solid fa-pen fa-bounce"></i>
      </h4>
      <div className="editor_wrapper">
        <input
          type="text"
          placeholder="새로운 포켓몬 속성1을 작성해주세요!!!"
        />
        <input
          type="text"
          placeholder="새로운 포켓몬 속성2을 작성해주세요!!!"
        />
        <input
          type="text"
          placeholder="새로운 포켓몬 이미지링크를 작성해주세요!!!"
        />
        <input type="text" placeholder="새로운 포켓몬 이름을 작성해주세요!!!" />
        <input type="text" placeholder="새로운 포켓몬 내용을 작성해주세요!!!" />
        <button>포켓몬 추가</button>
      </div>
    </div>
  );
};

export default PoketmonEditor;
