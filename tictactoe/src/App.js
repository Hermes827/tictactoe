import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChoosePlayers from './components/choosePlayers.js'

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      hasChosenMode: false
    }
  }

  renderChoosePlayers(){
    if(this.state.hasChosenMode === false){
      return <ChoosePlayers/>
    }
  }

  render(){
  return (
    <div className="App">
    <div className="mainDiv">
    <div className="innerDiv">
      {this.renderChoosePlayers()}
    </div>
    </div>
    </div>
  );
}
}

export default App;
