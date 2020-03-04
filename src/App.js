import React, { Component } from 'react';
// import Participant from './Participant';
import List from './Participants';
import './App.css';
import './store.js';


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

        </div>
        
      </main>
    )
  }
}



export default App;