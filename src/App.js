import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { BrowserRouter as Router, Route, Switch,  Link } from "react-router-dom"


import ListContainer from "./container/List";
import QuickEditor from "./container/QuickEditor";
import Login from "./component/auth/Login/Login"
import Register from "./component/auth/Register/Register"
import Board from "./component/Board/Board"

import styles from "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
         <div className={styles.app}>
          <ListContainer />
        </div>
        <QuickEditor /> 
</div>

     
    )
  }
}

export default DragDropContext(HTML5Backend)(App);
