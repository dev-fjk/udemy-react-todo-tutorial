import React, { useState } from "react";
import "./style.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["初期未完了"]);
  const [completeTodos, setCompleteTodos] = useState(["初期完了"]);

  // 入力欄に入力された値をtodoTextに設定
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタンが押された際に未完了のTODOへ 入力された名称のTODOを追加
  const onClickAdd = () => {
    if (todoText === "") {
      console.warn("TODO名が入力されていません");
      return;
    }
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText(""); // 入力欄の入力を初期化
  };

  // 削除ボタンが押された際の処理
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタンが押された際の処理
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <>
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <>
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button>戻す</button>
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};
