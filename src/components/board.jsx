import React, { Component } from "react";
import Square from "./square";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null), // declare a squares array comprising 9 null elements, one for each square
    };
  }

  fillWithX(i) {
    const squares = this.state.squares.slice();
    squares[i] = "X";
    this.setState({ squares });
  }

  renderSquare(i) {
    return (
      <Square value={this.state.squares[i]} onClick={() => this.fillWithX(i)} />
    ); //declare a value prop to be passed to Square
  }
  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
export default Board;
