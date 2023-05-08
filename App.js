import React from "react";
import ReactDOM from "react-dom/client";
import restaurantList from './restaurant-list.json';

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
console.log(restaurantList[0].data)

const burgerKing = {
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/uvzfjwcslztz1tzjlzfg",
    name: "Burger King",
    cuisines: ["Burgers", "American"],
    eta: "37",
    avgRating: "3.4",
    price: "200"


}
const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="restaurant-card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurant.data.cloudinaryImageId} alt="Restaurant-card-img" />
            <strong>{restaurant.data.name}</strong>
            <p>{restaurant.data.cuisines.slice(0, 3).join(" | ")}</p>
            <p><b>{restaurant.data.avgRating}</b>⭐</p>
            <p><b>{restaurant.data.lastMileTravelString}</b></p>
            <p><b>{restaurant.data.costForTwoString}</b></p>
        </div>
    )
}


const Body = () => {
    return (
        <div className="body-container">
            <RestaurantCard restaurant={restaurantList[0]} />
            <RestaurantCard restaurant={restaurantList[1]} />
            <RestaurantCard restaurant={restaurantList[2]} />
            <RestaurantCard restaurant={restaurantList[3]} />
            <RestaurantCard restaurant={restaurantList[4]} />
            <RestaurantCard restaurant={restaurantList[5]} />
            <RestaurantCard restaurant={restaurantList[6]} />
            <RestaurantCard restaurant={restaurantList[7]} />
            <RestaurantCard restaurant={restaurantList[8]} />


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
