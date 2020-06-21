import React from 'react';
import Settings from './settings.js'
import ChooseXorO from './chooseXorO.js'

class UserHomePage extends React.Component {

  constructor(){
    super()

    this.state = {
      hasClickedSettings: false
    }
    this.toggleSettings = this.toggleSettings.bind(this)
  }

  // toggleSettings(){
  //   this.setState({
  //     hasClickedSettings: true
  //   })
  // }

  toggleSettings(){
    if(this.state.hasClickedSettings){
      this.setState({
      hasClickedSettings: false
    })
  } else {
    this.setState({
      hasClickedSettings: true
    })
  }
  }

  renderSettingsPanel(){
    if(this.state.hasClickedSettings === true){
      return <Settings delete={this.props.delete} toggle={this.toggleSettings}/>
    } else {
      return(
        <div>
          <h1>Welcome {this.props.user.username}</h1>
          <ChooseXorO/>
        </div>
      )
    }
  }

  render(){
  return (
    <div>
    <div className="userDash">
    <button className="userDashBTN">Highscores</button>
    <button className="userDashBTN" onClick={this.toggleSettings}>Settings</button>
    <button className="userDashBTN" onClick={this.props.logout}>Log out</button>
    </div>
    <div className="">
    {this.renderSettingsPanel()}
    </div>
    </div>
  );
}
}

export default UserHomePage
