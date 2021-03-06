import { combineReducers } from "redux";

const initialState = {
    currentUser: {}
  }
  
  const Register = (state = initialState, action) => {
      switch (action.type) {
        case 'LOGIN_USER':
          return {...state, currentUser: action.payload}
        default:
          return state;
      }
    }
    export default combineReducers({ Register });