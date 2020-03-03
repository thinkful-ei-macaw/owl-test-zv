import React, { Component } from 'react';
import Participant from './Participant';
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
        <List />
      </main>
    )
  }
}



export default App;