import React from 'react';

class DeleteAccount extends React.Component {

  constructor(){
    super()

  }



  render(){
  return (
    <div>
    <h1>Are you sure you want to delete your account?</h1>
    <button onClick={this.props.delete}>yes</button>
    <button onClick={this.props.toggle}>no</button>
    </div>
  );
}
}

export default DeleteAccount
