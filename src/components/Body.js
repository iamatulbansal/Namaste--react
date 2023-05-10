import { useState } from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";

//*SEARCH FILTER LOGIC
function searchFilter(searchTexts, restaurants) {
  return restaurants.filter((restaurant) => {
    return restaurant.data.name.includes(searchTexts);
  });
}
//FIRST APPROACH-BUT THIS IS NOT WORK PERFECT BECAUSE THIS LOGIC NEED PROPER CARD STRING WE NEED ONLY FEW WORD TO SEARCH CARD
// function searchFilter(searchTexts, restaurants) {
//   const searchResult = restaurants.filter(
//     (restaurant) => restaurant.data.name === "Chopstick"
//   );
//   console.log(searchResult);
// }

const Body = () => {
  const searchText = "XYZ"; // React don't track variable like this react don't know where is variable is updated so we will use state variable to keep track and sync our local state variable in React so react perform reconciliation process
  //*and React have a 1 way data binding when we change something using state then and your js file and state inside our react and react is very smart react use diff algorithm compare one dom tree to another dom tree using diff algorithm and react have a proper key each element then react check where exactly change so react reloading component then change only react knows where is value actually change so react update particular element

  // one way data bing is like we don't change directs html to js we only change js to html thats why react has one-directional data binding

  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchTexts, setSearchTexts] = useState("");
  const [searchClick, setSearchClick] = useState(false);
  //create local variable using useState
  //this is react state variable come from react library
  //And every React component have own lifecycle state
  //We will update your state using setState function/method

  return (
    <>
      <div className='search-container'>
        <input
          type='text'
          placeholder='Search'
          value={searchTexts}
          onChange={(e) => {
            setSearchTexts(e.target.value);
            //We will update your data using onChange method to update setState function then state state provide a updated state in our state variable
            //* we don't update variable like this in react this is a javascript metrology
            //searchText=e.target.value
          }}
        />
        <button
          onClick={() => {
            const searchResult = searchFilter(searchTexts, restaurantList);
            setRestaurants(searchResult);
            setSearchTexts("")
          }}
        >
          Search
        </button>
        <br />
        <br />
        <span className='chip'>{searchTexts}</span>
      </div>
      <div className='body-container'>
        {restaurants.length === 0 ? <p>Not found Any Restaurants</p> : restaurants.map((restaurant) => {

          const {
            name,
            id,
            cuisines,
            avgRating,
            lastMileTravelString,
            costForTwoString,
            cloudinaryImageId,
          } = restaurant.data;

          return (
            <RestaurantCard
              {...{
                name,
                id,
                cuisines,
                avgRating,
                lastMileTravelString,
                costForTwoString,
                cloudinaryImageId,
              }}
              key={id}
            />
          );
        })}
      </div>
    </>
  );
};
export default Body;
