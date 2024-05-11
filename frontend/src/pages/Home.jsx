import { PopularCarousel } from "../components/Home/PopularCarousel/PopularCarousel";
import { UpcomingCarousel } from "../components/Home/UpcomingCarousel/UpcomingCarousel";
import { BrowseHome } from "../components/Home/BrowseHome/BrowseHome";

import React, { useEffect, useState } from 'react';

import {anime_data} from '../data'

const Home = () => {
  

  const [anime_data, setAnime_data] = useState([]);

  useEffect(() => {
    

    const apiInstance = axios.create({
      baseURL: "http://localhost:5000/api", // Set the base URL for the API
    });

   //let anime_data = [];

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
        clearInterval(loaderInterval);
        console.log("Loading finished.");
      });


    
  }, []);
  
  return (
    <>
      <PopularCarousel />
      <UpcomingCarousel />
      <BrowseHome />
    </>
  );
};

export { Home };
