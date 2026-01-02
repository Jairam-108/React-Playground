import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Shimmer from "./components/Shimmer";
import restaurantList from "./utils/restoMock";

const AppLayout = () => {
  const [restoList, setRestoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // API call to fetch restaurant data can be placed here
    console.log("Fetching restaurant data...");
    fetchData();
  }, []);

  const fetchData = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9530441&lng=77.7102063&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setIsLoading(false);
    setRestoList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  return (
    console.log('isLoading:', isLoading),
    isLoading ? <Shimmer /> : <div className="app">
      <Header />
      <Body 
        isLoading={isLoading} 
        setIsLoading={setIsLoading}
        restoList={restoList}
        setRestoList={setRestoList}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);