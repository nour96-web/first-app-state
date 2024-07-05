import './App.css';
import React, { Component } from 'react'
import FootPlayer from './components/FootPlayer';
import TennisPlayer from './components/TennisPlayer';

export default class App extends Component {
  state = {
    isVisible: false,
  };
  handleShow = () => {
this.setState({ isVisible: ! this.state.isVisible})
  };
  render() {
    return (
      <div className="App">
        <button onClick={() => this.handleShow()}>
          {this.state.isVisible ? "Show TennisPlayer" : "Show FootPlayer"} 
          </button>
        {this.state.isVisible ? <FootPlayer /> : <TennisPlayer />}
      </div>
    )
  }
}
