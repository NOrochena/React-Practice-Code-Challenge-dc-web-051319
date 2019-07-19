import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    plateStack: [],
    counter: 0,
    sushi: [],
    money: 100
  }

  componentDidMount() {
    this.fetchSushi()
  }

  addCash = () => {
    this.setState({money: this.state.money + 25})
  }

  fetchSushi = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(sushi => {
      let sushiArray = []
      for (let i = this.state.counter ; i < this.state.counter + 4; i++) {
        sushiArray.push(sushi[i])
      }
      
      this.setState({
        sushi: sushiArray,
        counter: this.state.counter + 4
      })
    })
  }

  eatSushi = (sushi) => {
    if (this.state.money - sushi.price < 0) return false
    this.setState({money: this.state.money - sushi.price, plateStack: [...this.state.plateStack, sushi]})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  addCash={this.addCash} eatSushi={this.eatSushi} fetchSushi={this.fetchSushi} sushi={this.state.sushi}/>
        <Table money={this.state.money} plateStack={this.state.plateStack}/>
      </div>
    );
  }
}

export default App;