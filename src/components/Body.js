import { useEffect, useState } from "react";
import { RESTAURANTS_API_LINK, restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Simmer from "../Simmer";

//*SEARCH FILTER LOGIC
function searchFilter(searchTexts, restaurants) {
  return restaurants.filter((restaurant) => {
    return restaurant.data.name
      .toLowerCase()
      .includes(searchTexts.toLowerCase());
  });
}

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTexts, setSearchTexts] = useState("");
  const [searchClick, setSearchClick] = useState(false);
  console.log(filteredRestaurants)
  /***
   **note some point here when our components is render then my useState variable value is initial value
   *then when my components is fully render that time instant my useState() value is updated using useEffect()
   *
   *
   * todo: useEffect()-> lifeCycle process
   * componentDidMount-initial render is called that time to mounting face in showing our ui in the Dom window
   * componentDidUpdate- this is called initial render then after whenever my local variable state is updated then my components updated
   * componentWillUnMount-this is call when my components is rendered in the dom that time to components lifecycle is ended
   *
   *
   *  */

  useEffect(() => {
    setTimeout(() => {
      getRestaurants();
    }, 0);
    return () => {
      clearTimeout();
      console.log("componentWillUnMount");
    };
  }, []); //[] This is a Dependency array

  async function getRestaurants() {
    try {
      const response = await fetch(RESTAURANTS_API_LINK);
      const data = await response.json();
      const seeAllRestaurants = data?.data?.cards.filter(
        (seeAllRestaurants) => {
          return seeAllRestaurants.cardType === "seeAllRestaurants";
        }
      );

      setRestaurants(seeAllRestaurants[0]?.data?.data?.cards);
      setFilteredRestaurants(seeAllRestaurants[0]?.data?.data?.cards);
      //We need one more copy for filtering my restaurants card details
    } catch (error) {
      console.log("Api-Error=>", error);
    }
  }
  // if (!filteredRestaurants) return <p>We Don't Have any Data</p>;//conditional rendering

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
            const searchResult = searchFilter(searchTexts, restaurants);
            setFilteredRestaurants(searchResult);
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
        {filteredRestaurants.length === 0 ? (
          restaurantList.map((restaurant) => {
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

              <Simmer
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
        )

          : (
            filteredRestaurants.map((restaurant) => {
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
