import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChoosePlayers from './components/choosePlayers.js'
import ChooseXorO from './components/chooseXorO.js'
import Grid from './components/grid.js'
import Login from './components/login.js'

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      hasChosenMode: false,
      hasChosenXorO: false,
      toggleGrid: false,
      setX: false,
      setO: false,
      login: false
    }
    this.chooseNumberOfPlayers = this.chooseNumberOfPlayers.bind(this)
    this.chooseXorO = this.chooseXorO.bind(this)
    this.resetAll = this.resetAll.bind(this)
    this.chooseX = this.chooseX.bind(this)
    this.chooseO = this.chooseO.bind(this)
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
      return <ChooseXorO choose={this.chooseXorO} chooseX={this.chooseX} chooseO={this.chooseO}/>
    }
  }

  chooseXorO(){
    this.setState({
      hasChosenXorO: false,
      toggleGrid: true
    })
  }

  chooseX(){
    console.log("hello x")
    this.setState({
      hasChosenXorO: false,
      toggleGrid: true,
      setX: true
    })
  }

  chooseO(){
    console.log("hello o")
    this.setState({
      hasChosenXorO: false,
      toggleGrid: true,
      setO: true
    })
  }


  renderGrid(){
    if(this.state.toggleGrid === true){
      return <Grid reset={this.resetAll} setX={this.state.setX} setO={this.state.setO}/>
    }
  }

  resetAll(){
    console.log("hello")
    this.setState({
      toggleGrid: false,
      hasChosenMode: false
    })
  }

  login(){
    console.log("login")
  }

  signup(){
    console.log("signup")
  }

  render(){
  return (
    <div className="App">
      {this.renderGrid()}
    <div className="mainDiv">
    <div className="signinDiv">
    <button className="login" onClick={this.login}>Log in</button>
    <button className="signup" onClick={this.signup}>Sign up</button>
    </div>
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
