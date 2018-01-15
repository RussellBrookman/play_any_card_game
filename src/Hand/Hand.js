import React, { Component } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import PropTypes, { array } from 'prop-types';
import Image from 'react-image-resizer';
import Card from '../Card/Card';
import Deck from '../Deck/Deck';
import './hand.css';
import '../Card/card.css';
import path from 'path';
import '../Card/card.css';
import BackOfCards from '../Deck/Deck';


export default class Hand extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      cardsOnGameBoard: []
    }
    // this.handleClick = this.handleClick.bind(this);
  };
  

  // handleDrop = (ev) => {
  //   // this is making sure that the card dropped is the current card and not just an element with the cards attributes.
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(ev.dragElem.innerHTML, "text/html");
  //   console.log(doc);
  //   var imgsrc = doc.querySelector('img').getAttribute('src');
    
  //   ev.stopPropagation();
  //   this.unHighlight();

  //   ev.sourceElem.style.visibility = 'hidden';
  //   this.setState({cardsOnGameBoard: [...this.state.cardsOnGameBoard, { img: imgsrc }]});
  // }

  // handleClick() {

  // }

  render () {
    let styles = {
      width: '60%',
      height: '140px',
      float: 'left',
      backgroundColor: 'black',
      border: '10px',
      borderColor: 'gray',
      borderStyle: 'ridge',
      display: 'inline-block',
      margin: '2%',
      position: 'relative',
      bottom: '0%'
    };
    return (
      <DropTarget
        onHit={this.handleDrop}
        dropData={Card}
        dropElement={Card}
        onDragEnter={this.highlight}
        onDragLeave={this.unHighlight}
        targetKey='cardContainerDrop'
      >
      <div style={styles} />
        {/* <button onClick={ this.handleClick } style={styles}>Discard Here</button> */}
      </DropTarget>
    );
  };
}