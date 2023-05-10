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
  const [isValid, setIsValid] = useState(loginUser());
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
          //   let render="Render"//You are not doing this
          // console.log(render)
          // console.log("Render") //We are doing this and this is a expression

          // ((a = 10), console.log(a))//this is a expression

          //   ((if(true){
          //   console.log("if")
          // }else{
          //   console.log("else")
          // }))
          //We are not doing this  but but we have a alternative of this a alter native  is a ternary operates
          //this is a (true/condition)? true:false;
          isValid ? (
            <button className='logout' onClick={() => {
              setIsValid(false)
            }}>Logout</button>
          ) : (
            <button className='login' onClick={() => {
              setIsValid(true)
            }}>Login</button>
          )
        }
      </div>
    </div>
  );
};

export default Header;
