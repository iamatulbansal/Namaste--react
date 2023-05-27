import React, { useState, useContext } from 'react';
// import { LOGO_LINK } from "../constant";
import { Link } from 'react-router-dom';
import useOnline from '../hooks/useOnline';
// import { useOnline } from 'react-power-up';
import logo from '../assets/img/logo.jpg';
import { URL_PATH } from '../constant';
import UserContext from '../UserContext';
import { useSelector } from "react-redux"
function loginUser() {
  return false;
}

//TITlE COMPONENTS
export const Title = () => {
  return (
    <React.Fragment>
      <a href="/" className="px-2 w-[120]">
        <img data-testid="logo" alt="LOGO" className="" src={logo} />
      </a>
    </React.Fragment>
  );
};

//HEADER COMPONENTS
const Header = () => {
  const isOnline = useOnline()
  const user = useContext(UserContext)
  const cartLength = useSelector(state => state.cart.items.length)

  const [isLoggedIn, setIsLoggedIn] = useState(loginUser());
  return (
    <div className="flex   bg-white dark:bg-gray-800 justify-between items-center shadow-md">
      <Title />
      <ul className="flex justify-between gap-2 font-semibold">
        <li className="bg-red-100 p-2  px-4  rounded-lg">
          <Link to="/">Home</Link>
        </li>
        <li className="bg-red-100 p-2  px-4  rounded-lg">
          <Link to={URL_PATH.ABOUT}>About</Link>
        </li>
        <li className="bg-red-100 p-2  px-4  rounded-lg">
          <Link to="/contact">Contact-us</Link>
        </li>
        <li className="bg-red-100 p-2  px-4  rounded-lg">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="bg-red-100 p-2  px-4  rounded-lg">
          <Link to="/gallery">Gallery</Link>
        </li>
        <Link to="/instamart">  <li className="bg-red-100 p-2  px-4  rounded-lg">InstaMart</li></Link>
        <Link to='/videos'><li className="bg-red-100 p-2  px-4  rounded-lg">videos</li></Link>

      </ul>
      <div className="flex justify-between items-center gap-2 px-20">
        {/* i learn Js Expression & statement */}
        <Link to='/cart'><button className='font-bold bg-red-700 text-white p-2 rounded-xl'>Cart<sup className='text-xl mx-2' data-testid="cart-0-item">{cartLength || "0"}</sup></button></Link>
        <div className='dark:text-white'>{user.user.name}</div>
        <div className='dark:text-white' data-testid="online-status">
          {isOnline ? "🟢Online" : "🔴Offline"}
        </div>
        <div>{isLoggedIn ? (
          <button
            className="bg-red-300 p-2  px-4  rounded-lg"
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-green-300 p-2  px-4  rounded-lg"
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Login
          </button>
        )}</div>

      </div>
    </div>
  );
};

export default Header;
