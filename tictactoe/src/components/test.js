
  createNewUser(user){
    fetch(USER_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({user})
    })
    .then(res => res.json())
    .then(data => {
      // this.setActiveUser(data)
      // this.props.history.push('/center_console')
      // console.log(data.jwt)
    })
  }
