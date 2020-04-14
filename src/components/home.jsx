import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerData: Array(2).fill(null),
    };
  }

  //get player data and render a welcome message
  getPlayerData() {
    const newPlayerData = { ...this.state.playerData };
    newPlayerData[0] = window.prompt("What is your first player's name? ");
    newPlayerData[1] = window.prompt("What is your second player's name?");
    var message =
      "Welcome to Tikky-Takka! " +
      newPlayerData[0] +
      " and " +
      newPlayerData[1] +
      ". Let's play, shall we";
    return message;
  }

  render() {
    return (
      <div>
        <div>{this.getPlayerData()}</div>
        <p>Click the button below to continue</p>
        <button className="btn btn-primary">Continue</button>
      </div>
    );
  }
}

export default Home;
