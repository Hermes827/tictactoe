import React from 'react';

class Signup extends React.Component {

  constructor(){
    super()

    this.state = {
      text: ""
    }
    this.captureText = this.captureText.bind(this)
  }

  captureText(e){
    this.setState({
      text: e.target.value
    })
    console.log(this.state.text)
  }

  submitText(e){
    e.preventDefault()
    console.log(this)
  }

  render(){
  return (
    <div>
    <form className="loginForm" onSubmit={null}>
    <h1>Sign up</h1>
    Create username:<input className="usernameInput" onChange={this.captureText}/><br/>
    Create password:<input className="passwordInput" onChange={this.captureText}/><br/>
    Email: <input className="passwordInput" onChange={this.captureText}/><br/>
    <button type="submit">Submit</button>
    </form>
    <button className="returnToHomepage" onClick={this.props.homepage}>Return to Homepage</button>
    </div>
  );
}
}

export default Signup
