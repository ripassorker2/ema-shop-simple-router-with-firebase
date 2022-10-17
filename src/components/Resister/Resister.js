import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import "./Resister.css";
const Resister = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;

    if (password.length < 6) {
      setError("Your password should be more than 6 caractrers !!");
    }

    if (password !== confirmPassword) {
      return setError("Your password did;n match !!");
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        // console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="form-container">
        <h3 className="form-title">Resister</h3>
        <form onSubmit={handleSubmit}>
          <div className="from-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required placeholder="email" />
          </div>
          <div className="from-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="password"
            />
          </div>
          <div className="from-control">
            <label htmlFor="confirm">Confirm password</label>
            <input
              type="password"
              name="confirm"
              required
              placeholder="confirm password"
            />
          </div>
          <div>
            <button className="form-btn">Resister</button>
          </div>
          <div className="new-to">
            <p>
              If you have an account? Please <Link to={"/login"}>Login</Link>
            </p>
            <p className="error">{error}</p>
          </div>
          <div className="google-login">
            <button onClick={handleGoogleSignIn} type="submit">
              Continue with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Resister;
