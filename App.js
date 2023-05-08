import React from "react";
import ReactDOM from "react-dom/client";
import restaurantList from "./db/restaurant-list.json";

const Title = () => {
    return (
        <React.Fragment>
            <a href='/' className='titleAnchorTag'>
                <img
                    alt='LOGO'
                    className='logo'
                    src='https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7'
                />
            </a>
        </React.Fragment>
    );
};

const Header = () => {
    return (
        <div className='container'>
            <Title />
            <ul className='nav-items'>
                <li className='nav-list'>Home</li>
                <li className='nav-list'>About</li>
                <li className='nav-list'>Cart</li>
                <li className='nav-list'>Logout</li>
            </ul>
        </div>
    );
};

//WE ARE GOING TO CREATE RESTAURANT CARD
//WE ARE GOING TO GET PREPARE/CREATE RESTAURANT CARD DATA

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