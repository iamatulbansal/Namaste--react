
import React from 'react';
import UserContext from '../UserContext';
import { IMG_CDN_LINK } from '../constant';

const RestaurantCard = (props) => {
  const { user } = React.useContext(UserContext)
  const {
    name,
    cuisines,
    avgRating,
    lastMileTravelString,
    costForTwoString,
    cloudinaryImageId,
  } = props;

  return (
    <div className="shadow-md bg-green-100 shadow-lg shadow-red-100 rounded-md w-60">
      <img src={IMG_CDN_LINK + cloudinaryImageId} alt="Restaurant-card-img" className='rounded-t-lg' />
      <strong>{name}</strong>
      <p>{cuisines?.slice(0, 3).join(' | ')}</p>
      <p>
        <b>{avgRating}</b>⭐
      </p>
      <p>
        <b>{lastMileTravelString}</b>
      </p>
      <p className='py-2'>
        <b>{costForTwoString}</b>
      </p>
      <div className='text-green-700 underline font-bold'>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
      
    </div>
  );
};
export default RestaurantCard;
