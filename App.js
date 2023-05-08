import React from "react";
import ReactDOM from 'react-dom/client';



/*** 
 * *PARCEL-BUNDLER
 * CREATE-LIVE-SERVER
 * HMR-HOT MODULE REPLACEMENT
 * FILE WATCHER ALGORITHM
 * AUTOMATIC CLEAR CONSOLE.LOG
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
  */

const heading1 = React.createElement(
    "h1",
    { id: "content1", className: "heading" },
    "Heading1"
);
const heading2 = React.createElement(
    "h1",
    { id: "content2", className: "heading" },
    "Heading2"
);
// *this is take three argument first is html tag second is props=attribute and third is children element
const container = React.createElement(
    "div",
    {
        id: "container",
        className: "container",
    },
    [heading1, heading2]
    //*wrap all heading inside a container div pass all element inside container tag
);
//   console.log(heading);
// * Heading is not a html tag it is a plain javascript Object in react
const root = ReactDOM.createRoot(document.getElementById("root"));
//   console.log(root);
// * Passing a react element inside the root
root.render(container);