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
    this.resetAll = this.resetAll.bind(this)
  }

  renderChoosePlayers(){
    if(this.state.hasChosenMode === false){
      return <ChoosePlayers choose={this.chooseNumberOfPlayers}/>
    }
  }

  chooseNumberOfPlayers(){
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
    this.setState({
      hasChosenXorO: false,
      toggleGrid: true
    })
  }

  renderGrid(){
    if(this.state.toggleGrid === true){
      return <Grid reset={this.resetAll}/>
    }
  }

  resetAll(){
    console.log("hello")
    this.setState({
      toggleGrid: false,
      hasChosenMode: false
    })
  }

  render(){
  return (
    <div className="App">
      {this.renderGrid()}
    <div className="mainDiv">
    <div className="innerDiv">
      {this.renderChoosePlayers()}
      {this.renderChooseXorO()}
    </div>
    </div>
    </div>
  );
}
}

export default App;
