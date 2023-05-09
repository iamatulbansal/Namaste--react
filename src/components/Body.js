
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className='body-container'>
            {restaurantList.map((restaurant) => {
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
            })}
        </div>
    );
};
export default Body;
