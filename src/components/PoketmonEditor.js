import React, { useRef, useState } from "react";
import "./PoketmonEditor.css";

const PoketmonEditor = ({ onCreate }) => {
  const [content, setContent] = useState({
    property1: "",
    property2: "",
    imglink: "",
    title: "",
    content: "",
  });
  const [isError, setIsError] = useState(false);
  const contentRef = useRef(); // input type='text' DOM을 창조하는 ref
  console.log(contentRef);
  const onChangeContent = (e) => {
    console.log("content", e.target.value);
    setContent({ ...content, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    if (
      !content.property1 ||
      !content.property2 ||
      !content.imglink ||
      !content.title ||
      !content.content
    ) {
      contentRef.current.focus();
      setIsError(true);
      return;
    }
    setIsError(false);
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="PoketmonEditor">
      <h4>
        포켓몬 추가하기
        <i className="fa-solid fa-pen fa-bounce"></i>
      </h4>
      <div className="editor_wrapper">
        <input
          ref={contentRef}
          type="text"
          placeholder="새로운 포켓몬 속성1을 작성해주세요!!!"
          name="property1"
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          value={content.property1}
        />
        <input
          ref={contentRef}
          type="text"
          placeholder="새로운 포켓몬 속성2을 작성해주세요!!!"
          name="property2"
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          value={content.property2}
        />
        <input
          ref={contentRef}
          type="text"
          placeholder="새로운 포켓몬 이미지링크를 작성해주세요!!!"
          name="imglink"
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          value={content.imglink}
        />
        <input
          ref={contentRef}
          type="text"
          placeholder="새로운 포켓몬 이름을 작성해주세요!!!"
          name="title"
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          value={content.title}
        />
        <input
          ref={contentRef}
          type="text"
          placeholder="새로운 포켓몬 내용을 작성해주세요!!!"
          name="content"
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          value={content.content}
        />
        <button onClick={onSubmit}>포켓몬 추가</button>
      </div>
      {isError && <div className="errorMsg">입력해주세요!!!</div>}
    </div>
  );
};

export default PoketmonEditor;
