// import { auth } from "firebase";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../../firebase/config";
import "./header.scss";
const Header = ({ currentUser, handleProductSearch }) => {
  const { pathname } = useLocation();

  return (
    <div className="headerContainer">
      {pathname === "/sign-in" ||
      pathname === "/sign-up" ||
      pathname === "/cart" ? null : (
        <div className="searchContainer">
          <input
            type="search"
            placeholder="searh here"
            style={{
              height: "30px",
              width: "350px",
              borderRadius: "50px",
              padding: "10px",
            }}
            onChange={handleProductSearch}
          />
          <i
            className="fas fa-search"
            style={{ color: "white" }}
            style={{ marginLeft: "-20px" }}
          />
        </div>
      )}

      <div className="logoContainer" style={{ flexDirection: "column" }}>
        <h1>Foodie</h1>
        <h7 style={{ marginLeft: "50px" }}>Eat healthy, Live healthy</h7>
      </div>

      <div className="optionContainer">
        <div className="option-top">
          <Link to="/cart" className="option-top-option">
            CART(0)
          </Link>
          {/* <Link to='/cart' className="option-top-option">Create account</Link> */}
        </div>
        <div className="option-bottom">
          {currentUser ? (
            <div
              className="option-bottom-option"
              onClick={() => auth.signOut()}
            >
              SignOut
            </div>
          ) : (
            <Link to="/sign-in" className="option-bottom-option">
              Sign in
            </Link>
          )}

          <Link to="/" className="option-bottom-option">
            Home
          </Link>
          <Link to="/sign-up" className="option-bottom-option">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
