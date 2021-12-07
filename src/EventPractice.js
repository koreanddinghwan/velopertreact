import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
    username: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    alert(this.state.message + ":" + this.state.username);
    this.setState({
      message: "",
      username: "",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          name="message"
          placeholder="아무거나입력하세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        ></input>
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
export default EventPractice;
