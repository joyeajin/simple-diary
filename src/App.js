import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "예진",
    content: "닝ㅎㄴㅇㅎ",
    created_date: new Date().getTime(),
    emotion: 2,
  },
  {
    id: 2,
    author: "코스트코",
    content: "닝ㅎㄴㅇㅎ2",
    created_date: new Date().getTime(),
    emotion: 5,
  },
  {
    id: 3,
    author: "이마트",
    content: "닝ㅎㄴㅇ3",
    created_date: new Date().getTime(),
    emotion: 1,
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
