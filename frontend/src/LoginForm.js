import React from 'react'
import './LoginForm.css'



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
      }
        }

        this.container = React.createRef()
        this.onSignIn = this.onSignIn.bind(this)
        this.onSignUp = this.onSignUp.bind(this)

    }

    handleSubmit = e => {
        e.preventDefault();
    
        if (formValid(this.state)) {
          console.log(`
            --SUBMITTING--
            Username: ${this.state.username}
            Gender: ${this.state.gender}
            DOB: ${this.state.dob}
            Email: ${this.state.email}
            Password: ${this.state.password}
            Password2: ${this.state.password2}
          `);
        } else {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
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
      };
    
    render() {

        const { formErrors } = this.state;
        
        // const clipValue = `inset(0 ${this.state.maskStyle.left}px 0 ${this.state.maskStyle.right}px)`
        
        return (
            <div className="container" id="container" ref={this.container}>
                <div className="form-container sign-up-container">
                    
                    <form onSubmit={this.handleSubmit} noValidate>
                      
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
            <select onChange={this.handleChange} defaultValue="Select Gender">
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
              <button onClick={this.onSignUp}>Register</button>
            </div>
            </form>
            </div>
                <div className="form-container sign-in-container">
                    <form>
                    <h2>Sign in</h2>
                        <div className="social-container">
                            
                        </div>
                        
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
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

export default LoginForm