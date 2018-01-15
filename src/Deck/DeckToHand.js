import React, { Component } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import PropTypes, { array } from 'prop-types';
import Image from 'react-image-resizer';
import Card from '../Card/Card';
import cards from "../Data/cards.json";
import path from 'path';
import './deck.css';
import '../Card/card.css';
import InsideDeck from './Inside_deck';


export default class DeckToHand extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      highlighted: false,
      showInsideDeck: true,
      cardsInsideDeck: []
    }
    this.handleClick = this.handleClick.bind(this);
  };

  highlight = () => {
    this.setState({highlighted: true});
  }

  unHighlight = () => {
    this.setState({highlighted: false});
  };
  handleDrop = (ev) => {
    // this is making sure that the card dropped is the current card and not just an element with the cards attributes.
    const parser = new DOMParser();
    const doc = parser.parseFromString(ev.dragElem.innerHTML, "text/html");
    console.log(doc);
    var imgsrc = doc.querySelector('img').getAttribute('src');
    
    ev.stopPropagation();
    this.unHighlight();

    ev.sourceElem.style.visibility = 'hidden';
    this.setState({cardsInsideDeck: [...this.state.cardsInsideDeck, { img: imgsrc }]});
  }

  handleClick() {
    return (
      this.setState({ showInsideDeck: false })
    )
  }

  render () {
    let styles = {
      width: '100px',
      height: '140px',
      float: 'right',
      backgroundColor: 'gray',
      border: '10px',
      borderColor: 'black',
      borderStyle: 'double',
      display: 'inline-block',
      margin: '2%',
      position: 'relative',
      top: '48%',
      textAlign: 'center',
      zIndex: '999'
    };
    if (this.state.highlighted) {
        styles = {
        width: '100px',
        height: '140px',
        float: 'right',
        backgroundColor: 'white',
        border: '10px',
        borderColor: 'gold',
        borderStyle: 'double',
        margin: '2%',
        position: 'relative',
        top: '48%',
        textAlign: 'center'
      };
    }
    return (
      <DropTarget
        className='notTheDeck'
        onHit={this.handleDrop}
        // src= {none}
        dropData={Card}
        dropElement={Card}
        onDragEnter={this.highlight}
        onDragLeave={this.unHighlight}
        targetKey='cardContainerDrop'
      >
        <button onClick={ this.handleClick } style={styles}>Drop Into your hand</button>
          {/* { this.state.showInsideDeck ? <Hand searchedCards={this.state.cardsInsideHand}/> : null } */}
      </DropTarget>
    );
  };
}
