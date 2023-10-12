import React, { useState } from "react";
import "./PoketmonList.css";
import PoketmonObject from "./PoketmonObject";

const PoketmonList = ({ poketmon, onUpdate, onDelete }) => {
  const [searchWord, setSearchWord] = useState("");
  const onChangeSearch = (e) => {
    setSearchWord(e.target.value);
  };

  const getSearchResult = () => {
    return searchWord === ""
      ? poketmon
      : poketmon.filter((poketmonser) =>
          poketmonser.title.includes(searchWord),
        );
  };
  return (
    <div>
      <div className="PoketmonList">
        <h4>포켓몬 리스트</h4>
        <input
          type="text"
          placeholder="검색할 포켓몬은 누구인가요?"
          className="searchBar"
          onChange={onChangeSearch}
          value={searchWord}
        />
        <div className="List_wrapper">
          {getSearchResult().map((poketmonser) => (
            <PoketmonObject
              key={poketmonser.id}
              {...poketmonser}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PoketmonList;
