import React from "react";
import ReactDOM from "react-dom/client";
import restaurantList from "../db/restaurant-list.json";

/////////////////////////////IMPORT-SECTION-CODE////////////////////////////////////////////////
//DEFAULT IMPORT-IT SHOULD BE A SINGLE EXPORT DEFAULT COMPONENT
import Header from "./components/Header";
//NAME IMPORT-THIS IS NOT A OBJECT DESTRUCTURING
// *import { Header } from "./components/Header";
// ALL EXPORT COMPONENTS/FUNCTION :-SUPPOSE WE HAVE MULTIPLE COMPONENTS IN THE SAME FILE WE CAN USE/IMPORT LIKE THIS DYNAMIC IMPORT, BUT MAKE SURE YOUR ALL COMPONENTS IS NAME EXPORT IN OUR FILE THEN YOUR IMPORT LIKE THAT
// *import * as controller from "./components/Header";
/* 
import obj from "./components/Header";
const {Header}=obj//WHEN YOU WRITE CODE LIKE THIS SO THAT IS NOT OBJECT DESTRUCTURING IT GIVE AND ERROR

*ERROR IS:-caught TypeError: Cannot destructure property 'Header' of '(0 , _headerDefault.default)' as it is undefined.
*/

/////////////////////////////////////////////////////////////////////////////
//WE ARE GOING TO CREATE RESTAURANT CARD
//WE ARE GOING TO GET PREPARE/CREATE RESTAURANT CARD DATA
//CONFIG DRIVEN UI
const RestaurantCard = (props) => {

    const { name, cuisines, avgRating, lastMileTravelString, costForTwoString, cloudinaryImageId, } = props;
    return (
        <div className='restaurant-card' >
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}
                alt='Restaurant-card-img' />
            <strong>{name}</strong>
            <p>{cuisines?.slice(0, 3).join(" | ")}</p>
            <p><b>{avgRating}</b>⭐</p>
            <p><b>{lastMileTravelString}</b></p>
            <p><b>{costForTwoString}</b></p>
        </div>
    );
};

const Body = () => {
    return (
        <div className='body-container'>
            {restaurantList.map((restaurant) => {
                const { name, id, cuisines, avgRating, lastMileTravelString, costForTwoString, cloudinaryImageId } = restaurant.data;
                //* NOTE NOT SENDING ALL DATA TO OTHER COMPONENTS ONLY SEND THE USABLE DATA MAKE YOUR COMPONENTS LIGHTER SO YOUR APP IS WORKING FASTER
                return <RestaurantCard {...{ name, id, cuisines, avgRating, lastMileTravelString, costForTwoString, cloudinaryImageId }} key={id} />;
            })}
        </div>
    );
};
const Footer = () => {
    return (
        <React.Fragment>
            <h2>Footer</h2>
        </React.Fragment>
    );
};

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
 * 
 *  */