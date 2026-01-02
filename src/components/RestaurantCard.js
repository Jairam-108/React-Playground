import { IMG_DOMAIN_URL as imageUrl } from "../utils/constants";

const RestaurantCard = (params) => {
  const { resData } = params;
  const resDetails = resData?.info;
  const img = `${imageUrl}${resDetails?.cloudinaryImageId}`;
  const {
    name,
    cuisines,
    avgRating
  } = resDetails
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={img} alt="Restaurant" />
      <h3 className="restaurant-name">{name}</h3>
      <p className="cuisine-type">{cuisines?.join(",")}</p>
      <p className="restaurant-rating">{avgRating} ⭐</p>
    </div>
  );
};

export default RestaurantCard;