import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';

class App extends Component {
  componentWillMount() {
      console.warn(123);
  }

  render() {
    return (
      <div className="App">
        <div className="bg-content">
        </div>
          <Button type="danger">Button</Button>
      </div>
    );
  }
}

export default App;
