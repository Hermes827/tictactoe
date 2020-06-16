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
      cellContent: "",
      currentPlayer: false,
      currentComputer: false
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
  componentDidMount(){
    let random = Math.floor(Math.random()*11)
    console.log(random)
    if(random <= 5){
      this.setState({
        currentPlayer: true
      })
    } else {
      this.setState({
        currentComputer: true
      })
    }
  }

  clickedCell(e){
    if(this.state.playerCellClicks.length === 20 || this.state.currentPlayer === false){return}
    let cell = e.target
    if(cell.innerHTML === "X" || cell.innerHTML === "O"){return}
    cell.innerHTML = "X"
    this.setState({
      playerCellClicks: [...this.state.playerCellClicks, parseInt(cell.id)],
      currentPlayer: false,
      currentComputer: true
    })
  }

  computerTurn(){
    setTimeout(() => {
    if(this.state.currentComputer === false || this.state.computerCellClicks.length === 20){return}
    console.log("hello")
    // let cell = e.target
    let random = Math.floor(Math.random()*10)
    const divArr = document.querySelectorAll("div.grid")
    if(divArr[random].innerHTML === "X" || divArr[random].innerHTML === "O"){
      this.computerTurn()
    } else {
    divArr[random].innerHTML = "O"
    this.setState({
      computerCellClicks: [...this.state.computerCellClicks, parseInt(divArr[random].id)],
      currentComputer: false,
      currentPlayer: true
    })
    }
    }, 1000)
  }
  //used arrow function for setTimeout, otherwise it causes scoping problems and makes the program crash

  isWinner(){
    if(this.state.playerCellClicks.length === 3){
      for(let i=0;i<=winningCombinations.length;i++){
        if(JSON.stringify(this.state.playerCellClicks) === JSON.stringify(winningCombinations[i])){
          console.log("winner")
          console.log(this.state.playerCellClicks)
        }
      }
    }
    }

    // displayDivArr(){
    //   let random = Math.floor(Math.random()*10)
    //   const divArr = document.querySelectorAll("div.grid")
    //   if(divArr.length > 0){
    //     console.log(divArr[random].id)
    //   }
    // }

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
    {this.computerTurn()}
    </div>
  );
}
}

export default Grid;
