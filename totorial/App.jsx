/* eslint react-hooks/exhaustive-deps:off */
import React, { useEffect, useState } from "react";
import ColofulMessage from "./components/ColofulMessage";

const App = () => {
  // stateの状態が切り替わった際は React側で画面が再レンダリングされる
  // stateで扱う変数を第一引数 操作する関数を第二引数に設定
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlg = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  // useEffect 第二引数の配列に指定した要素に操作があった場合のみ動作する
  // 第二引数に空配列を指定することで　画面読み込み時だけに動作する操作を定義できる
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlg || setFaceShowFlg(true);
      } else {
        faceShowFlg && setFaceShowFlg(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColofulMessage color="blue">お元気ですか?</ColofulMessage>
      <ColofulMessage color="pink">元気です！</ColofulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlg}>on off</button>
      <p>{num}</p>
      {faceShowFlg && <p>!(^^)!</p>}
    </>
  );
};

export default App;
