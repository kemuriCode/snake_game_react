import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    const grid = [];
    
    for (let row = 0; row < 20; row++) {
      const cols = [];
      for (let col = 0; col < 20; col++) {
        cols.push({
          row,
          col
        })
      }
      grid.push(cols);
    }
    this.state = {
      grid,
      apple: {
        row: Math.floor(Math.random() * 20),
        col: Math.floor(Math.random() * 20)
      }
    }
  }
  render() {
    return (
      <div className="App">
        <h3>SNAKE GAME IN REACT</h3>
        <section className="grid">
        {
          this.state.grid.map((row, i) => {
            row.map(cell => (
              <div className={`cell
            ${
              apple.row === cell.row
              && apple.col === cell.col
              ? 'apple' : ''
            }`
            }> </div>
            ))
          })
        }
        </section>
      </div>
    );
  }
}

export default App;
