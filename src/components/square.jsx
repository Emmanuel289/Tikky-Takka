import React, { Component } from "react";

class Square extends Component {
  constructor(props) {
    super(props); //call constructor of Square and pass in its props
    this.state = {
      value: null, //initialize value to null
    };
  }

  fillWithX = () => {
    this.setState({ value: "X" }); //change value from null to X when a square is clicked
  };
  render() {
    return (
      <button className="square" onClick={this.fillWithX}>
        {this.state.value}
      </button>
    ); //value prop referenced from Board
  }
}
export default Square;
