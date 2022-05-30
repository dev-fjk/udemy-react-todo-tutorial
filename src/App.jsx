import React, { useState } from "react";
import "./style.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodo] = useState(["あああ", "いいいい"]);
  const [completeTodos, setCompleteTodo] = useState(["ううう"]);

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" type="text" name="" id="" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <>
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button>完了</button>
                  <button>削除</button>
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
