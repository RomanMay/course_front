import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import configureStore from "./configureStore";
import App from "./App";
import Login from "./component/auth/Login/Login"
import Register from "./component/auth/Register/Register"
import { fetchAllLists } from "./actions";
import NavLink from "./component/Nav/NavLink"
import axios from "axios"

const store = configureStore();

store.dispatch(fetchAllLists());
class Root extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
      

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    this.checkLoginStatus = this.checkLoginStatus.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
checkLoginStatus(){
  const token = localStorage.getItem("token")

axios.get("http://116.202.105.255:8080/user", {
  "headers": {
    "Authorization": `Bearer ${token}`
  }

}).then(response=>{
  console.log("logged in?", response.data)
  // if(response.data.)
}).catch(error => {
  console.log("login error", error)
})
}
componentDidMount(){
  this.checkLoginStatus()
}
handleSuccessfulAuth(data){
  this.handleLogin(data)
this.props.history.push("/")
}
handleLogin(data){
  this.setState({
    loggedInStatus: "LOGGED_IN",
    user: data.user
  })
}

render(){
  return(
<Provider store={store}>
    <Router>
      <div>
        <NavLink checkLoginStatus={this.checkLoginStatus}/>
          <Switch>
           
          
            <Route exact path="/" render={props =>(
              <App {...props} loggedInStatus={this.state.loggedInStatus}/>
            )} />
           <div><Route path="/login" component={Login}/>
          <Route path="/register" render = {() => <Register handleSuccessfulAuth={this.handleSuccessfulAuth} />}/>
          </div>
          }
        
      </Switch>
      </div>
      
    </Router>
  </Provider>
  )
}
}
export default Root;
