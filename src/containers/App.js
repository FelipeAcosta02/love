import React, { Component } from 'react';

import LoversInput from '../components/loversInput';
import ResultView from '../components/resultView';

import { Input, Card, Button } from 'antd';

class App extends Component {
  state = {
    lovers: {}
  }
  eraseValues = () => {
    document.getElementById("firstLover").value = ""
    document.getElementById("secondLover").value = ""
  }
  loveInputHandler = () => {
    const love = Math.floor(Math.random() * 100) + "%"
    const lover1 = document.getElementById("firstLover").value
    const lover2 = document.getElementById("secondLover").value
    const lovers = {firstLover: lover1, secondLover: lover2, loveIndex: love}
    this.setState({lovers: lovers})
    this.eraseValues()
  }
  render() {
    return (
      <div className="App" style={{marginTop:'20pt'}}>
        <h1>Find Your True Love!</h1>
        <LoversInput  loveInputHandler={this.loveInputHandler}/>
        <ResultView  lovers={this.state.lovers}/>
      </div>
    );
  }
}

export default App;
