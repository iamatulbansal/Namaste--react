import { useState } from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";

//*SEARCH FILTER LOGIC
function searchFilter(searchTexts, restaurants) {
  return restaurants.filter((restaurant) => {
    return restaurant.data.name.toLowerCase().includes(searchTexts.toLowerCase());
  });
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchTexts, setSearchTexts] = useState("");
  const [searchClick, setSearchClick] = useState(false);

  return (
    <>
      <div className='search-container'>
        <input
          type='text'
          placeholder='Search'
          value={searchTexts}
          onChange={(e) => {
            setSearchTexts(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const searchResult = searchFilter(searchTexts, restaurantList);
            setRestaurants(searchResult);
            setSearchTexts("");
          }}
        >
          Search
        </button>
        <br />
        <br />
        <span className='chip'>{searchTexts}</span>
      </div>
      <div className='body-container'>
        {restaurants.length === 0 ? (
          <p>Not found Any Restaurants</p>
        ) : (
          restaurants.map((restaurant) => {
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
          })
        )}
      </div>
    </>
  );
};
export default Body;
