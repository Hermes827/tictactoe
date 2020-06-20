import React from 'react';

class Login extends React.Component {

  constructor(){
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev){
  ev.preventDefault()
  const user = {
    email: ev.target.elements["email"].value,
    password: ev.target.elements["password"].value
  }
  const newUser = JSON.stringify(user)
  this.props.loginUser(user)
}

  render(){
  return (
    <div>
    <form className="loginForm" onSubmit={this.handleSubmit}>
    <h1>Please log in</h1>
    Email: <input className="passwordInput" onChange={null} type="text" name="email"/><br/>
    Create password:<input className="passwordInput" type="password" name="password" onChange={this.capturePassword}/><br/>
    <button type="submit">login</button>
    </form>
    <button className="returnToHomepage" onClick={this.props.homepage}>Cancel</button>
    </div>
  );
}
}

export default Login
