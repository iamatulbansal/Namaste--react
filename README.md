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


 */ 

 
