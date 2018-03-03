import React, { Component } from 'react';
import axios from 'axios';

import QueryBuilder from './components/QueryBuilder';
import UserPanel from './components/UserPanel';

import { getStats } from './service'

import './App.css';

class App extends Component {
  
  state = {
    data: { details: [] },
    error: false
  }

  async componentDidMount() {
    console.log('asdsad')
    try {
      const { data } = await getStats();
      console.log('uesr', data);
      this.setState({ data });
    } catch (e) {
      console.log('e', e)
      this.setState({ error: 'Something terrible has happened: ' + e });
    }

  }
  
  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <QueryBuilder />
        
        {
          data.details.map(field => (
            <UserPanel { ...field } users={ data.enclosures } />
          ))
        }

      </div>
    );
  }
}

export default App;
