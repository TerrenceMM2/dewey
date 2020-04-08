import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      testMsg: ""
    }
  }

  getTest() {
    fetch('/test')
      .then(response => response.json())
      .then(data => {
        this.setState({
          testMsg: data.msg
        });
      });
  }

  componentDidMount() {
    this.getTest();
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.state.testMsg}</p>
      </div>
    );
  }
}

export default App;