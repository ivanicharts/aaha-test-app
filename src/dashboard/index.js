import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

axios('http://localhost:3000/data.json')
  .then(console.log)
  .catch(console.log)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="block">
          <h3>Filters: </h3>
        </div> 
      </div>
    );
  }
}

export default App;
