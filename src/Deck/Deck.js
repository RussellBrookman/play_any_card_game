import React, { Component } from 'react';
import Image from 'react-image-resizer';
import InsideDeck from './Inside_deck';
import DeckToHand from './DeckToHand'
import './deck.css';


export default class BackOfCards extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showInsideDeck: false,
      cardsInsideDeck: [],
      cardsOnGameBoard: []
    }
    this.handleSearchClick = this.handleSearchClick.bind(this);
  };


  handleSearchClick() {
    return (
      this.setState({ showInsideDeck: true })
    )
  }

  handleClick = (ev) => {
    // this is making sure that the card dropped is the current card and not just an element with the cards attributes.
    // const parser = new DOMParser();
    // const doc = parser.parseFromString(ev.dragElem.innerHTML, "text/html");
    // console.log(doc);
    // var imgsrc = doc.querySelector('img').getAttribute('src');
      
    // ev.stopPropagation();
    // this.unHighlight();

    // ev.sourceElem.style.visibility = 'hidden';
    // this.setState({cardsOnGameBoard: [...this.state.cardsOnGameBoard, { img: imgsrc }]});
  }
  

  render () {

    return (
      <div id='wrap'>
        <div className='box'>
          <button onClick={this.handleClick}>
            <Image
              src={require('./img/backOfCards.jpg')}
              alt='Deck'
              width={100}
              height={140}
            />
          </button>
        </div>
        <button className="searchDeck" onClick={ this.handleSearchClick }>Search</button>
        { this.state.showInsideDeck ? <InsideDeck deckCards={this.state.cardsInsideDeck}/> : null }
      </div>
    );
  };
}








// const fs = require('fs');


// let deck = [];


// fetch('/getCards')
//   .then(response => console.log(response));

// fs.readdirSync('../img/poker_deck').forEach(img => deck.push(img));

// console.log(Data);
// // this is to get the cards into the deck.
// Data.forEach(function (Data) {
//   deck.push(Data);
//   console.log(deck);
// });

// for (let i = 0; i > Data.length; i++) {
//   i = Data.push(deck);
// }

// document.getElementById.draw.onclick = alert("clicked");

// let newCard = React.createElement({Card})

{/* <main id="wrapper" className="" data-reset-cookie-tab>
        <div id="content" role="main">
          <div className="inner-block"> */}

            {/* // <H1Heading title="Tell us about any disabilities, illnesses or ongoing conditions"/>

            // <InputField label="Name of condition" */}
            {/* //   InputType="text"
            //   InputId="id-condition"
            //   InputName="condition"
            // />

            // { */}
            {/* //   this.state.inputLinkClicked?

            //   <InputField label=""
            //     InputType="text"
            //     InputId="id-condition2"
            //     InputName="condition2"
            //   />

            //   :

            //   <div></div>
            // } */}



//{/* // class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showComponent: false,
//     };
//     this._onButtonClick = this._onButtonClick.bind(this);
//   }

//   _onButtonClick() {
//     this.setState({
//       showComponent: true,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Button onClick={this._onButtonClick}>Button</Button>
//         {this.state.showComponent ?
//            <NewComponent /> :
//            null
//         }
//       </div>
//     );
//   }
// }







//     var cardDrawn = this.state.cardId ? <Card cardId={this.state.cardId} /> : null;
//     return (
//       <div className='box'>
//         {/* <button onClick={this.handleClick.bind(this)}> */}
 {/* //         <button onClick={this.handleClick} card-id={card.cardId}>
// //           { cardDrawn }
// //         <Image */}
{/* //           src={require('../img/backOfCards.jpg')}
//           alt='Deck'
//           width={100}
//           height={140}
//         />
//         </button> */}
{/* //       </div> */}
{/* //       <div>
//       <div>       
//       <ul>
//         {this.state.images.map(card => { */}
{/* //           return (<li key={card.cardId}><img src={img.imgsrc} alt={card.cardId} /></li>);
//         }).bind(this)} */}
{/* //       </ul> */}
{/* //       </div> */}
{/* //       </div> */}
{/* //     );
//   }
// }


// { this.props.disCards.map(card => { */}
{/* //   return <Card src={card.img} />;


//   return (
//     <div className="row">   *
//     <div className="image-viewer">    *
//       { cardDrawn }
//       <ul className="list-inline">    *
//         {this.state.images.map(image => { */}
{/* //           return (<li key={image.mediaId}><a href="#" onClick={this.handleClick} card-id={image.cardId}><img src={image.src} */}
{/* //                                                            className="img-responsive img-rounded img-thumbnail"
//                                                            alt={image.cardId}/></a></li>); */}
{/* //         }).bind(this)} */}

{/* //       </ul> */}
{/* //     </div>
//   </div> */}
{/* // );
// }
// }
// export default Viewer; */} 






{/* // export default class BackOfCards extends Component { */}
{/* //   constructor (props) {
//     super(props);
// //       this.mainHtml = {
// //         { document.getElementsByClassName("playingArea") }
// //       }
// //       this.state = {
// // //        drawACard: [],
// //         mainHtml: this.mainHtml
// //       };
// //    this.renderCard = this.renderCard.bind(this);
// //  this.handleClick = this.handleClick.bind(this);
//   }

//   // componentDidMount(){ }

//   handleClick = (ev) => {

//     // render() {
//       // return (
//       //   <Card src={Card}/>
//       // }

// //    render() {

//     //   return(
//         // getElementByClassName("playingArea").render(
//         // <Card src={Card.img} />
//         // );
//   //    );
// //    };
// // console.log({Card})

//     // event.preventDefault();
//     // // Get the value of the `data-id` attribute <a data-id="XX">
//     // var cardId = event.currentTarget.attributes['card-id'].value;
//     // // Set the state to re render
//     // this.setState({ cardId }); // ES6 shortcut
//     // // this.setState({ mediaId: mediaId }); // Without shortcut

//     // const parser = new DOMParser();
//     // const doc = parser.parseFromString(ev.dragElem.innerHTML, "text/html");
//     // console.log(doc);
//     // var imgsrc = doc.querySelector('img').getAttribute('src');
//     // document.body.appendChild(imgsrc)

//     // ev.sourceElem.style.visibility = 'hidden';

//     // this.setState({
//     //   // drawClicked: true

//     // });

//     // this.setState({
//     //   setTimeout(function resetDrawState() {
//     //     drawClicked: false
//     //   }, 0);
//     // });
// //      setTimeout(function() { this.setState({drawClicked: false}); }.bind(this), 3000);
//         document.getElementsByClassName("playingArea").appendTo(<Card />);
//         // this.setState({
//         //   mainHtml:this.mainHtml
//         // });

//   };
// // const elements1 = document.querySelectorAll('div')
// // const elements2 = document.getElementsByTagName('div')
// // const newElement = document.createElement('div')

// // document.body.appendChild(newElement)
// // elements1.length === elements2.length // false  // { this.props.disCards.map(card => {
//   //   return <Card src={card.img} />;
//   // })}

//   render () {

//     return (
//       <div className='box'>
//          {/* <button onClick={this.handleClick.bind(this)}> */}
{/* //         <button onClick={this.handleClick}>
//           <Image */}
{/* //             src={require('../img/backOfCards.jpg')}
//             alt='Deck'
//             width={100}
//             height={140}
//           />
//         </button> */}
{/* //          {/* { this.state.drawClicked ? <Card /> : null } */}
{/* //          {/* {this.state.mainHtml} */}
{/* //          { */}
{/* // //            this.state.map((item) => (


// //           this.state.map((item) => (
// // //              <Card key={item.id} name={item.name}/>
// //               <Card />
// //             ))


//                 }
      //  </div> */} 
{/* //        <button onClick={this.handleSearch}>
//     );
//   };
// } */} 