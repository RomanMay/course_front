
export const userPostFetch = user => {
    return dispatch => {
      return fetch("http://116.202.105.255:8080/user", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
         
            localStorage.setItem("token", data.jwt)
            console.log(localStorage.getItem ("token"))
            dispatch(loginUser(data.user))
          
        })
        // .catch(err=>{
        //                 console.log(data)

        // })
    }
  }
  
  const loginUser = userObj => ({
      type: 'LOGIN_USER',
      payload: userObj
  })