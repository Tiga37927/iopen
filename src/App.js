import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
      console.warn(123);
  }

  render() {
    return (
      <div className="App">
        <div className="bg-content">
        </div>
        <p className="App-intro">
          <img src={logo} className="App-logo" alt="logo" />
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
