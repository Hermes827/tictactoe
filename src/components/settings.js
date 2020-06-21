import React from 'react';
import DeleteAccount from './deleteAccount.js'

class Settings extends React.Component {

  constructor(){
    super()

    this.state = {
      hasClicked: false
    }

    this.confirmDelete = this.confirmDelete.bind(this)
    // this.renderDeletePage = this.renderDeletePage.bind(this)
  }

  confirmDelete(){
    if(this.state.hasClicked){
      this.setState({hasClicked:false})
    } else {
      this.setState({hasClicked:true})
    }
  }

  renderDeletePage(){
    if(this.state.hasClicked === true){
      return <DeleteAccount toggle={this.confirmDelete} delete={this.props.delete}/>
    } else {
      return(
        <div>
        <button onClick={this.confirmDelete}>Delete Account</button>
        <button onClick={this.props.toggle}>return to user page</button>
        </div>
      )
    }
  }

  render(){
  return (
    <div>
    <h1>settings</h1>
    {this.renderDeletePage()}
    </div>
  );
}
}

export default Settings
