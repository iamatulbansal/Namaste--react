import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RESTAURANTS_API_LINK, restaurantList } from '../constant';
import RestaurantCard from './RestaurantCard';
import Simmer from '../Simmer';

export const SimmerReusableUpdate = () => {
  return restaurantList.map((restaurant) => (
    <Simmer {...restaurant.data} key={restaurant.data.id} />
  ));
};

//*SEARCH FILTER LOGIC
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) => {
    return restaurant?.data?.name
      ?.toLowerCase()
      ?.includes(searchText.toLowerCase());
  });
  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');
  // console.log(!allRestaurants);

  useEffect(() => {
    //Api Call
    getRestaurants();
    // console.log('useEffect');
  }, []); //[] This is a Dependency array

  async function getRestaurants() {
    try {
      const response = await fetch(RESTAURANTS_API_LINK);
      const data = await response.json();
      //Optional Chaining
      const seeAllRestaurants = data?.data?.cards.filter(
        (seeAllRestaurants) => {
          return seeAllRestaurants.cardType === 'seeAllRestaurants';
        }
      );

      setAllRestaurants(seeAllRestaurants[0]?.data?.data?.cards);
      setFilteredRestaurants(seeAllRestaurants[0]?.data?.data?.cards);
      //We need one more copy for filtering my restaurants card details
    } catch (error) {
      console.log('API-ERROR=>', error);
    }
  }

  if (!allRestaurants) return null;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const searchResult = filterData(searchText, allRestaurants);
            setFilteredRestaurants(searchResult);
            setSearchText('');
          }}
        >
          Search
        </button>
        <br />
        <br />
        <span className="chip">{searchText}</span>
      </div>
      <div className="body-container">
        {allRestaurants?.length === 0 ? (
          <SimmerReusableUpdate />
        ) : filteredRestaurants?.length === 0 ? (
          // <SimmerReusableUpdate />
          <p>We Don't Have any Search match restaurant</p>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.data.id}
              to={`/restaurant/${restaurant.data.id}`}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};
export default Body;
