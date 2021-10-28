import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { Link, Redirect } from 'react-router-dom';
import axios from "axios";
import { useHistory } from "react-router";
import './LoginForm.css'
import authSlice from "../store/slices/auth";
import {withRouter} from "react-router-dom"

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
      username: null,
      gender: null,
      dob: null,
      email: null,
      password: null,
      password2: null,
      formErrors: {
        username: "",
        gender:"",
        dob:"",
        email: "",
        password: "",
        password2: ""
      },
      message : "",
      loading : false

      }

        this.container = React.createRef()
        this.onSignIn = this.onSignIn.bind(this)
        this.onSignUp = this.onSignUp.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange = (e) => {
        const name = e.target.name;
        this.setState({ name: e.target.value});
    }




    handleLogin = (username, password) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        username = this.state.username
        password = this.state.password
        const body = JSON.stringify({ username, password });

        axios
          .post(`${process.env.REACT_APP_API_URL}/auth/login/`, body, config)
          .then((res) => {
                authSlice.actions.setAuthTokens({
                token: res.data.access,
                refreshToken: res.data.refresh,
              });
            ;
            authSlice.actions.setAccount(res.data.user);
            this.setState({ loading: false });
            this.props.history.push("/home");
          })
          .catch((err) => {
            this.setState({ message: err.toString() });
          });
    };

    handleSubmitLogin = e => {
        e.preventDefault();
        this.setState({ loading: true });
        this.handleLogin(this.state.username, this.state.password);
     };

     handleSubmitRegister = e => {
        e.preventDefault();
        this.setState({ loading: true });
        this.handleRegister();
     };

    handleRegister = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const username = this.state.username
        const password = this.state.password
        const gender = this.state.gender
        const dob = this.state.dob
        const email = this.state.email
        const body = JSON.stringify({ username, password, gender, dob, email });

        axios
          .post(`${process.env.REACT_APP_API_URL}/auth/register/`, body, config)
          .then((res) => {
                authSlice.actions.setAuthTokens({
                token: res.data.token,
                refreshToken: res.data.refresh,
              });
            ;
            authSlice.actions.setAccount(res.data.user);
            this.setState({ loading: false });
            this.onSignIn();
          })
          .catch((err) => {
            this.setState({ message: err.toString() });
          });
    };


    componentWillUnmount() {
        clearInterval(this.interval);

    }

    onSignUp() {
        this.container.current.classList.add("right-panel-active");
    }
    onSignIn() {
        debugger
        this.container.current.classList.remove("right-panel-active");
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        String = formErrors.password;

        switch (name) {
          case "username":
            formErrors.username =
              value.length < 3 ? "minimum 3 characters required" : "";
            break;
          case "gender":
            this.setState({
              gender: e.target.value
            })
          case "dob":
              this.setState({
                dob: e.target.value
              })
          case "email":
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;
          case "password":
            formErrors.password =
              value.length < 6 ? "minimum 6 characters required" : "";
            break;
          case "password2":
              formErrors.password2 =
              value.length < 6 ? "Passwords do not match" : "" ;
              break;
          
          default:
            break;
        }
          
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
        this.setState({ name: value});
      };
    
    render() {

        const { formErrors } = this.state;
        
        // const clipValue = `inset(0 ${this.state.maskStyle.left}px 0 ${this.state.maskStyle.right}px)`
        
        return (
            <div className="container" id="container" ref={this.container}>
                <div className="form-container sign-up-container">
                    
                    <form onSubmit={this.handleSubmitRegister} noValidate>
                      
                      <h2>Sign-Up</h2>
                     
            <div className="username">
              {/* <label htmlFor="firstName">First Name</label> */}
              <input
                className={formErrors.username.length > 0 ? "error" : null}
                placeholder="Username"
                type="text"
                name="username"
                //ref={register({ required: "required" })}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.username.length > 0 && (
                <span className="errorMessage">{formErrors.username}</span>
              )}
            </div>
            <div className="gender">
            <select name="gender" onChange={this.handleChange} defaultValue="Select Gender">
                        <option defaultValue>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
              {/* <input
              placeholder="Gender"
              type="text"
              name="gender"
              
              /> */}
              
              </div>
              <div className="dob">
              {/* <label htmlFor="email">Email</label> */}
              <input
                className={formErrors.dob.length > 0 ? "error" : null}
                placeholder="Date of Birth"
                type="date"
                name="dob"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.dob.length > 0 && (
                <span className="errorMessage">{formErrors.dob}</span>
              )}
            </div>
            <div className="email">
              {/* <label htmlFor="email">Email</label> */}
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              {/* <label htmlFor="password">Password</label> */}
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="password2">
              {/* <label htmlFor="password">Password</label> */}
              <input
                className={formErrors.password2.length > 0 ? "error" : null}
                placeholder="Confirm Password"
                type="password"
                name="password2"
                value={this.state.password2}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password2.length > 0 && (
                <span className="errorMessage">{formErrors.password2}</span>
              )}
              <button disabled={this.state.loading}>Register</button>
            </div>
            </form>
            </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={this.handleSubmitLogin}>
                    <h2>Sign in</h2>
                        <div className="social-container">
                            
                        </div>
                        
                        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={(e) => {this.handleChange(e)}}/>
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={(e) => {this.handleChange(e)}}/>
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={this.onSignIn}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={this.onSignUp}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        )  
        
    }
}
export default withRouter(LoginForm);