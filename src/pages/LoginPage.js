import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [currentForm, setCurrentForm] = useState("user-signin");

  const renderForm = () => {
    if (currentForm.includes("user")) {
      const isSignIn = currentForm === "user-signin";
      return (
        <form className="form-container">
          <h2>{isSignIn ? "User Sign In" : "User Sign Up"}</h2>
          {!isSignIn && <input type="text" placeholder="Full Name" required />}
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="form-btn">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={() => setCurrentForm(isSignIn ? "user-signup" : "user-signin")}>
            {isSignIn
              ? "Don’t have an account? "
              : "Already have an account? "}
            <span>{isSignIn ? "Sign Up" : "Sign In"}</span>
          </p>
        </form>
      );
    } else if (currentForm.includes("provider")) {
      const isSignIn = currentForm === "provider-signin";
      return (
        <form className="form-container">
          <h2>{isSignIn ? "Provider Sign In" : "Provider Sign Up"}</h2>
          {!isSignIn && <input type="text" placeholder="Full Name" required />}
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="form-btn">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={() => setCurrentForm(isSignIn ? "provider-signup" : "provider-signin")}>
            {isSignIn
              ? "Don’t have an account? "
              : "Already have an account? "}
            <span>{isSignIn ? "Sign Up" : "Sign In"}</span>
          </p>
        </form>
      );
    }
  };

  return (
    <div className="login-page">
      <div className="form-wrapper">
        <div className="form-switcher">
          <button
            className={currentForm.includes("user") ? "active" : ""}
            onClick={() => setCurrentForm("user-signin")}
          >
            Register as User
          </button>
          <button
            className={currentForm.includes("provider") ? "active" : ""}
            onClick={() => setCurrentForm("provider-signin")}
          >
            Register as Provider
          </button>
        </div>
        {renderForm()}
      </div>
    </div>
  );
};

export default LoginPage;
