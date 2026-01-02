import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = ({ isLoading, setIsLoading, restoList, setRestoList }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestoList, setFilteredRestoList] = useState(restoList);
  return (
    <div className="body">
      {console.log("RestoList in Body:", restoList)}
      {console.log("filteredRestoList in Body:", filteredRestoList )}
      <input
        type="text"
        placeholder="Search food items..."
        className="search-input"
        value={searchText}
        onChange={(e) => {
          if (!e.target.value) {
            setFilteredRestoList(restoList);
            setSearchText("");
            return;
          }
          setSearchText(e.target.value.toLowerCase());
          const filteredList = filteredRestoList.filter((restaurant) =>
            restaurant?.card?.card?.restaurant.info?.name.toLowerCase().includes(searchText)
          );
          console.log('*************', filteredList);
          setFilteredRestoList(filteredList);
        }}
      />
      <button onClick={() => {
        const filteredList = filteredRestoList.filter(res => res?.info?.avgRating > 4.4);
        console.log(filteredList);
        setFilteredRestoList(filteredList);
      }}>Top Rated Restaurants</button>
      <div className="restaurant-list">
        {filteredRestoList.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info?.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
