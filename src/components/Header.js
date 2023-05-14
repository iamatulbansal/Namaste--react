import React, { useState } from 'react';
// import { LOGO_LINK } from "../constant";
import { Link } from 'react-router-dom';
import useOnline from '../hooks/useOnline';
import logo from '../assets/img/logo.jpg';
function loginUser() {
  return false;
}

//TITlE COMPONENTS
export const Title = () => {
  return (
    <React.Fragment>
      <a href="/" className="titleAnchorTag">
        <img alt="LOGO" className="logo" src={logo} />
      </a>
    </React.Fragment>
  );
};

//HEADER COMPONENTS
const Header = () => {
  const isOnline = useOnline()
  const [isLoggedIn, setIsLoggedIn] = useState(loginUser());
  return (
    <div className="container">
      <Title />
      <ul className="nav-items">
        <li className="nav-list">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-list">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-list">
          <Link to="/contact">Contact-us</Link>
        </li>
        <li className="nav-list">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="nav-list">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="nav-list">Cart</li>
      </ul>
      <div className="user-login-items">
        {/* i learn Js Expression & statement */}
        {isOnline ? "🔴Offline" : "🟢Online"}
        {isLoggedIn ? (
          <button
            className="logout"
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="login"
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
