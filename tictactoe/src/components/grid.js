import React from 'react';
const winningCombinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
let counter = 0;

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
    this.firstPlayer()
  }

  firstPlayer(){
    let random = Math.floor(Math.random()*11)
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

  clickedCell(e){ //player turn
    if(this.state.currentPlayer === false){return}
    let cell = e.target
    if(cell.innerHTML === "X" || cell.innerHTML === "O"){return}
    cell.innerHTML = "X"
    this.setState({
      playerCellClicks: [...this.state.playerCellClicks, parseInt(cell.id)],
      currentPlayer: false,
      currentComputer: true
    })
    // this.isWinner()
    //this function doesnt work because the state updates an item late because it
    //doesnt immediately catch the first item
  }

  computerTurn(){
    setTimeout(() => {
    if(this.state.currentComputer === false){return}
    console.log("im the computer")
    let random = Math.floor(Math.random()*(9))
    const divArr = document.querySelectorAll("div.grid")
    if(divArr[random].innerHTML === "X" || divArr[random].innerHTML === "O"){
      this.computerTurn()
    } else {
    // divArr[random].innerHTML = "O"
    this.setState({
      computerCellClicks: [...this.state.computerCellClicks, parseInt(divArr[random].id)],
      currentComputer: false,
      currentPlayer: true
    })
    }
    }, 1000)
  }
  //used arrow function for setTimeout, otherwise it causes scoping problems and makes the program crash

  componentDidUpdate(){
    if(this.state.playerCellClicks.length === 3){
      for(let i=0;i< winningCombinations.length;i++){
        if(JSON.stringify(this.state.playerCellClicks) === JSON.stringify(winningCombinations[i])){
          setTimeout(()=>{
          alert(`WINNER!`)
          this.setState({
            currentPlayer: false,
            currentComputer: false,
            playerCellClicks: []
          })
          if(window.confirm("Do you want to play again?")){
            const divArr = document.querySelectorAll("div.grid")
            for(let i=0;i< divArr.length;i++){
              divArr[i].innerHTML = ""
            }
            this.firstPlayer()
          } else {
            this.props.reset()
          }
        }, 500)
        }
      }
    }
  }
  //finally fixed the infinite loop problem, have to clear out this.state.playcellclicks first in setstate
  //without this the conditions for the setstate continue

  render(){
  return (
    <div className="gridMainDiv">
    <div className={`p1Banner ${this.state.currentPlayer === true ? "p1BannerActive" : ""}`}>{this.state.playerScore} Player 1</div>
    <div className={`computerBanner ${this.state.currentComputer === true ? "computerBannerActive" : ""}`}>{this.state.computerScore} Computer</div>
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
    {this.computerTurn()}

    </div>
  );
}
}

export default Grid;
