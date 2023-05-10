import React from "react";
import { LOGO_LINK } from "../constant";
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
  return (
    <div className='container'>
      <Title />
      <ul className='nav-items'>
        <li className='nav-list'>Home</li>
        <li className='nav-list'>About</li>
        <li className='nav-list'>Cart</li>
        <li className='nav-list'>Logout</li>
      </ul>
    </div>
  );
};

export default Header;
