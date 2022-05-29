import React from "react";

const ColofulMessage = (props) => {
  // propsの各要素は分割代入で取り出すと扱いやすい
  const { color, children } = props;
  const contentStyle = {
    color, // プロパティ名と設定する変数名が同一の場合プロパティ名を省略可能
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColofulMessage;
