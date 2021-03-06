import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChoosePlayers from './components/choosePlayers.js'
import ChooseXorO from './components/chooseXorO.js'
import Grid from './components/grid.js'
import Login from './components/login.js'
import Signup from './components/signup.js'
import WelcomePage from './components/welcomePage.js'
import UserHomePage from './components/userHomepage.js'

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      hasChosenMode: false,
      hasChosenXorO: false,
      toggleGrid: false,
      setX: false,
      setO: false,
      clickedLogin: false,
      clickedSignup: false,
      currentUser: {},
      atWelcomePage: true
    }
    this.chooseNumberOfPlayers = this.chooseNumberOfPlayers.bind(this)
    this.chooseXorO = this.chooseXorO.bind(this)
    this.resetAll = this.resetAll.bind(this)
    this.chooseX = this.chooseX.bind(this)
    this.chooseO = this.chooseO.bind(this)
    this.clickedLogin = this.clickedLogin.bind(this)
    this.clickedSignup = this.clickedSignup.bind(this)
    this.returnToHomepage = this.returnToHomepage.bind(this)
    this.loginUser = this.loginUser.bind(this)
    this.setCurrentUser = this.setCurrentUser.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    // this.renderWelcomePage = this.renderWelcomePage.bind(this)
  }


  // loginUser(user){
  //   fetch("http://localhost:3001/login", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       email: user.email,
  //       password: user.password
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setCurrentUser(data)
  //   })
  // }

  // setCurrentUser(data){
  //   this.setState({
  //     currentUser: data.user
  //   })
  //   if(data.jwt){localStorage.token = data.jwt}
  //   console.log(localStorage.token)
  // }

  // renderChoosePlayers(){
  //   if(this.state.hasChosenMode === false){
  //     return <ChoosePlayers choose={this.chooseNumberOfPlayers}/>
  //   }
  // }

  chooseNumberOfPlayers(){
    this.setState({
      hasChosenMode: true,
      hasChosenXorO: true
    })
  }

  renderChooseXorO(){
    if(this.state.hasChosenXorO === true){
      return <ChooseXorO choose={this.chooseXorO} chooseX={this.chooseX} chooseO={this.chooseO}/>
    }
  }

  chooseXorO(){
    this.setState({
      hasChosenXorO: false,
      toggleGrid: true
    })
  }

  chooseX(){
    console.log("hello x")
    this.setState({
      hasChosenXorO: false,
      toggleGrid: true,
      setX: true
    })
  }

  chooseO(){
    console.log("hello o")
    this.setState({
      hasChosenXorO: false,
      toggleGrid: true,
      setO: true
    })
  }


  renderGrid(){
    if(this.state.toggleGrid === true){
      return <Grid reset={this.resetAll} setX={this.state.setX} setO={this.state.setO}/>
    }
  }

  resetAll(){
    console.log("hello")
    this.setState({
      toggleGrid: false,
      hasChosenMode: false
    })
  }

  // login(){
  //   this.setState({
  //     clickedLogin: true,
  //     hasChosenMode: true
  //   })
  // }

  // renderLogin(){
  //   if(this.state.clickedLogin === true){
  //     return(
  //       <Login homepage={this.returnToHomepage}
  //              loginUser={this.loginUser}
  //         />
  //     )
  //   }
  // }

  // signup(){
  //   this.setState({
  //     clickedSignup: true,
  //     hasChosenMode: true
  //   })
  // }

  // renderSignup(){
  //   if(this.state.clickedSignup === true){
  //     return(
  //       <Signup homepage={this.returnToHomepage}/>
  //     )
  //   }
  // }

  // returnToHomepage(){
  //   this.setState({
  //     clickedLogin: false,
  //     clickedSignup: false,
  //     hasChosenMode: false
  //   })
  // }

  ///////////////////////New stuff////////////////////////////
  renderWelcomePage(){
    if(this.state.atWelcomePage === true){return <WelcomePage
                                                  clickedLogin={this.clickedLogin}
                                                  clickedSignup={this.clickedSignup}
                                                  />}
  }

  clickedLogin(){
    console.log("hello")
    this.setState({
      clickedLogin: true,
      atWelcomePage: false
      // hasChosenMode: true
    })
  }

  renderLoginPage(){
    if(this.state.clickedLogin === true){
      return(
        <Login homepage={this.returnToHomepage}
               loginUser={this.loginUser}

          />
      )
    }
  }

  loginUser(user){
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.error){
        alert("wrong login information")
      } else {
      this.setCurrentUser(data)
    }
    })
  }

  logoutUser(){
    this.setState({
    currentUser: {}
  })
  delete localStorage.token
  this.returnToHomepage()
  }

  setCurrentUser(data){
    this.setState({
      currentUser: data.user
    })
    if(data.jwt){localStorage.token = data.jwt}
  }

  renderUserPage(){
    if(this.state.currentUser.username){
      return <UserHomePage

              user={this.state.currentUser}
              logout={this.logoutUser}
              delete={()=>this.deleteUser(this.state.currentUser)}
              />
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.clickedLogin === true){
      this.setState({
        clickedLogin: false
      })
    }
  }
  //have to have both "prevProps, prevState" in the args otherwise if you just have one
  //then it just gives an empty object

  clickedSignup(){
    this.setState({
      clickedSignup: true,
      atWelcomePage: false
      // hasChosenMode: true
    })
  }

  renderSignupPage(){
    if(this.state.clickedSignup === true){
      return(
        <Signup homepage={this.returnToHomepage}/>
      )
    }
  }

  returnToHomepage(){
    this.setState({
      clickedLogin: false,
      clickedSignup: false,
      atWelcomePage: true
    })
  }

  deleteUser(user){
    fetch("http://localhost:3001/users" + `/${user.id}`, {
      method: "DELETE",
      headers: {
        'Authorization': "Bearer " + localStorage.token
      }
    })
    .then(()=> this.logoutUser())
   }

  /////////////////////////////////////////////////////////////

  render(){
  return (
    <div className="App">
    <div className="mainDiv">
    <div className="innerDiv">
    {this.renderWelcomePage()}
    {this.renderLoginPage()}
    {this.renderSignupPage()}
    {this.renderUserPage()}
    </div>
    </div>
    </div>
  );
}
}

export default App;

//////////////////temporary///////////////////////

// {this.renderChoosePlayers()}
// {this.renderChooseXorO()}
// {this.renderLogin()}
// {this.renderSignup()}
// {this.renderGrid()}
