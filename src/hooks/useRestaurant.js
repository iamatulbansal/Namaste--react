import { useState, useEffect } from 'react';

const useRestaurant = (url, resId) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  useEffect(() => {
    //Call menu Api
    //fetch APi for restaurant menu list
    async function getRestaurantMenuDetails() {
      try {
        const response = await fetch(url + resId); //for burger king we will change id dynamically
        const data = await response.json();
        setRestaurantDetails(data);
      } catch (error) {
        console.log('error', error);
      }
    }
    getRestaurantMenuDetails();

    return () => {
      console.log('useRestaurant-clean-up');
    };
  }, []);

  return restaurantDetails;
};
export default useRestaurant;
