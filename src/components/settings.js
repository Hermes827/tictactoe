import React from 'react';

class Settings extends React.Component {

  constructor(){
    super()

  }

  render(){
  return (
    <div>
    <h1>hi</h1>
    <button onClick={this.props.delete}>Delete Account?</button>
    settings
    </div>
  );
}
}

export default Settings
