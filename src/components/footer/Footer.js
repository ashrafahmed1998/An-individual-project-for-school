import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="followUs">
        <h6>Follow Us on</h6>
        <ul className="list-socialMedia">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      <footer className="footer">
        <div className="optionContainer">
          <Link to="/" className="option">
            Home
          </Link>
          <Link to="/sign-in" className="option">
            Sign in
          </Link>
          <Link to="/cart" className="option">
            Cart(0)
          </Link>
          <Link to="/contact" className="option">
            Contact
          </Link>
          <Link to="/about" className="option">
            About
          </Link>
        </div>

        <hr />
        <span>
          <p>
            &copy; {new Date().getFullYear()} Foodie | All right researved |
            Terms of Searvice | Privacy
          </p>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
// style={{display:'flex',width:'100%',height:'10vh',background:'black'}}
