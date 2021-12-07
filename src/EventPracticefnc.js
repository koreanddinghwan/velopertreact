import { useState } from "react";

const EventPractice = () => {
  //객체로 useState의 초기값을 설정,
  //form에 초기 객체가 들어있음
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form; //비구조화할당,

  const onChange = (e) => {
    //spread연산자 ... 으로 form을 풀고,
    const nextForm = {
      ...form,
      //이벤트 객체로 키값에 접근해 원하는 값으로 덮어씌운다
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + "::" + message);
    //세터
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPractice;
