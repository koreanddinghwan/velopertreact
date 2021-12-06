import React from "react";

const MyComponent = ({ name, children }) => {
  return (
    <div>
      나의 새로운 {name}컴포넌트
      <div>{children}이건 children props입니다.</div>
    </div>
  );
};
export default MyComponent;
