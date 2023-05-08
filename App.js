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
 * how it works in react>>>>React.createElement => Object =>HTML(DOM)
 */
import React from "react";
import ReactDOM from "react-dom/client";
/***
 * * Create html like structure using React.createElement
 * <div>
      <h1>Heading1</h1>
      <ul>
        <li>list 1</li>
        <li>list 2</li>
        <li>list 2</li>
      </ul>
    </div>
 *  */

const container = React.createElement(
    "div",
    {
        id: "container",
        className: "container",
        key: "div",
    },
    [
        React.createElement(
            "h1",
            { id: "h1", className: "heading", key: "h1" },
            "Heading1"
        ),
        React.createElement(
            "ul",
            { id: "ul", className: "orders-list", key: "ul" },
            [
                React.createElement(
                    "li",
                    { id: "li1", className: "list-item", key: "li1" },
                    "task 1"
                ),
                React.createElement(
                    "li",
                    { id: "li2", className: "list-item", key: "li2" },
                    "task 2"
                ),
                React.createElement(
                    "li",
                    { id: "li3", className: "list-item", key: "li3" },
                    "task 3"
                ),
            ]
        ),
    ]
);
console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
