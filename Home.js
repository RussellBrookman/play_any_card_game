import { Route, Redirect } from 'react-router'

<Route exact path="/" render={() => (
  loggedIn ? (
    <Redirect to="/dashboard"/>
  ) : (
    <PublicHomePage/>
  )
)}/>





// import React from 'react';
// import Utils from '../../utils';

// const { firebase } = window;

// export default function() {
  
//   function createGame() {
//   const newGame = {
//     p1_token: Utils.token(),
//     p2_token: Utils.token()
//   };

//   const game = firebase.database().ref("games").push();

//   game.set(newGame).then(() => {
//       window.location.hash = `#/${newGame.p1_token}`;
//     }, (err) => {
//       throw err;
//     });
// }

//   return (
//         <button onClick={createGame}>New Game</button>
//   );
// }