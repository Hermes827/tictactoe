import React from 'react';

class Grid extends React.Component {

  constructor(){
    super()

    this.state = {
      playerScore: 0,
      computerScore: 0
    }

  }

  // clearScoreAndReset(){
  //   this.props.reset()
  //   this.setState({
  //     playerScore: 0,
  //     computerScore: 0
  //   })
  // }

  render(){
  return (
    <div className="gridMainDiv">
    <div className="p1Banner">{this.state.playerScore} Player 1</div>
    <div className="computerBanner">{this.state.computerScore} Computer</div>
    <div className="resetBanner" onClick={this.props.reset}>Reset All</div>
    <div className="gridInnerDiv">
    <div className="gridDiv">
    <div className="grid"></div>
    <div className="grid"></div>
    <div className="grid"></div>
    <div className="grid"></div>
    <div className="grid"></div>
    <div className="grid"></div>
    <div className="grid"></div>
    <div className="grid"></div>
    <div className="grid"></div>
    </div>
    </div>
    </div>

  );
}
}

export default Grid;
