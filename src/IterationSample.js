import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    {
      id: 1,
      text: "테스트1",
    },
    { id: 2, text: "테스트2" },
  ]);

  //input text 유지
  const [inputText, setInputText] = useState("");
  //input의 변화함에따른 state유지
  const onInputChange = (e) => {
    setInputText(e.target.value);
  };

  //다음에 id로 추가할 값 유지
  const [nextid, setNextId] = useState(3);

  const onClick = () => {
    const Nextnames = names.concat({
      id: nextid,
      text: inputText,
    });
    setNames(Nextnames);
    setInputText("");
    setNextId(nextid + 1);
  };

  const onDoubleClick = (id) => {
    //filter로 새로운 namelist생성
    const FilteredNames = names.filter((name) => name.id !== id);
    setNames(FilteredNames);
  };

  //map으로 원소를 풀어서 li로 배열생성
  const renderinglist = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onDoubleClick(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <div>
      <input type="text" value={inputText} onChange={onInputChange}></input>
      <button onClick={onClick}>추가하기</button>
      <div>{renderinglist}</div>
    </div>
  );
};

export default IterationSample;
