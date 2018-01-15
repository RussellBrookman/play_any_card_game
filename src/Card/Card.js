import React from 'react';
import { DragDropContainer } from 'react-drag-drop-container';
import Image from 'react-image-resizer';
import cards from '../Data/cards.json';
import './card.css';
import path from 'path';
import InsideDeck from '../Deck/Deck';


export default class Card extends React.Component {
  constructor(props) {
    super(props);
    // this.renderCardArray = this.renderCardArray(this);
  }

//   // callback
//   renderInsideDeck = (dataFromChild) => {
//     [...we will use the dataFromChild here...]
// },

// someFn = () => {
//   [...somewhere in here I define a variable listInfo which    I think will be useful as data in my ToDoList component...]
//   this.props.callbackFromParent(listInfo);
// },
// render() {
//     [...]
// }
// };

  render () {
    // this.props.src ? this.props.src : this.props = "../img/poker_deck/aceOfClubs"
    console.log("ppppppppppppppppppppppppppppppppp", this.props)
    const {src} = this.props

    let source = Object.values(cards.cards)
    console.log(this.props.src, 'AAAAA===================================');

    return (
      <DragDropContainer
        targetKey='cardContainerDrop'
        dragData={this.props.children}
        onDragStart={() => (console.log('start'))}
        onDrop={() => (console.log('end'))}
      >
        <div className='box'>
          <Image
            // key={ c }
            // src={this.props.src} 
            src={require('./aceOfClubs.jpg')}
            className="Card"
            alt={'Card'}
            width={100}
            height={140}
          />
        </div>
      </DragDropContainer>
    );
  }
}
