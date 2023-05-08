import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className='container'>Heading</h1>;
//*WHEN WE PUT ONE COMPONENT INSIDE ANOTHER COMPONENT , WE CALL IT COMPONENT COMPOSITION.
const HeadingComponent = () => {
    return (
        <div>
            <Title />
            <h1>Namaste React Functional components</h1>
            <h2>This is a Heading 2</h2>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
