import "../../../styles/UpcomingCarousel.scoped.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollCarousel from "scroll-carousel";
import { anime_data } from "../../../data";
import { Item } from "./Item";



import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

var top10UpcomingAnime;

export const UpcomingCarousel = () => {
  



  
  useEffect(() => {
    let main = document.querySelector(".main");

    // don't put it in a variable, then it won't work!
    //https://asif-jalil.github.io/scroll-carousel-website/#api
    new ScrollCarousel(main, {
      slideSelector: ".carousel-container",
      direction: "rtl", // ltr
      speed: 5,
      margin: 24,
      // autoplay: true,
    });
  }, []);

  // Sort the anime_data array based on start_date in descending order
  // this way, we get most recent by start_date, elements. and put them in other list, which shows latest 10 by start_date
  const sortedAnimeData = anime_data.sort((a, b) => {
    const dateA = new Date(a.start_date);
    const dateB = new Date(b.start_date);
    return dateB - dateA; // Sort in descending order (from newest to oldest date)
  });

  // this way, we get most recent by start_date, elements. and put them in other list, which shows latest 10 by start_date
  top10UpcomingAnime = sortedAnimeData.slice(0, 10);

  var item = {};

  return (
    <>
    



<Flicking moveType="freeScroll" bound={true}>
      <span className="button mr-2 is-white">🍎 Apple</span>
      <span className="button mr-2 is-white">🍉 Watermelon</span>
      <span className="button mr-2 is-white">🥝 Kiwi</span>
    
      <span className="button mr-2 is-white">🍎 Apple</span>
      <span className="button mr-2 is-white">🍉 Watermelon</span>
      <span className="button mr-2 is-white">🥝 Kiwi</span>
    
    
      <span className="button mr-2 is-white">🍎 Apple</span>
      <span className="button mr-2 is-white">🍉 Watermelon</span>
      <span className="button mr-2 is-white">🥝 Kiwi</span>
    

      <span className="button mr-2 is-white">🍎 Apple</span>
      <span className="button mr-2 is-white">🍉 Watermelon</span>
      <span className="button mr-2 is-white">🥝 Kiwi</span>
    

      <span className="button mr-2 is-white">🍎 Apple</span>
      <span className="button mr-2 is-white">🍉 Watermelon</span>
      <span className="button mr-2 is-white">🥝 Kiwi</span>
    
      <span className="button mr-2 is-white">🍎 Apple</span>
      <span className="button mr-2 is-white">🍉 Watermelon</span>
      <span className="button mr-2 is-white">🥝 Kiwi</span>

    
    
    </Flicking>

    
      <div className="line"> </div>
    

      <div className="main flex flex-col 	">

        {/* this is just container for showing title and then carousel */}
        <div className="small_header ml-4 md:ml-6 lg:ml-10  mt-6 ">
          {/* check index.css, for global use, vertical rectangle.. */}

          <div className="secondary-left-line">
            <h3>Top Upcoming animes:</h3>
            <p>Season - fall 2023</p>
          </div>
        </div>
    
    
    

        {/* carousel container (for carousel) */}
        {/* <div className="carousel-container"> */}
    
        <Flicking moveType="freeScroll" bound={true}>

    
          {/* container for items*/}
          <div className="flex  flex-row gap-3 justify-center mt-2">
            {top10UpcomingAnime.map((item, index) => (
              <Item item={item} index={index} />
            ))}
          </div>
    

    
        {/* </div> */}
    
        </Flicking>

    
      </div>
    
{/* 
      <div className="main flex flex-col 	">

        {/* this is just container for showing title and then carousel 
        <div className="small_header ml-4 md:ml-6 lg:ml-10  mt-6 ">
          {/* check index.css, for global use, vertical rectangle.. 

          <div className="secondary-left-line">
            <h3>Top Upcoming animes:</h3>
            <p>Season - fall 2023</p>
          </div>
        </div>

    
    

        {/* carousel container (for carousel) 
        <div className="carousel-container">
    

          {/* container for items
          <div className="flex  flex-row gap-3 justify-center mt-2">
            {top10UpcomingAnime.map((item, index) => (
              <Item item={item} index={index} />
            ))}
          </div>
    

    
        </div>
    

    
      </div> */}



    </>
  );
};
