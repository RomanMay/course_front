import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import configureStore from "./configureStore";
import App from "./App";
import Login from "./component/auth/Login/Login"
import Register from "./component/auth/Register/Register"
import { fetchAllLists } from "./actions";
import NavLink from "./component/Nav/NavLink"

const store = configureStore();

store.dispatch(fetchAllLists());

const Root = () => (
  <Provider store={store}>
    <Router>
      <div>
        <NavLink/>
          <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </Switch>
      </div>
      
    </Router>
  </Provider>
);

export default Root;
