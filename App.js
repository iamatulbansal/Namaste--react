import React from "react";
import ReactDOM from 'react-dom/client';

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