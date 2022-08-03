import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Test(){
  console.log("render test")
  const [value, setValue] =  useState(0);
  // setValue(value+1);

  return (
    <span className="s0">
      <button 
      className="square a1" 
      onClick={()=>setValue(value+1)}
      >
        <span className="a1s1">{value}</span>
      </button>

      <button 
      className="square a2" 
      onClick={()=>setValue(value+2)}
      >
        <span className="a2s1">{value}</span>
      </button>
    </span>
  );
}

// class Square extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 0,
//     };

//     window._sq = this
//   }

//   clickHandler = () => {
//     // im1
//     this.setState({value : this.state.value+1})
//   }

//   clickHandler2 = () => {
//     // im 2
//     this.setState({value : this.state.value+2})
//   }


//   render() {
//     return (
//       <span className="s0">
//         <button 
//         className="square a1" 
//         onClick={this.clickHandler}
//         >
//           <span className="a1s1">{this.state.value}</span>
//         </button>

//         <button 
//         className="square a2" 
//         onClick={this.clickHandler2}
//         >
//           <span className="a2s1">{this.state.value}</span>
//         </button>
//       </span>
//     );
//   }
// }

class Board extends React.Component {

  renderSquare() {
    return <Test />;
  } 

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare()}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {

  
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board /> 
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
