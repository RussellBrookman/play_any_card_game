import React, { Component } from 'react';
// import firebase from 'firebase/app';
import 'firebase/database';
import Card from '../Card/Card';
import BackOfCards from '../Deck/Deck';
import DiscardPile from '../Discard/Discard_pile';
import cards from '../Data/cards.json';
import InsideDiscardPile from "../Discard/Inside_discard_pile";
import InsideDeck from '../Deck/Inside_deck';
import db from '../Config/Firebase/db_config.js';
import utils from '../utils';
import token from '../utils';
import Hand from '../Hand/Hand';
import './gameBoard.css';


  // {/* <div className="links">
  // <div>Player 2: <a href={domain() + "/" + this.state.p2_token}>{domain()}/{this.state.p2_token}</a></div>
  // </div> */}
//    }  

// initilize state constructor

const INITIAL_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";


export default class Game extends Component {
  constructor({ match: { params: { token } } }) {
    super();
    this.addCard = this.addCard.bind(this);
    this.state = {
      cards: {},
      players: {}
    }
    this.state = { token }
  }

  getCards() {
    return db.database().ref("/cards").once('value').then((snapshot) => this.setState({cards: snapshot.val()}))
  }
  getPlayers() {
    return db.database().ref("/playAnyCardGame").once('value').then((snapshot) => this.setState({players: snapshot.val()}))
  }
  componentDidMount() {
    this.listenForUpdates(this.state.token, (id, game) => {
      this._updateBoard(id, game);
      this._updateInfo(game);
    });
  }

  _updateInfo(game) {
    const playerNum = this.figurePlayer(this.state.token, game);
    this.setState({
      // moves: game.moves ? game.moves.split(",") : [],
      p1_token: game.p1_token,
      p2_token: game.p2_token,
    });
  }

//   componenetDidUnmount() {
//     firebase.removeBinding(this.cardsRef)
//   }


  _updateBoard(id, game) {
    const playerNum = this.figurePlayer(this.state.token, game);
    // this.load(game.fen || INITIAL_FEN);

    if (!this.board) {
      this.board = this._initBoard(id, game);
      // this.board.position(this.fen());
    } 
  }

  _initBoard(id, game) {
    const token = this.state.token;
    const playerNum = this.figurePlayer(token, game);
    this.getCards()
    console.log(")))))))))))))))))))))", playerNum);
    // this.addCard();
    // this.updateCard();
  }

  addCard(key) {
    const cards = {...this.state.cards};
    // const key = "";
    this.setState({cards})
  };

  updateCard(card) {
    const cards = {...this.state.cards};
    console.log(':::::::::::::::::::::::::::',cards);
    cards[card.id] = card;
    this.setState({cards});
  }
  
    // const config = {
    //   draggable: true,
    //   pieceTheme: "https://s3-us-west-2.amazonaws.com/chessimg/{piece}.png",
    //   onDragStart: onDragStart,
    //   onDrop: onDrop,
    //   onSnapEnd: onSnapEnd
    // };

    // const board = ChessBoard('game-board', config);
    // if (playerNum === 2) {
    //   board.orientation('black');
    // }
    // return board;

    //  onDrop(source, target) {
    //   const m = engine.move({
    //     from: source,
    //     to: target,
    //     promotion: 'q'
    //   });
    //   if (m === null) return "snapback";

    //   game.fen = engine.fen();
    //   game.moves = pushMove(game.moves, `${m['from']}-${m['to']}`);

    //   this.playAnyCardGame(id).set(game);
    // }

    //  onSnapEnd() {
    //   return board.position(engine.fen());
    // }

// remember to bring this back, css issue
//  history(moves = []) {
//   return moves.map((m, idx) => <span key={m}>{idx + 1}) {m}</span>);
// }

 listenForUpdates(token, cb) {
  db.database().ref("/playAnyCardGame").once('value').then(function(snapshot){console.log(snapshot.val())})
  this.getPlayers();
  // if(this.state.players){
  //   ["p1_token", "p2_token"].forEach((name) => {
  //     console.log('=====================',(name));
  //     console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>',token);
  //     const ref = this.state.players.orderByChild(name).equalTo(token);
  //     ref.on('value', (ref) => {
  //       const [id, game] = this.parse(ref.val());
  //       if (!id) return;
  //       cb(id, game);
  //     });
  //   });
  // }
}

 parse(tree) {
  if (!tree) return [];
  const keys = Object.keys(tree);
  const id = keys[0];
  const game = tree[id];
  return [id, game];
}

playAnyCardGame(id) {
  return db
    .database()
    .ref(`/playAnyCardGame/${id}`);
}

 domain() {
  const { hostname, port } = window.location;
  if (port) {
    return `http://${hostname}:${port}`;
  } else {
    return `http://${hostname}`;
  }
}

 pushMove(moves, move) {
  if (!moves) {
    return [move].join(",");
  } else {
    const arr = moves.split(",");
    return [...arr, move].join(",");
  }
}


 figurePlayer(token, { p1_token, p2_token }) {
  if (token === p1_token) {
    return 1;
  } else if (token === p2_token) {
    return 2;
  } else {
    return 0;
  }
}
  
    render() {
      // this.state.players ? this.state.players = this.state.players['-L2c6ym1W-cjtb8v768a']['p1_token'] : ""
      console.log("=============================a;sdogh",this.state.players)
    
      return (
        <div className='playingArea'>
          <div className="links">
            <div>Player 2: <a target="_blank" href={this.domain() + "/#/" + this.state.players}>{this.domain()}/#/{this.state.p2_token}</a></div>
            {/* <div>Player 2: <a target="_blank" href={this.domain() + "/#/" + this.state.p2_token}>{ this.domain() }/#/{this.state.p2_token}</a></div> */}
          </div>
            {/* <blockquote>
            //   <h5 className='turn'>{ this.state.turnText }</h5>
            //   <h5 className='status'>{ this.state.statusText }</h5>
            // </blockquote> */}
            <BackOfCards />
            <DiscardPile />
            <Hand />
            <Card />
          </div>
      );
    }
  }
  
