import React from 'react';

class WelcomePage extends React.Component {

  render(){
  return (
    <div className="choosePlayers">
    <h1>Welcome to TicTacToe</h1>
    <button className="login" onClick={this.props.clickedLogin}>Log in</button>
    <button className="signup" onClick={this.props.clickedSignup}>Sign up</button>
    </div>
  );
}
}

export default WelcomePage;
