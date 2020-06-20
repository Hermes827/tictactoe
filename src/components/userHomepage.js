import React from 'react';

class UserHomePage extends React.Component {

  constructor(){
    super()

    this.state = {

    }

  }

  componentDidMount(){
    console.log("hello")
  }

  render(){
  return (
    <div>
    <h1>Welcome {this.props.user.username}</h1>
    <button onClick={this.props.logout}>Log out</button>
    </div>
  );
}
}

export default UserHomePage
