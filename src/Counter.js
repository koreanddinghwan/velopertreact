import { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
    testnumber: 100,
  };

  render() {
    const { number, fixedNumber, testnumber } = this.state;
    return (
      <div>
        <h1>바뀌는 값{number}</h1>
        <h2>바뀌지 않는 값{fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState(
              (prevState) => {
                return {
                  number: prevState.number + 2,
                };
              },
              () => {
                console.log(this.state);
              }
            );
            this.setState(
              {
                testnumber: testnumber + 1,
              },
              () => {
                console.log(this.state.testnumber);
              }
            );
            this.setState(
              (prevState) => ({
                number: prevState.number + 1,
              }),
              () => console.log(this.state)
            );
          }}
        >
          Click!
        </button>
      </div>
    );
  }
}
export default Counter;
