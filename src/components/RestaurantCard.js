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
    <div className="restaurant-card">
      <img src={IMG_CDN_LINK + cloudinaryImageId} alt="Restaurant-card-img" />
      <strong>{name}</strong>
      <p>{cuisines?.slice(0, 3).join(' | ')}</p>
      <p>
        <b>{avgRating}</b>⭐
      </p>
      <p>
        <b>{lastMileTravelString}</b>
      </p>
      <p>
        <b>{costForTwoString}</b>
      </p>
    </div>
  );
};
export default RestaurantCard;
