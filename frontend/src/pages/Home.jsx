import { PopularCarousel } from "../components/Home/PopularCarousel/PopularCarousel";
import { UpcomingCarousel } from "../components/Home/UpcomingCarousel/UpcomingCarousel";
import { BrowseHome } from "../components/Home/BrowseHome/BrowseHome";

import React, { useEffect, useState } from 'react';

import axios from "axios";


let BACKEND_SERVER_BASE_URL = import.meta.env.VITE_BACKEND_SERVER_BASE_URL || process.env.VITE_BACKEND_SERVER_BASE_URL;



const Home = () => {
  

  const [isLoading, setLoading] = useState(true);

  

  
  useEffect(() => {
    

    const apiInstance = axios.create({
      baseURL: `${BACKEND_SERVER_BASE_URL}/api`, 
    });

    let anime_data = [];

    apiInstance
      .get("/ListAnime")
      .then((response) => {

        anime_data = response.data;
        console.log(response.data);
        return anime_data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {

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
