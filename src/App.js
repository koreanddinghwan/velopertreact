import MyComponent from "./MyComponents";

const App = () => {
  const ob = {
    name: "asd",
  };
  return (
    <MyComponent name={"React"} favoritenumber={1} obj={ob}>
      children
    </MyComponent>
  );
};

export default App;
