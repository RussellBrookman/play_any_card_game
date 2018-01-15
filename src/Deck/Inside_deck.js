import React, { Component } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import PropTypes, { array } from 'prop-types';
import Image from 'react-image-resizer';
// import Card from '../Card/Card';
import Deck from './Deck';
import cards from "../Data/cards.json";
import './deck.css';
import '../Card/card.css';
import path from 'path';
import '../Card/card.css';
import BackOfCards from '../Deck/Deck';
import DeckToHand from './Deck';



export default class InsideDeck extends React.Component {
  constructor(props){          
    super(props);                
  }

  render () {

    // this.props.src ? this.props.src : this.props = "../img/poker_deck/aceOfClubs"

    // no props returned
    console.log("ppppppppppppppppppppppppppppppppp", this.props)
    // const {src} = this.props

    let source = Object.values(cards.cards)

    // another undefigned
    console.log(this.props.src, 'AAAAA===================================');

    // winner
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^", source.key);
            // dragData={this.props.children}
            // onDragStart={() => (console.log('source'))}
    // rendering the cards
    let renderCardArray = cards.cards.map(c => {
      console.log("4444444444444444444444444" ,c.key);
      return( 
        <DragDropContainer
          targetKey='cardContainerDrop'
          dragData={this.props.children}
          onDragStart={() => (console.log('start'))}
          onDrop={() => (console.log('end'))}
        >
        <div className='box'>
          <Image
            // key={ c }
            src={c.key} 
            className="card"
            alt={'Card'}
            width={100}
            height={140}
          />
        </div>
      </DragDropContainer>
      )
    })


    return (
      <div className="insideDeck">
        <h2>Search your Deck</h2>
        <DeckToHand />
        {/* {
          this.state.cardsInDeck.map(c => {
            return <Card src={ c.key } />;
            { c.key }
          })
        } */}
        { renderCardArray }
      </div> 
    );
  }
}






// let cardImgValue = [];
// console.log(cardImgValue);

  // render() {                 *
    //<Card src={card.img} />                   n
    //for (let i = 0; i < this.state.cardsInDeck.length; i++){
      //this.cardsInDeck[i].push(cardImgValue);
      // this.state.cardsInDeck.cards.map(card => {
      //   // console.log(eval(cards.key));
      //   console.log(cards.key);
      //   return (

      //   )                                n
    //  });
    //}

    // createImages: function (images) {                                    n
    //   return images.map(this.createImage);
    // },




  //       <Card src={card.img} />                   n
  //   for (let i = 0; i < this.state.cardsInDeck.length; i++){
  //     this.cardsInDeck[i].push(cardImgValue);
  //     this.state.cardsInDeck.cards.map(card => {
  //       // console.log(eval(cards.key));
  //       console.log(cards.key);
  //       return (

  //       )                                n
  //    });
  //   }





    //  this.state = {
    //    cardsInDeck: cards.cards
    // // // this.sendCardValues();                  *
    // }

  // cards.cards.forEach( = (c) => {
  //   var img = new Image();
  //   img.src = c.cards;
  //   img.setAttribute("class", "banner-img");
  //   img.setAttribute("alt", "effy");
  //   document.getElementById("img-container").appendChild(img);
  // });


// cards.cards.forEach( function(c) {
//   var img = new Image();
//   img.src = c.cards;
//   img.setAttribute("class", "banner-img");
//   img.setAttribute("alt", "effy");
//   document.getElementById("img-container").appendChild(img);
// });


// const JSON = {
//   Lillian: {
//     type: 'The Guardian',
//     portfolioImage: './img/TheGuardian/Lillian.png'
//   },
//   Annalise: {
//     type: 'TheGuardian',
//     portfolioImage: './img/TheGuardian/Annalise.png'
//   },
//   Raven: { type: 'DCComics', portfolioImage: './img/TheGuardian/Raven.png' }
// };

// class Example extends React.Component {
//   render() {
//     return (
//       <div>
//         {Object.keys(cards.cards).map(key => (
//           <div>
//             {cards.cards[key].type}
//             <img src={cards.cards[key].portfolioImage} key={keys} />
//           </div>
//         ))}
//       </div>
//     );
//   }
// }



// import React from 'react';

// let Image = function statelessFunctionComponentClass(props) {
//   let source = './images/' + props.source;

//   let style = {
//     width: '200px',
//     margin: '10px 5px 0px 5px'
//   };

//   return (
//     <img src={source} style={style} />
//   );
// };

// export default Image



// render() {
// let renderPhotoTypes = () => {
// let cardsInDeck = [];

// cards.cards.map( ( item )=> {
//   name.push(
//     <View style={styles.imageSelectItem} key={item.type}>
//       <TouchableWithoutFeedback>
//         <View>
//           <View style={styles.imageContainer}>
//             <Image style={styles.image} source={item.image}/>
//           </View>
//           <Text style={styles.text}>{item.type}</Text>
//         </View>
//       </TouchableWithoutFeedback>
//     </View>
//   );
// } );
// return type;
// };

// return (
//   <ScrollView style={styleGuide.containerMain}>
//     <Text style={styleGuide.heading_1}>
//       Select type
//     </Text>

//     <View style={styles.imageSelectContainer}>
//       {renderPhotoTypes()}
//     </View>
//   </ScrollView>);
// }
// }

// let cardArray = array.map(c => {
  // return <img key={c} src={require(`./icons/${c}.png`)} alt="" className="img-responsive" />
// });

// return (
//    <div className="container">
//        <footer className="row">
//            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
//                <h4>Some text</h4>
//            </div>
//            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
//               { cardArray }
//            </div>
//        </footer>
//    </div>
// );
// }
// }


// createImage(props){
//   return(<img src={props} alt="imgwow" />);
// }

// createImages(images){
//   return images.map(this.createImage);
// }

// render(){
//   return(
//       <div>
//           { this.createImages(data) }
//       </div>
//   );
// }
// }




// let data = [
//   { value: "One", key: "1" },
//   { value: "Two", key: "2" },
//   { value: "Three", key: "3" }
// ];
// return data.map(item => {
//   return (
//     <li key={item.key}>
//       {item.value}
//     </li>
//   );
// });


// { this.props.disCards.map(card => {
//   return <Card src={card.img} />;
// })}

// export { cardImgValue };


// {/* <InsideDeck deckCards={this.state.cardsInDeck}/> */}

// this.props.cardsInDeck.map(card => {
//   return <li><Card src={card.img} /></li>;