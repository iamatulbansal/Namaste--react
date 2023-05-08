import React from "react";
import ReactDOM from "react-dom/client";

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
const RestaurantCard = () => {
    return (
        <div className="restaurant-card">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/uvzfjwcslztz1tzjlzfg" alt="Restaurant-card-img" />
            <strong>Ahuja Chinese Food Court</strong>
            <p>Indian, Sweets, Beverages</p>
            <p><b>3.5</b> STAR</p>
            <p><b>37</b> MINS</p>
            <p><b>₹200</b> FOR TWO</p>
        </div>
    )
}


const Body = () => {
    return (
        <div className="body-container">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
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
 * Todo:Config Driven UI
 * *Dynamic UI
 * *Control UI using Data.config.json file
 *
 *
 * *Props  is a Properties
 *
 * */
