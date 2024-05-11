import { PopularCarousel } from "../components/Home/PopularCarousel/PopularCarousel";
import { UpcomingCarousel } from "../components/Home/UpcomingCarousel/UpcomingCarousel";
import { BrowseHome } from "../components/Home/BrowseHome/BrowseHome";

import React, { useEffect, useState } from 'react';


import axios from "axios";

import { anime_data } from '../data';

const Home = () => {
  

  const [isLoading, setLoading] = useState(true);

  

  
  useEffect(() => {
    

    const apiInstance = axios.create({
      baseURL: "http://localhost:5000/api", // Set the base URL for the API
    });

    let anime_data = [];

    // Make a GET request to the API
    apiInstance
      .get("/ListAnime")
      .then((response) => {
        // Handle the response data
        //

        anime_data = response.data;
        console.log(response.data);
        return anime_data;
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        // Hide loader when loading is finished

        setLoading(false);
        console.log("Loading finished.");
      });


    
  }, []);
  

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  
  return (
    <>
      <PopularCarousel />
      <UpcomingCarousel />
      <BrowseHome />
    </>
  );
};

export { Home };
