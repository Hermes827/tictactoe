import React from 'react';

class Login extends React.Component {

  constructor(){
    super()

    this.state = {
      email: "",
      password: ""
    }
    this.captureEmail = this.captureEmail.bind(this)
    this.capturePassword = this.capturePassword.bind(this)
    this.login = this.login.bind(this)
  }

  captureEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  capturePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  login(e){
    e.preventDefault()
    console.log("hello")
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
        // 'Accept': 'application/json',
        // 'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }

  // captureText(e){
  //   this.setState({
  //     text: e.target.value
  //   })
  //   console.log(this.state.text)
  // }

  // submitText(e){
  //   e.preventDefault()
  //   console.log(this)
  // }

  render(){
  return (
    <div>
    <form className="loginForm" onSubmit={this.login}>
    <h1>Please log in</h1>
    Email: <input className="passwordInput" onChange={this.captureEmail} type="text" name="email"/><br/>
    Create password:<input className="passwordInput" type="password" name="password" onChange={this.capturePassword}/><br/>
    <button type="submit">login</button>
    </form>
    <button className="returnToHomepage" onClick={this.props.homepage}>Return to Homepage</button>
    </div>
  );
}
}

export default Login

//using &nbsp: in the component itself looks kind of shitty or at least messy
//Just use CSS to style these elements it looks much cleaner and is much cleaner
