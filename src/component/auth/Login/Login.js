import React from "react"
import axios from "axios"
import styles from '../auth.scss'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    handleSubmit(event){
        const {email, password} = this.state

        axios
            .post(
                "http://116.202.105.255:8080/user/login",
                {
                    user: {
                        email: email,
                        password: password
                    },
                    
                },
                {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
                  }
        )
        .then(response => {
            console.log("res login", response)
        })
        .catch(error => {
            console.log("login error", error)
        })
        event.preventDefault()

    }
    render(){
        return(
            <div>
           <form 
           className={styles.form}
           onSubmit={this.handleSubmit}>
               <h1>Sign In For An Account</h1>
                <input
                type='email'
                name='email'
                placeholder='Email'
                value={this.state.email}
                onChange={this.handleChange}
                /><br/> 

                <input
                type='password'
                name='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleChange}
                required
                /><br/>
                <button type="submit">login</button>
      <p class="message">Not registered <Link to="/register">Sign Up</Link> </p>
           </form>
        </div>
        )
       
    }
}

export default Login