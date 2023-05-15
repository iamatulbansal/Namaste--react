import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_LINK, RESTAURANTS_MENU_API_LINK } from '../constant';
import ShimmerImg from '../assets/img/Shimmer.gif';

//customHooks
import useRestaurant from '../hooks/useRestaurant';

//Components
const MenuTableView = (props) => {
  const menusList = props.menusList ?? [];
  // console.log('menusList', menusList);
  return (
    <table style={{ width: '100%' }}>
      <tbody>
        <tr style={{ background: 'lightblue' }}>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
        </tr>
      </tbody>
      {menusList?.length === 0 ? (
        <p>Menu List Not Found</p>
      ) : (
        <tbody>
          {menusList?.map((menu) => (
            <tr className="menu-cart" key={menu?.id}>
              <td>{menu?.id}</td>
              <td>{menu?.name}</td>
              <td>{menu?.price}</td>
              <td>
                <img
                  width={100}
                  style={{ padding: '10px', borderRadius: '10px' }}
                  src={IMG_CDN_LINK + menu?.imageId}
                />
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
};
const Shimmer = () => {
  return (
    <div>
      {Array(2)
        .fill('')
        .map((cart, index) => (
          <img
            key={index}
            width={'50%'}
            height={600}
            src={ShimmerImg}
            alt="Restaurant-card-img"
          />
        ))}
    </div>
  );
};
//function logic
function restaurantDetail(restaurantDetails) {
  const response = restaurantDetails?.data?.cards[0]?.card?.card?.info;
  return response;
}
function menuList(restaurantDetails) {
  const response = restaurantDetails?.data?.cards?.filter((item) => {
    return item?.groupedCard;
  });
  const restaurantMenuList =
    response[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  return restaurantMenuList;
}

const RestaurantDetails = () => {
  const { resId } = useParams(); //use params for get id from url
  const restaurantDetails = useRestaurant(RESTAURANTS_MENU_API_LINK, resId);

  const restaurantInfo = restaurantDetail(restaurantDetails);

  const value = restaurantInfo && menuList(restaurantDetails);
  const menusList = value
    ?.filter((menus) => menus.card.card.itemCards)[0]
    ?.card?.card?.itemCards.map((menu) => menu?.card?.info);

  return !restaurantInfo ? (
    <Shimmer />
  ) : (
    <div className="restaurant-details-container">
      <div className="restaurant-details">
        <h1>RESTAURANT DETAILS</h1>
        <img
          src={IMG_CDN_LINK + restaurantInfo?.cloudinaryImageId}
          alt="cloudinaryImageId"
        />
        <h2>Restaurant-ID:{resId}</h2>
        {/* passed optional chinning */}
        <h3>Restaurant-Name:{restaurantInfo?.name}</h3>
        <h3>Ratings:{restaurantInfo?.totalRatingsString}</h3>
        <h3>city:{restaurantInfo?.city}</h3>
        <h3>locality:{restaurantInfo?.locality}</h3>
      </div>
      <div className="restaurant-menu">
        <h1>MENU:-({menusList?.length})</h1>
        <MenuTableView menusList={menusList} />
      </div>
    </div>
  );
};
export default RestaurantDetails;
