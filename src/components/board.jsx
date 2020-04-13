import React, { Component } from "react";
import Square from "./square";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null), // declare a squares array comprising 9 null elements, one for each square
      xIsNext: true, //boolean to detect moves, true means player hasn't played a move
    };
  }

  fillWithX(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "O"; // if player hasn't played, "X" player moves, else "O" player moves
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext }); //after a player moves, flip xIsNext so that the other player can move
  }

  renderSquare(i) {
    return (
      <Square value={this.state.squares[i]} onClick={() => this.fillWithX(i)} />
    ); //declare a value prop to be passed to Square
  }
  render() {
    const status = "Next Player is : " + (this.state.xIsNext ? "X" : "O");

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
