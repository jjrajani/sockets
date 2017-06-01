import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const io = require('socket.io-client');
const socket = io("http://localhost:3030");

class App extends Component {
  constructor(props) {
    super(props);
    socket.on('connection', (data) => {
      socket.emit('app connected', {app: "The Client Socket is alive!!"});
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
