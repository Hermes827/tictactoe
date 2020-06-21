import React from 'react';

class Settings extends React.Component {

  constructor(){
    super()

  }

  confirmDelete(){
    // this.props.delete
    console.log("are you sure you wnat to delete your account?")
  }

  render(){
  return (
    <div>
    <h1>hi</h1>
    <button onClick={this.props.delete}>Delete Account</button>
    settings
    </div>
  );
}
}

export default Settings
