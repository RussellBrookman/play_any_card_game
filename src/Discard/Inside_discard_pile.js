import React, { Component } from 'react';
import Card from '../Card/Card';
import DiscardPile from './Discard_pile';
import CardsInDiscardPile from './Discard_pile';
import './discard.css';


export default class InsideDiscardPile extends Component {
  constructor(props){
    super(props);
  }

  render() {
    // if (discardedCardsArray !== -1){
    // for (i = 0; i < discardedCardsArray.length; i++) {
    //   discardedCardsArray.map(i);
 //   const data =[{this.props.disCards}].slice();
    //console.log(this.props.disCards[0]);
    return (
      <div className="insideDiscard">
        <h2>Discard Pile</h2>
        
        
        { this.props.disCards.map(card => {
          return <Card src={card.img} />;
        })}
      </div> 
    )
  }
}





// class First extends React.Component {
//   constructor (props){
//     super(props);

//   }

//   render() {
//     const data =[{"name":"test1"},{"name":"test2"}];
//     return (
//       <div>
//       {data.map(function(d, idx){
//          return (<li key={idx}>{d.name}</li>)
//        })}
//       </div>
//     );
//   }




// class Node {
//   constructor(data, next) {
//       this.data = data;
//       this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//       this.head = null;
//   }

//   insertLink(indexLink, data) {
//       let index = 0;
//       const newNode = new Node(data, null);
//       this.pointer = this.head;
//       while(this.pointer != null) {
//           if(index === indexLink) {
//               let tmp = this.pointer.next;
//               this.pointer.next = newNode;
//               newNode.next = tmp;
//           }
//           index++;
//           this.pointer = this.pointer.next;
//       }
//   }

//   deleteLink(data) {
//       let previousLink = this.head;
//       this.pointer = this.head;

//       if(data === this.head.data) {
//           this.head = this.head.next;
//       } else {
//           previousLink = this.pointer;
//           this.pointer = this.pointer.next;
//           while(this.pointer != null) {

//               if(data === this.pointer.data) {
//                   previousLink.next = this.pointer.next;
//               }
//               previousLink = this.pointer;
//               this.pointer = this.pointer.next;
//           }
//       }
      
//   }

//   print(node) {
//       console.log(node.data);
//       if(node.next === null) {
//           return;
//       }
//       this.print(node.next);
//   }

//   reversePrint(node) {
//       if(node === null) {
//           return;
//       }
//       this.reversePrint(node.next);
//       console.log(node.data);
//   }

//   populate(data) {
//       if(Array.isArray(data)) {
//           this.head = new Node(data.shift(), null);
//           this.pointer = this.head;
//           data.forEach(val => {
//               this.pointer.next = new Node(val, null);
//               this.pointer = this.pointer.next;
//           });
//       }
//   }
// }

// const ll = new LinkedList();
// ll.populate([1, 2, 3, 5, 7, 8]);
// //ll.print(ll.head);
// //ll.reversePrint(ll.head);

// //ll.deleteLink(5);
// //ll.deleteLink(3);
// ll.insertLink(2, 888);
// ll.print(ll.head);

// const head = new Node(123, null);
// head.next = new Node(345, null);
// head.next.next = new Node(678, null);
// head.next.next.next = new Node(91011, null);

              //0      1      2       3       
// Linked List 123 -> 345 -> 678 -> 91011 -> null

//reversePrint(head);


//console.log(JSON.stringify(head));