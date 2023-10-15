import { useReducer, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PoketmonEditor from "./components/PoketmonEditor";
import PoketmonList from "./components/PoketmonList";
import { mockupPoketmon } from "./DUMMY_DATA";


function App() {
  const [poketmon, setPoketmon] = useState(mockupPoketmon);
  const idRef = useRef(3);
  const onCreate = ({ property1, property2, imglink, title, content }) => {
    // 입력받은 content를 멤버로 하는 새로운 포켓몬 객체 생성
    const newPoketmon = {
      id: idRef.current,
      property1: property1,
      property2: property2,
      imglink: imglink,
      title: title,
      content: content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setPoketmon([newPoketmon, ...poketmon]); // 스프레드 연산자를 통해 불변성을 지키며 새로운 배열 setPoketmon 할당
    idRef.current += 1;
  };

  const onUpdate = (id) => {
    console.log("수정 작업 해야 함!!!");

    setPoketmon(
      poketmon.map((poketmonser) =>
        poketmonser.id === id
          ? { ...poketmonser, isDone: !poketmonser.isDone }
          : poketmonser,
      ),
    );
  };

  const onDelete = (id) => {
    console.log(`${id}번의 포켓몬을 삭제합니다!!!`);
    setPoketmon(poketmon.filter((poketmonser) => poketmonser.id !== id));
  };

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <PoketmonEditor onCreate={onCreate} />
      </div>
      <div>
        <PoketmonList
          poketmon={poketmon}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />{" "}
        {/* props로 todos, onUpdate를 내려줌 */}
      </div>
    </div>
  );
}

export default App;
