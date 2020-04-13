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

  //fill a square with a player's move (X or O) and allow players to take turns
  fillWithX(i) {
    const squares = this.state.squares.slice();

    if (calculateWinner(squares)) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O"; // if player hasn't played, "X" player moves, else "O" player moves
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext }); //after a player moves, update the square with the player's move and flip xIsNext to false so that the other player can move
  }

  renderSquare(i) {
    return (
      <Square value={this.state.squares[i]} onClick={() => this.fillWithX(i)} />
    ); //declare a value prop to be passed to Square
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner is: " + winner;
    } else {
      status = "Next Player is : " + (this.state.xIsNext ? "X" : "O");
    }

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

//helper function to determine the winner of a game
function calculateWinner(squares) {
  const lines = [
    //lines contain arrays that correspond to a winning move
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
