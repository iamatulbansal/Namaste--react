import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className='container'>Heading</h1>;

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
 * 
 * 
 *  
 * */
