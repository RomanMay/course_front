import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styles from "./nav.scss"

export default class NavLink extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <nav className={styles.nav}>
          <ul className={styles.ul}>  
              <li className={styles.li}>
                <Link className={styles.links} to="/">Lists</Link>
              </li>
             <div><li className={styles.li}>
                <Link className={styles.links} to="/login">Login</Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.links} to="/register">Register</Link>
              </li>
              </div>
          </ul>
        </nav>
      </div>
  )
  }
    
}
