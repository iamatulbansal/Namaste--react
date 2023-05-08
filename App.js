import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="container">Heading</h1>//This is React element we can use like this (heading)
console.log(heading);
//*Functional components is a like a normal function ,this is return jsx element alway write your component name using first Capital latter
const HeadingComponent = () => {//This is a react components we can use like this <HeadingComponent/> 
    return (<div>
        <h1>Namaste React Functional components</h1>
        <h2>This is a Heading 2</h2>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
// PASSING REACT ELEMENT INSIDE YOUR ROOT 
root.render(heading); //*This is React element we can use like this (heading)
root.render(<HeadingComponent />);//*This is a react components we can use like this <HeadingComponent/> 

/* 
What is react element - 
ans-Object
What is react components -
ans-function
*/
