import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styles from "./nav.scss"

export default function NavLink() {
    return (
        <div>
          <nav className={styles.nav}>
            <ul className={styles.ul}> 
              <li className={styles.li}>
                <Link className={styles.links} to="/">Lists</Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.links} to="/login">Login</Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.links} to="/register">Register</Link>
              </li>
            </ul>
          </nav >
        </div>
    )
}
