import React from 'react';

class ChoosePlayers extends React.Component {



  render(){
  return (
    <div className="choosePlayers">
    <h1>How do you want to play?</h1>
    <div className="playerDivs">
    <div className="onePdiv"><h1 className="onePlayer" onClick={this.props.choose}>One Player</h1></div>
    <div className="twoPdiv"><h1 className="twoPlayers" onClick={this.props.choose}>Two Players</h1></div>
    </div>
    </div>
  );
}
}

export default ChoosePlayers;
