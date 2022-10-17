import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import { AuthContext } from "../contexts/UserContext";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        {/* <Link to="/about">About</Link> */}
        {/* {user?.uid ? (
          
        ) : (
         
        )} */}
        {user?.email && <a href="/">{user.email}</a>}
        {user?.uid ? (
          <a href="/">
            <button onClick={handleLogOut}>Sign Out</button>
          </a>
        ) : (
          <Link>
            <Link to="/resister">Resister</Link>
            <Link to="/login">Login</Link>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
