import React from 'react';
const winningCombinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

class Grid extends React.Component {

  constructor(){
    super()

    this.state = {
      playerScore: 0,
      computerScore: 0,
      playerCellClicks: [],
      computerCellClicks: [],
      cellContent: ""
    }
    this.clickedCell = this.clickedCell.bind(this)
  }

  // clearScoreAndReset(){
  //   this.props.reset()
  //   this.setState({
  //     playerScore: 0,
  //     computerScore: 0
  //   })
  // }
  clickedCell(e){
    let cell = e.target
    if(this.state.playerCellClicks.length === 3){return}
    this.setState({
      playerCellClicks: [...this.state.playerCellClicks, parseInt(cell.id)]
    })
    cell.innerHTML = "X"
  }

  isWinner(){
    if(this.state.playerCellClicks.length === 3){
      for(let i=0;i<=winningCombinations.length;i++){
        if(JSON.stringify(this.state.playerCellClicks) === JSON.stringify(winningCombinations[i])){
          console.log("winner")
        }
      }
    }
    }

  render(){
  return (
    <div className="gridMainDiv">
    <div className="p1Banner">{this.state.playerScore} Player 1</div>
    <div className="computerBanner">{this.state.computerScore} Computer</div>
    <div className="resetBanner" onClick={this.props.reset}>Reset All</div>
    <div className="gridInnerDiv">
    <div className="gridDiv">
    <div className="grid" id="1" onClick={this.clickedCell}></div>
    <div className="grid" id="2" onClick={this.clickedCell}></div>
    <div className="grid" id="3" onClick={this.clickedCell}></div>
    <div className="grid" id="4" onClick={this.clickedCell}></div>
    <div className="grid" id="5" onClick={this.clickedCell}></div>
    <div className="grid" id="6" onClick={this.clickedCell}></div>
    <div className="grid" id="7" onClick={this.clickedCell}></div>
    <div className="grid" id="8" onClick={this.clickedCell}></div>
    <div className="grid" id="9" onClick={this.clickedCell}></div>
    </div>
    </div>
    {this.isWinner()}
    </div>
  );
}
}

export default Grid;
