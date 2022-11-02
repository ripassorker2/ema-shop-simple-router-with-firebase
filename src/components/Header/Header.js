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
        {user?.email && <Link href="/">{user.email}</Link>}
        {user?.uid ? (
          <Link to={'/'}>
            <button onClick={handleLogOut}>Sign Out</button>
          </Link>
        ) : (
          <>
            <Link to="/resister">Resister</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
