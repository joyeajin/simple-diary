import React, { useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });
  const handleChangeState = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const authorInput = useRef();
  const contentInput = useRef();

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("저장됨!");
    setState({ author: "", content: "", emotion: 1 });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          value={state.author}
          name="author"
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          value={state.content}
          name="content"
          onChange={handleChangeState}
        />
      </div>
      <span>오늘의 감정점수 : </span>
      <select value={state.emotion} name="emotion" onChange={handleChangeState}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <div>
        <button onClick={handleSubmit}>일기 저장</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
