import React from 'react';

class ChooseXorO extends React.Component {

  constructor(){
    super()

    this.state = {

    }

  }

  render(){
  return (
    <div className="choosePlayers">
    <h1>Would you like to be X or O?</h1>
    <div className="playerDivs">
    <div className="xdiv"><h1 className="x" onClick={this.props.chooseX}>X</h1></div>
    <div className="odiv"><h1 className="o" onClick={this.props.chooseO}>O</h1></div>
    </div>
    </div>
  );
}
}

export default ChooseXorO
