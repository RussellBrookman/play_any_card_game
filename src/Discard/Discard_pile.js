import React, { Component } from 'react';
import { DropTarget } from 'react-drag-drop-container';
import Card from '../Card/Card';
import InsideDiscardPile from './Inside_discard_pile';

export default class DiscardPile extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      highlighted: false,
      showInsideDiscardPile: false,
      cardsInDiscardPile: []
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
    this.setState({cardsInDiscardPile: [...this.state.cardsInDiscardPile, { img: imgsrc }]});
  }

  handleClick() {
    return (
      this.setState({ showInsideDiscardPile: true })
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
      textAlign: 'center'
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
        onHit={this.handleDrop}
        dropData={Card}
        dropElement={Card}
        onDragEnter={this.highlight}
        onDragLeave={this.unHighlight}
        targetKey='cardContainerDrop'
      >
        <button onClick={ this.handleClick } style={styles}>Discard Here</button>
        { this.state.showInsideDiscardPile ? <InsideDiscardPile disCards={this.state.cardsInDiscardPile}/> : null }
      </DropTarget>
    );
  };
}



  // state = {
  //   isAboutVisible: false,
  // }

  // render() {
  //  return (
  //   <div className="Nav">
  //     <div className="Button-Container">
  //     <div className="Nav-Text About-Button">
  //       <h2 onClick={() => this.setState({ isAboutVisible: true }) }>About</h2>
  //     </div>
  //     </div>
  //     { this.state.isAboutVisible ? <About /> : null }
  //   </div>


 //{/* { /* export {CardsInDiscardPile}; */}


  //        {/* {this.state.showInsideDiscardPile ? 'block' : 'none'}

// var Store = React.createClass({ */ //} */} */}

//   getInitialState: function() {
//     return { showStore: false };
//   },
//   onClick: function() {
//       this.setState({ showStore: true });
//   },
//   render: function() {
//   return(
//     <div className="row account stores" style={{display: { this.state.showStore ? 'block' : 'none'} }}>
//       <div>a lot more divs</div>
//         </div>
//     );
//   }
// });

// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showWarning: true}
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }

//   handleToggleClick() {
//     this.setState(prevState => ({
//       showWarning: !prevState.showWarning
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Hide' : 'Show'}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Page />,
//   document.getElementById('root')
// );



//{/* class Nav extends React.Component { */}
  
//     state = {
//       isAboutVisible: false,
//     }
  
//     render() {
//      return (
//       <div className="Nav">
//         <div className="Button-Container">
//         <div className="Nav-Text About-Button">
//           <h2 onClick={() => this.setState({ isAboutVisible: true }) }>About</h2>
//         </div>
//         </div>
//         { this.state.isAboutVisible ? <About /> : null }
//       </div>
//       );
//      }
//   }

  // <button onClick={this.handleClick.bind(this)} style={styles}>Discard Here{this.props.children}</button>
  // display: { InsideDiscardPile: 'none' } 

    // handleClick = () => {
  //   this.setState ({
  //     // ev: preventDefault(),
  //     // display: InsideDiscardPile ? 'block' : 'true' 
  //     prevState => ({
  //       showWarning: !prevState.showWarning
  //     }));
  //   })
  // }

  // handleClick = () => {
  //   this.setState ({
  //     showInsideDiscardPile: false
  //   });
  // }