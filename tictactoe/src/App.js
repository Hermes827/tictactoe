import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChoosePlayers from './components/choosePlayers.js'
import ChooseXorO from './components/chooseXorO.js'
import Grid from './components/grid.js'

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      hasChosenMode: false,
      hasChosenXorO: false,
      toggleGrid: false
    }
    this.chooseNumberOfPlayers = this.chooseNumberOfPlayers.bind(this)
    this.chooseXorO = this.chooseXorO.bind(this)
  }

  renderChoosePlayers(){
    if(this.state.hasChosenMode === false){
      return <ChoosePlayers choose={this.chooseNumberOfPlayers}/>
    }
  }

  chooseNumberOfPlayers(){
    console.log("hi")
    this.setState({
      hasChosenMode: true,
      hasChosenXorO: true
    })
  }

  renderChooseXorO(){
    if(this.state.hasChosenXorO === true){
      return <ChooseXorO choose={this.chooseXorO}/>
    }
  }

  chooseXorO(){
    console.log("hi")
    this.setState({
      hasChosenXorO: false,
      toggleGrid: true
    })
  }

  renderGrid(){
    if(this.state.toggleGrid === true){
      return <Grid/>
    }
  }

  render(){
  return (
    <div className="App">
    <div className="mainDiv">
    <div className="innerDiv">
      {this.renderChoosePlayers()}
      {this.renderChooseXorO()}
      {this.renderGrid()}
    </div>
    </div>
    </div>
  );
}
}

export default App;
