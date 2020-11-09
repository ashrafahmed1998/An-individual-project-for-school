import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import CustomButton from "../../components/button/CustomButton";
import InputHandler from "../../components/input-handler/InputHandler";
import firebase from "../../firebase/config";
import { auth, signInWithGoogle } from "../../firebase/config";

const Signin = ({ history }) => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState({});
  const [password, setPassword] = React.useState("");
  const [isLogin, setIsLogin] = useState(false);

  const submitHandler = (e) => {
    // console.log(email);
    e.preventDefault();
    try {
      auth.signInWithEmailAndPassword(email, password);
      setEmail(email);
      setPassword(password);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCustomLogin = (event) => {
    event.preventDefault();
    if (email !== "" && password !== "") {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          console.log("Auth Done");

          setIsLogin(true);
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("Auth Error");
          alert("Wrong Pass");
          // ...
        });
    }
  };

  // Setting that the Authentication provider is google
  const provider = new firebase.auth.GoogleAuthProvider();

  const loginWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        alert(result.user.displayName);
        setIsLogin(true);
        localStorage.setItem("uid", result.user.uid);

        // ...
      })
      .catch(function (error) {
        console.log("Authentication Error");
      });
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div className="card" style={{ width: "500px", height: "400px" }}>
        <div className="card-header text-center">
          <h1>User Sign in</h1>
        </div>
        <div className="card-body">
          <form onSubmit={submitHandler}>
            <InputHandler
              name="email"
              lebel="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputHandler
              name="password"
              lebel="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="form-group">
              <div className="row">
                <div className="col-lg-6">
                  <CustomButton onClick={handleCustomLogin}>Login</CustomButton>
                </div>
                <div className="col-lg-6">
                  <CustomButton
                    googleSignIn
                    onClick={(event) => {
                      event.preventDefault();
                      loginWithGoogle();
                    }}
                  >
                    Sign In with Google
                  </CustomButton>
                </div>
              </div>
              <Link to="/sign-up">
                don't have an account{" "}
                <span style={{ color: "red" }}>signup here</span>
              </Link>
            </div>

            {/* <CustomButton onClick={}>
              Sign In with Google
            </CustomButton> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
