// import { auth } from 'firebase';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/button/CustomButton";
import InputHandler from "../../components/input-handler/InputHandler";
import { auth, createUserProfileDocument } from "../../firebase/config";

export class Signup extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
    };
  }

  onChangeHaandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    const { displayName, email, password } = this.state;
    try {
      const { user } = auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { displayName, email, password } = this.state;

    return (
      <div className="container mt-4" style={{ backgroundColor: "" }}>
        <div className="row">
          {/* form-content */}
          <div className="col-lg-6">
            <div className="card mt-5">
              <div className="card-body">
                <form onSubmit={this.submitHandler}>
                  <InputHandler
                    type="text"
                    lebel="UserName"
                    name="displayName"
                    value={displayName}
                    onChange={this.onChangeHaandler}
                  />
                  <InputHandler
                    type="email"
                    lebel="Email"
                    name="email"
                    value={email}
                    onChange={this.onChangeHaandler}
                  />
                  <InputHandler
                    type="password"
                    lebel="Password"
                    name="password"
                    value={password}
                    onChange={this.onChangeHaandler}
                  />

                  <CustomButton type="submit">Create Account</CustomButton>
                  <Link to="/sign-in">sign in here</Link>
                </form>
              </div>
            </div>
          </div>
          {/* logo */}
          <div className="col-lg-6">
            <div className="card" style={{ height: "400px" }}>
              <div className="card-body" style={{ backgroundColor: "Green" }}>
                <div className="welcome" st>
                  {" "}
                  <h1> Welcome to </h1>
                </div>
                <div className="logoContainer">
                  <h1>Foodie</h1>
                </div>
                <div className="quotes">
                  <h7>Eat healthy, Live healthy</h7>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
