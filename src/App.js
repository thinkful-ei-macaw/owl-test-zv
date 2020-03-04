import React, { Component } from 'react';
// import Participant from './Participant';
import List from './Participants';
import './App.css';
import './store.js';
import Stage from './Stage';

class App extends Component {
  static defaultProps = {
    participants: []
  }

  render() {
    return (
      <main className='App'>
        <div className="participants">
          <List />
          </div>
        <div className="stage">
          <Stage />
        </div>
        
      </main>
    )
  }
}



export default App;