import React, { Component } from 'react';
import utils from '../utils';
import token from '../utils';
import Image from 'react-image-resizer';
import './dashboard.css';

import db from '../Config/Firebase/db_config';

export default class DashBoard extends Component {
  render() {
    return (
        <div className='dashboardContainer'>
          <h1 className='title '>Play Any Card Game
          <div className="menuContainer">
            <button className="startGame" onClick={createGame}>New Game</button>
          </div>
          </h1>
            <img className='imageOfPokerHand' src={require('./img/poker_hand.jpeg')} />
        </div>
    );  
  }
}

function createGame() {
  const newGame = {
    p1_token: utils.token(),
    p2_token: utils.token()
  };

  const game = db.database().ref("playAnyCardGame").push();

  game
    .set(newGame)
    .then(() => {
      window.location.hash = `#/${newGame.p1_token}`;
    }, (err) => {
      throw err;
    });
}
