import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer.js';
import ToDoApp from './ToDoApp.js';
import MarkdownEditor from './MarkdownEditor.js';
import Toggle from './Toggle.js';
import LoginControl from './LoginControl.js';
import Page from './WarningBanner.js';
import NumberList from './ReactListsAndKeys.js';

const numbers = [1, 2, 3, 4, 5];

class App extends Component {
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
        <hr />
        <p>Array to component with key</p>
        <NumberList numbers={numbers}/>
        <hr />
        <Page />
        <LoginControl />
        <Toggle />
        <MarkdownEditor />
        <ToDoApp />
        <Timer />
      </div>
    );
  }
}

export default App;
