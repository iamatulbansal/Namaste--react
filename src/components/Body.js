import { useEffect, useState } from "react";
import { RESTAURANTS_API_LINK, restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Simmer from "../Simmer";

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
  const [searchText, setSearchText] = useState("");
  console.log(!allRestaurants);
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
    //Api Call
    getRestaurants();
    console.log("useEffect");
  }, []); //[] This is a Dependency array

  async function getRestaurants() {
    try {
      const response = await fetch(RESTAURANTS_API_LINK);
      const data = await response.json();
      //Optional Chaining
      const seeAllRestaurants = data?.data?.cards.filter(
        (seeAllRestaurants) => {
          return seeAllRestaurants.cardType === "seeAllRestaurants";
        }
      );

      setAllRestaurants(seeAllRestaurants[0]?.data?.data?.cards);
      setFilteredRestaurants(seeAllRestaurants[0]?.data?.data?.cards);
      //We need one more copy for filtering my restaurants card details
    } catch (error) {
      console.log("API-ERROR=>", error);
    }
  }
  console.log("render"); //every time my component is re-render then this is called

  //*WHAT IS CONDITIONAL RENDERING
  //IF RESTAURANTS IS EMPTY => SHOWING SIMMER UI
  //IF RESTAURANTS HAS DATA => SHOWING ACTUAL UI
  //NOT RENDER COMPONENTS THIS IS CALLED EARLIER RETURN
  if (!allRestaurants) return null;

  //SUPPOSE YOUR FILTER CARD NOT MATCH IN YOUR SEARCH TEXT THEN YOU SHOWING NOT FOUND CARDS LIKE THIS
  if (filteredRestaurants?.length === 0 && !filteredRestaurants)
    return <p>We Don't Have any restaurant</p>;

  return (
    <>
      <div className='search-container'>
        <input
          type='text'
          placeholder='Search'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const searchResult = filterData(searchText, allRestaurants);
            setFilteredRestaurants(searchResult);
            setSearchText("");
          }}
        >
          Search
        </button>
        <br />
        <br />
        <span className='chip'>{searchText}</span>
      </div>
      <div className='body-container'>
        {/* WHEN YOU DOING CONDITIONAL RENDERING THEN WE FACE SOME ERROR LENGTH IS UNDEFINED THEN YOU PASS THIS SIGN "?" OPTIONAL CHAINING */}
        {allRestaurants?.length === 0 ? (
          <SimmerReusableUpdate />
        ) : filteredRestaurants?.length === 0 ? ( //WRITE YOUR LOGIC FOR SIMMER UI
          // <SimmerReusableUpdate />
          <p>We Don't Have any Search match restaurant</p>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          ))
        )}
      </div>
    </>
  );
};
export default Body;
/* 
todo:Homework
-FIRST CHECK ALL RESTAURANTS >>
 -SHOW THE SIMMER UI >>>
 -THEN YOU DO FILTER RESTAURANT >>>
 -THEN FILTER RESTAURANT NOT THERE >>
 -THEN NOT FOUND MESSAGE IS SHOW IN THE UI 
 -Done

*/
