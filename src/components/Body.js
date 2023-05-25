import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useOnline } from 'react-power-up';
import { RESTAURANTS_API_LINK, restaurantList } from '../constant';
import RestaurantCard from './RestaurantCard';
import Simmer from '../Simmer';
import { filterData } from '../utils/helpers';
import IsOnline from './IsOnline';
// import useOnline from '../hooks/useOnline';
import UserContext from '../userContext';

export const SimmerReusableUpdate = () => {
  return restaurantList.map((restaurant) => (
    <Simmer {...restaurant.data} key={restaurant.data.id} />
  ));
};


const Body = () => {
  const isOnline = useOnline()

  //Context Api Example
  const { user, setUser } = useContext(UserContext)




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

  // const [isOnline, setIsOnline] = useState(true)//create a useOnline custom hooks


  //earlier return 
  if (!isOnline) return <IsOnline />

  if (!allRestaurants) return null;

  return (
    <>
      <div className="bg-red-100 p-4 dark:bg-gray-700">
        <input className='p-2 bg-green-50 outline-none '
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className='bg-sky-500 hover:bg-sky-700 rounded-md p-2 dark:text-white'
          onClick={() => {
            const searchResult = filterData(searchText, allRestaurants);
            setFilteredRestaurants(searchResult);
            setSearchText('');
          }}
        >
          Search
        </button>
        <input className='p-2 bg-green-50 outline-none  mx-4' type='text' placeholder='username' value={user.name} onChange={(e) => setUser({
          //This setUser come from userContext api to direct update Global state
          ...user, //We can spread old value then  update next value this is javascript concept
          name: e.target.value,

        })} />
        <input className='p-2 bg-green-50 outline-none  mx-4' type='text' placeholder='username' value={user.email} onChange={(e) =>
          //This setUser come from userContext api to direct update Global state
          // Object.assign({}, user, { email: e.target.value }) //also we can use like this this is another javascript object.assign approach

          setUser({
            ...user, //We can spread old value then  update next value this is javascript concept
            email: e.target.value
          }
          )} />
        <span className='dark:text-white'>{user.name}</span>

        <br />
        <br />
        {/* <span className="chip">{searchText}</span> */}
      </div>



      <div className="flex flex-wrap justify-around p-2 gap-5 dark:bg-gray-800 ">
        {allRestaurants?.length === 0 ? (
          <SimmerReusableUpdate />
        ) : filteredRestaurants?.length === 0 ? (
          // <SimmerReusableUpdate />
          <p className='dark:text-white'>We Don't Have any Search match restaurant</p>
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
