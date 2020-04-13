import React, { Component } from "react";

class Square extends Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    ); //value prop referenced from Board
  }
}
export default Square;
