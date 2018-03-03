import React, { Component } from 'react';
import axios from 'axios';

import QueryBuilder from './components/QueryBuilder';
import UserPanel from './components/UserPanel';
import './App.css';


axios('http://localhost:3000/data.json')
  .then(console.log)
  .catch(console.log)

class App extends Component {
  
  state = {
    users: [{name: 'asds'}]
  }

  componentDidMount() {

  }
  
  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <QueryBuilder />
        
        {
          users.map(user => (
            <UserPanel { ...user }/>
          ))
        }

      </div>
    );
  }
}

export default App;
