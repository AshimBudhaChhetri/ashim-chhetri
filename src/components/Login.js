import React from "react";
import "./Login.css";
import logoimage from "./logo.png";
import backgroundimg from "./background.jpg";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="center-part">
        <div className="l-part">
          <img src={logoimage} alt="Logo" className="logo" />
          <div className="welcome-text">
            <h2>Welcome to RISU CARE</h2>
            <p>
              RSU Care empowers people with disabilities to exercise influence,
              acheive goals, and be active community members.
            </p>
          </div>
          <form className="login-form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <span>Forgot Password?</span>
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="bottom-part">
            <h6>or</h6>

            <div className="social-login">
              <button> Sign up with Google</button>
            </div>
            <p className="register-link">
              Don't have an account? Register here
            </p>
          </div>
        </div>
        <div className="r-part">
          <img src={backgroundimg} alt="Background" />
        </div>
      </div>
    </div>
  );
};

export default Login;
