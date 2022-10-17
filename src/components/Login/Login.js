import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          const user = result.user;
          form.reset();
          navigate(from, { replace: true });
          //   console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="form-container">
      <h3 className="form-title">Login</h3>
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
        <div>
          <button className="form-btn">Login</button>
        </div>
        <div className="new-to">
          <p>
            If you don't ema-jhon have account? Please{" "}
            <Link to={"/resister"}>Resister</Link>
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
  );
};

export default Login;
