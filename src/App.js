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

*Difference between One-way Binding and Two-way Binding
*ans-One way binding:
In one-way binding, the data flow is one-directional.
This means that the flow of code is from typescript file to Html file.
In order to achieve a one-way binding, we used the property binding concept in Angular.
In property binding, we encapsulate the variable in Html with square brackets( [ ] ).
We will understand this concept through an example in order to make it more comprehensible.
*Two-way binding:
In a two-way binding, the data flow is bi-directional.
This means that the flow of code is from ts file to Html file as well as from Html file to ts file.
In order to achieve a two-way binding, we will use ngModel or banana in a box syntax.
To make sure the app doesn’t break, we need to import ‘FormsModule’ from ‘@angular/forms.
Any changes to the view are propagated to the component class. Also, any changes to the properties in the component class are reflected in the view.
To bind two properties in order to two-way binding works, declare the ngModel directive and set it equal to the name of the property.
We will understand the concept through an example in order to make it more comprehensible.


one-way binding:-- learn more
https://www.telerik.com/blogs/how-to-bind-any-component-data-react-one-way-binding#:~:text=One%2Dway%20binding%3A%20this%20is,provider)%20automatically%20update%20the%20other.



*/
