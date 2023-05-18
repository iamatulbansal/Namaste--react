import { IMG_CDN_LINK } from '../constant';
const RestaurantCard = (props) => {
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
      <img src={IMG_CDN_LINK + cloudinaryImageId} alt="Restaurant-card-img"  className='rounded-t-lg'/>
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
    </div>
  );
};
export default RestaurantCard;
