import React from 'react';

class Login extends React.Component {

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
    <h1>Please log in</h1>
    Username:<input className="usernameInput" onChange={this.captureText}/><br/>
    Password:<input className="passwordInput" onChange={this.captureText}/>
    </form>
    </div>
  );
}
}

export default Login

//using &nbsp: in the component itself looks kind of shitty or at least messy
//Just use CSS to style these elements it looks much cleaner and is much cleaner
