import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_LINK, RESTAURANTS_MENU_API_LINK } from "../constant";
import ShimmerImg from "../assets/img/Shimmer.gif";

const MenuTableView = (props) => {
  const menusList = props.menusList ?? []
  console.log("menusList", menusList)
  return <table style={{ width: "100%" }}>
    <tr style={{ background: "lightblue" }}>
      <th>ID</th>
      <th>Name</th>
      <th>Price</th>
      <th>Image</th>
    </tr>

    {menusList?.length === 0 ? <p>Menu List Not Found</p> : menusList?.map((menu) => (
      <tr className="menu-cart">
        <td>{menu?.id}</td>
        <td>{menu?.name}</td>
        <td>{menu?.price}</td>
        <td><img width={100} style={{ padding: '10px', borderRadius: "10px" }} src={IMG_CDN_LINK + menu?.imageId} /></td>
      </tr>
    ))}
  </table>
}
const Shimmer = () => {
  return (
    <div>
      {Array(2)
        .fill("")
        .map((cart, index) => (
          <img
            key={index}
            width={"50%"}
            height={600}
            src={ShimmerImg}
            alt='Restaurant-card-img'
          />
        ))}
    </div>
  );
};

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
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  //we are fetch data from Swiggy.com api only one time render using empty dependency arrey
  useEffect(() => {
    //Call menu Api
    getRestaurantMenuDetails();
  }, []);

  const restaurantInfo = restaurantDetail(restaurantDetails);

  const value = restaurantInfo && menuList(restaurantDetails);
  const menusList = value
    ?.filter((menus) => menus.card.card.itemCards)[0]
    ?.card?.card?.itemCards.map((menu) => menu?.card?.info);

  async function getRestaurantMenuDetails() {
    try {
      const response = await fetch(RESTAURANTS_MENU_API_LINK + resId); //for burger king we will change id dynamically
      const data = await response.json();
      setRestaurantDetails(data);
    } catch (error) {
      console.log("error", error);
    }
  }
  return !restaurantInfo ? (
    <Shimmer />
  ) : (
    <div className='restaurant-details-container'>
      <div className='restaurant-details'>
        <h1>RESTAURANT DETAILS</h1>
        <img
          src={IMG_CDN_LINK + restaurantInfo?.cloudinaryImageId}
          alt='cloudinaryImageId'
        />
        <h2>Restaurant-ID:{resId}</h2>
        {/* passed optional chinning */}
        <h3>Restaurant-Name:{restaurantInfo?.name}</h3>
        <h3>Ratings:{restaurantInfo?.totalRatingsString}</h3>
        <h3>city:{restaurantInfo?.city}</h3>
        <h3>locality:{restaurantInfo?.locality}</h3>
      </div>
      <div className='restaurant-menu'>
        <h1>MENU:-({menusList?.length})</h1>
        <MenuTableView menusList={menusList} />

      </div>
    </div>
  );
};
export default RestaurantDetails;
/***
 * Todo:-->
 * React-router-don for routing
 * useParams for get id from url
 * useRouterError() hooks for page not found 
 * create Error component
 * use createBrowserRouter for creating path config 
 * pass RouterProvider in side our root.render() method
 * pass one router props inside our RouterProvider components
 * SSR-server side rendering
 * CSR-client side rendering
 * SPA-single page application
 * use assets folder to contain all images and logos related to our project
 * if you optimizing your application performance then put your images in CDN cloud-hosting platform then fetch and use inside your project this is a best way
 * don't put your useSate hooks and other hooks outside of your components this is throw Error
 *Don't use unnecessary npm packages and read about all documentation of npm then put inside your project 
 and use some important npm library for form or validation like formik and yup
 * 
 * 
 * Read more on Nested Routing dynamic routing segment routing and read about loader
 * Outlat-for access nested children path read and practice more about this 
 * 
 * Read about javascript Object read about lodash
 * Read about javascript Array all method 
 * 
 */