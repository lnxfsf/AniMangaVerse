import { PopularCarousel } from "../components/Home/PopularCarousel/PopularCarousel";
import { UpcomingCarousel } from "../components/Home/UpcomingCarousel/UpcomingCarousel";
import { BrowseHome } from "../components/Home/BrowseHome/BrowseHome";




import { Favorites } from "../components/UserProfile/Favorites";

import React, { useEffect, useState } from 'react';


import axios from "axios";

import { anime_data } from '../data';

const Home = () => {
  

  const [isLoading, setLoading] = useState(true);

  

  
  useEffect(() => {
    

    const apiInstance = axios.create({
      baseURL: "http://localhost:5000/api", 
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
  
  


  let tokens =  JSON.parse(localStorage.getItem('authTokens'))

  if (tokens){

    var user_id = tokens.data.user_id
  }else{
    var user_id = null
  }

   

  
  return (
    <>

    <Favorites user_id={user_id} />

      <PopularCarousel />
      <UpcomingCarousel />
      <BrowseHome />


    </>
  );
};

export { Home };
