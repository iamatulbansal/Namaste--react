 # Namaste-React-project
/***
 * *PARCEL-BUNDLER
 * CREATE-LIVE-SERVER
 * HMR-HOT MODULE REPLACEMENT
 * FILE WATCHER ALGORITHM
 * SETUP YOUR APP WITH BABEL PLUGIN TO (.babelrc) AUTOMATIC CLEAR CONSOLE.LOG
 * CONSISTENT HASHING ALGORITHM
 * FILE MINIFY
 * HTTPS ON DEVELOPMENT ENVIRONMENT USING NPX PARCEL INDEX.HTML --HTTPS
 * TRANSITIVE DEPENDENCIES
 * AUTOMATIC PIC-UP PORT NUMBER
 * OLDER BROWSERS VERSION SUPPORTS
 * COMPRESSION
 * IMAGE OPTIMIZATION AUTOMATICALLY
 * CACHING WHILE DEVELOPMENT
 * SUPER FAST BUILD ALGORITHM
 * ZERO CONFIG
 * TREE SHAKING - REMOVING UN-WANTED CODE
 *
 * *OTHER IMPORTANT NOTE
 * USE YOUR INDEX.HTML FILE IN THE START AND BUILD COMMAND IN YOUR STARTER SCRIPT
 * REMOVE {main:"App.js"} <<< remove this line from package.json while using parcel
 * ADD type="module" <<<ADD INSIDE YOUR SCRIPT TAG IN INDEX.HTML FILE
 *
 * *OTHER IMPORTANT NOTE
 * ^2.8.2 THIS SIGN USE FOR AUTOMATIC VERSION UPDATE
 * ~2.8.2 THIS SIGN USE FOR PATCH UPDATE
 *  2.8.2 NOT ANY SING THEN YOUR PROJECT WORKING ONLY SPECIFIC VERSION
 * PUSH YOUR PACKAGE-LOCK.JSON FILE TO YOUR GIT REPO SO WHEN WE DEPLOY YOUR APP THEN SERVER KNOW HWT VERSION DO YOU USE IN YOUR PROJECT DON'T DELETE YOUR PACKAGE-LOCK.JSON
 *
 *
 * *OTHER IMPORTANT NOTE
 * READ ABOUT REACT RECONCILIATION
 * READ ABOUT The Diffing Algorithm
 * HOW IT WORKS IN REACT>>>>React.createElement => Object =>HTML(DOM)
 *
 * CREATING BIG HTML STRUCTURE LIKE THIS BUT THIS IS NOT Relevant TO BIG APPLICATION SO WE MOVE TO WRITE YOUR CODE WITH HELP OF JSX


 * Components always write your Components using PascalCase

* In React(Native/JS) world you must name your component in PascalCase, PascalCase is a naming convention in which the first letter of each word in a compound word is capitalized. Software developers often use PascalCase when writing source code to name functions, classes, and other objects. PascalCase is similar to camelCase, except the first letter in PascalCase is always Capitalized.js


* React 2 Type of Components
* functional - i Will use this most of the time
* Class Based Components -OLD
 
 
import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="container">Heading</h1>//This is React element we can use like this (heading)
console.log(heading);
*Functional components is a like a normal function ,this is return jsx element alway write your component name using first Capital latter
const HeadingComponent = () => {//This is a react components we can use like this <HeadingComponent/>
    return (<div>
        <h1>Namaste React Functional components</h1>
        <h2>This is a Heading 2</h2>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
 PASSING REACT ELEMENT INSIDE YOUR ROOT
root.render(heading); //*This is React element we can use like this (heading)
root.render(<HeadingComponent />);//*This is a react components we can use like this <HeadingComponent/>


What is react element -
ans-Object
What is react components -
ans-function

*WHEN WE PUT ONE COMPONENT INSIDE ANOTHER COMPONENT , WE CALL IT COMPONENT COMPOSITION.



/**
 * *Day-4-classes
 * todo:When you create a project or webApp First Do proper planning and structure layout .
 * *AppLayout-planning
 * Header-
 *       - logo
 *       - nav items(right side)
 *       - cart (right side)
 * Body-
 *      -search-bar
 *      -RestaurantList
 *       -RestaurantCard
 *        -image
 *        -name
 *        -rating
 *        -cuisines
 *
 * Footer-
 *        -Link
 *        -Copyright
 *
 *
 *
 * *when we use multi element inside our components then must be wrap up inside single element JSX expressions must have one parent element
 *
 * *React.Fragment is a Component come from React core library or come from react node_modules
 *
 * Todo:---->Config Driven UI
 * *Dynamic UI
 * *Control UI using Data.config.json file
 *
 *
 * *Props  is a Properties
 * *VIRTUAL DOM
 * *RECONCILIATION ALGORITHM 
 * *REACT.FIBER-LEARN MORE THIS IS A NEW ALGORITHMS IN REACT >16 TO RECONCILIATION FASTER
 * *ALWAYS USE UNIQUE KEY IN OUR ELEMENT NOT USING INDEXES AS A KEY
 *
 * 

 
/***
 * Day-5 classes
 * *ALWAYS PUT YOUR HARD CODDED STRING AND DATA INSIDE YOUR CONFIG.JS OR CONSTANT.JS THIS IS A GOOD PRACTICE AND MANY PEOPLE USE CONSTANT.JS FILE FOR OTHER OTHER WAY LIKE TESTING AND PRODUCTION
 * *WE ARE GOING TO CREATE RESTAURANT CARD
 * *WE ARE GOING TO GET PREPARE/CREATE RESTAURANT CARD DATA
 * *CONFIG DRIVEN UI
 
 *   * NOTE NOT SENDING ALL DATA TO OTHER COMPONENTS ONLY SEND THE USABLE DATA MAKE YOUR COMPONENTS LIGHTER SO YOUR APP IS WORKING FASTER
 * IMPORT-SECTION-CODE
DEFAULT IMPORT-IT SHOULD BE A SINGLE EXPORT DEFAULT COMPONENT
 *import Header from "./components/Header";
NAME IMPORT-THIS IS NOT A OBJECT DESTRUCTURING
 *import { Header } from "./components/Header";
 ALL EXPORT COMPONENTS/FUNCTION :-SUPPOSE WE HAVE MULTIPLE COMPONENTS IN THE SAME FILE WE CAN USE/IMPORT LIKE THIS DYNAMIC IMPORT, BUT MAKE SURE YOUR ALL COMPONENTS IS NAME EXPORT IN OUR FILE THEN YOUR IMPORT LIKE THAT
 *import * as controller from "./components/Header";

import obj from "./components/Header";
const {Header}=objWHEN YOU WRITE CODE LIKE THIS SO THAT IS NOT OBJECT DESTRUCTURING IT GIVE AND ERROR

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



*FIRST APPROACH-BUT THIS IS NOT WORK PERFECT BECAUSE THIS LOGIC NEED PROPER CARD STRING WE NEED ONLY FEW WORD TO SEARCH CARD
 function searchFilter(searchTexts, restaurants) {
   const searchResult = restaurants.filter(
     (restaurant) => restaurant.data.name === "Chopstick"
   );
   console.log(searchResult);
 }
  const searchText = "XYZ";  React don't track variable like this react don't know where is variable is updated so we will use state variable to keep track and sync our local state variable in React so react perform reconciliation process
  *and React have a 1 way data binding when we change something using state then and your js file and state inside our react and react is very smart react use diff algorithm compare one dom tree to another dom tree using diff algorithm and react have a proper key each element then react check where exactly change so react reloading component then change only react knows where is value actually change so react update particular element

   *one way data bing is like we don't change directs html to js we only change js to html thats why react has one-directional data binding
  create local variable using useState
  this is react state variable come from react library
  And every React component have own lifecycle state
  We will update your state using setState function/method


   *We will update your data using onChange method to update setState function then state state provide a updated state in our state variable
            * we don't update variable like this in react this is a javascript metrology
            searchText=e.target.value

  *ALWAYS PUT EXPORT DEFAULT AND ALWAYS WRITE ONE-SEPARATE COMPONENTS IN ONE FILE THIS IS A GOOD PRACTICE


 */ 

 
