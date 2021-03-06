import React from 'react';

class Signup extends React.Component {

  constructor(){
    super()

    this.state = {
      email: "",
      username: "",
      password: ""
    }
    this.captureEmail = this.captureEmail.bind(this)
    this.capturePassword = this.capturePassword.bind(this)
    this.createUser = this.createUser.bind(this)
    this.createUsername = this.createUsername.bind(this)
  }

  captureEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  createUsername(e){
    this.setState({
      username: e.target.value
    })
  }

  capturePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  createUser(e){
    e.preventDefault()
    fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        // "content-type": "application/json"
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.props.homepage()
    })
  }

  render(){
  return (
    <div>
    <form className="loginForm" onSubmit={this.createUser}>
    <h1>Sign up</h1>
    Email: <input className="passwordInput" onChange={this.captureEmail} type="text" name="email"/><br/>
    Create Username:<input className="passwordInput" type="text" name="username" onChange={this.createUsername}/><br/>
    Create password:<input className="passwordInput" type="password" name="password" onChange={this.capturePassword}/><br/>
    <button type="submit">Submit</button>
    </form>
    <button className="returnToHomepage" onClick={this.props.homepage}>Cancel</button>
    </div>
  );
}
}

export default Signup

// Create username:<input className="usernameInput" type="text" onChange={this.captureText}/><br/>
