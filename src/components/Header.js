import React, { useState } from "react";
import { LOGO_LINK } from "../constant";

function loginUser() {
  return false;
}

//TITlE COMPONENTS
export const Title = () => {
  return (
    <React.Fragment>
      <a href='/' className='titleAnchorTag'>
        <img alt='LOGO' className='logo' src={LOGO_LINK} />
      </a>
    </React.Fragment>
  );
};

//HEADER COMPONENTS
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(loginUser());
  return (
    <div className='container'>
      <Title />
      <ul className='nav-items'>
        <li className='nav-list'>Home</li>
        <li className='nav-list'>About</li>
        <li className='nav-list'>Cart</li>
        <li className='nav-list'>Logout</li>
      </ul>
      <div className='user-login-items'>
        {/* i learn Js Expression & statement */}
        {
          
          isLoggedIn ? (
            <button className='logout' onClick={() => {
              setIsLoggedIn(false)
            }}>Logout</button>
          ) : (
            <button className='login' onClick={() => {
              setIsLoggedIn(true)
            }}>Login</button>
          )
        }
      </div>
    </div>
  );
};

export default Header;
