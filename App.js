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
 * */
