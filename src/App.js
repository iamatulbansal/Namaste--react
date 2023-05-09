import React from "react";
import ReactDOM from "react-dom/client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

/***
 * Day-5 classes
 * *ALWAYS PUT YOUR HARD CODDED STRING AND DATA INSIDE YOUR CONFIG.JS OR CONSTANT.JS THIS IS A GOOD PRACTICE AND MANY PEOPLE USE CONSTANT.JS FILE FOR OTHER OTHER WAY LIKE TESTING AND PRODUCTION
 * *WE ARE GOING TO CREATE RESTAURANT CARD
 * *WE ARE GOING TO GET PREPARE/CREATE RESTAURANT CARD DATA
 * *CONFIG DRIVEN UI
 
 *   //* NOTE NOT SENDING ALL DATA TO OTHER COMPONENTS ONLY SEND THE USABLE DATA MAKE YOUR COMPONENTS LIGHTER SO YOUR APP IS WORKING FASTER
 * /////////////////////////////IMPORT-SECTION-CODE////////////////////////////////////////////////
//DEFAULT IMPORT-IT SHOULD BE A SINGLE EXPORT DEFAULT COMPONENT
// *import Header from "./components/Header";
//NAME IMPORT-THIS IS NOT A OBJECT DESTRUCTURING
// *import { Header } from "./components/Header";
// ALL EXPORT COMPONENTS/FUNCTION :-SUPPOSE WE HAVE MULTIPLE COMPONENTS IN THE SAME FILE WE CAN USE/IMPORT LIKE THIS DYNAMIC IMPORT, BUT MAKE SURE YOUR ALL COMPONENTS IS NAME EXPORT IN OUR FILE THEN YOUR IMPORT LIKE THAT
// *import * as controller from "./components/Header";
/* 
import obj from "./components/Header";
const {Header}=obj//WHEN YOU WRITE CODE LIKE THIS SO THAT IS NOT OBJECT DESTRUCTURING IT GIVE AND ERROR

*ERROR IS:-caught TypeError: Cannot destructure property 'Header' of '(0 , _headerDefault.default)' as it is undefined.


/////////////////////////////////////////////////////////////////////////////

*/
