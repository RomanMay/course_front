import React from "react"
import axios from "axios"
import {connect} from 'react-redux'
import {userPostFetch} from '../../../actions/register';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styles from '../auth.scss'
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            first_name:"",
            last_name:"",
            image: ""
            
          }
          this.handleSubmit = this.handleSubmit.bind(this)
          this.handleChange = this.handleChange.bind(this)
    }
    
      handleChange = event => {
          
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      handleSubmit = event => {
        //   const { email, password, first_name, last_name, image } = this.state
        //   axios.post("http://116.202.105.255:8080/user",
        //   {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Accept: 'application/json',
        //       },
        //       user:{
        //           email: email,
        //           first_name: first_name,
        //           last_name: last_name,
        //           image: image,
        //           password: password
        //       }
        //   }
        //   )
        //   .then(response =>{
        //       console.log("registration res", response)
        //       console.log("registration res", response.data)
        //     .catch(error => {
        //         console.log("registration error", error)
        //     })
        //   })
        //   console.log("form submited")
        event.preventDefault()
        this.props.userPostFetch(this.state)
      }

render(){
return(

     <form 
      className={styles.form}
      onSubmit={this.handleSubmit}
      >
        <h1>Sign Up For An Account</h1>

        <input
        className={styles.input}
          type='email'
          name='email'
          placeholder='Email'
          value={this.state.email}
          onChange={this.handleChange}
          /><br/> 
            
        <input
          type='text'
          name='first_name'
          placeholder='First Name'
          value={this.state.first_name}
          onChange={this.handleChange}
          /><br/>
        <input
          type='text'
          name='last_name'
          placeholder='Last Name'
          value={this.state.last_name}
          onChange={this.handleChange}
          /><br/>
          <input
            name='image'
            placeholder='Avatar (URL)'
            value={this.state.image}
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
        <button type="submit">create</button>
      <p class="message">Already registered? <Link to="/login">Sign In</Link></p>
      </form>

)
}
}

const mapDispatchToProps = dispatch => ({
    userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
  })

export default connect(null, mapDispatchToProps)(Register)