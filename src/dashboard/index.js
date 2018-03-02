import React, { Component } from 'react';
import axios from 'axios';

import Filters from './components/Filters';

import './App.css';


axios('http://localhost:3000/data.json')
  .then(console.log)
  .catch(console.log)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filters />
      </div>
    );
  }
}

export default App;
