import React, { useContext } from 'react';
import UserContext from '../UserContext';
const Footer = () => {

  const user = useContext(UserContext)
  
  return (
    <React.Fragment>
      <div className='p-8 text-center bg-slate-500 font-bold text-white'><h2>CopyRight@{user.user.name}</h2></div>
    </React.Fragment>
  );
};
export default Footer;
