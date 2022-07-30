import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useState } from "react";
import { useRef } from "react";

// const dummyList = [
//   {
//     id: 1,
//     author: "예진",
//     content: "닝ㅎㄴㅇㅎ",
//     created_date: new Date().getTime(),
//     emotion: 2,
//   },
//   {
//     id: 2,
//     author: "코스트코",
//     content: "닝ㅎㄴㅇㅎ2",
//     created_date: new Date().getTime(),
//     emotion: 5,
//   },
//   {
//     id: 3,
//     author: "이마트",
//     content: "닝ㅎㄴㅇ3",
//     created_date: new Date().getTime(),
//     emotion: 1,
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
