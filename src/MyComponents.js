import React from "react";
import propTypes from "prop-types";
import { Component } from "react";

class MyComponent extends Component {
  static defaultProps = {
    name: "기본이름",
  };
  static propTypes = {
    name: propTypes.string,
    favoritenumber: propTypes.number.isRequired,
  };

  render() {
    const { name, favoritenumber, children } = this.props;
    return (
      <div>
        hello, my name is {name}
        children value is {children}
        my favnumber is {favoritenumber}
      </div>
    );
  }
}

export default MyComponent;
