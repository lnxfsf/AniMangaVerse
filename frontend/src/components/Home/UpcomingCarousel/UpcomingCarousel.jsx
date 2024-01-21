import "../../../styles/UpcomingCarousel.scoped.scss";
import { useEffect , useRef } from "react";
import { Link } from "react-router-dom";
import ScrollCarousel from "scroll-carousel";
import { anime_data } from "../../../data";
import { Item } from "./Item";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

var top10UpcomingAnime;

export const UpcomingCarousel = () => {
  

  
  // Sort the anime_data array based on start_date in descending order
  // this way, we get most recent by start_date, elements. and put them in other list, which shows latest 10 by start_date
  const sortedAnimeData = anime_data.sort((a, b) => {
    const dateA = new Date(a.start_date);
    const dateB = new Date(b.start_date);
    return dateB - dateA; // Sort in descending order (from newest to oldest date)
  });

  // this way, we get most recent by start_date, elements. and put them in other list, which shows latest 10 by start_date
  top10UpcomingAnime = sortedAnimeData.slice(0, 10);

  



  // progress bar 
  const splideRef = useRef(null);
  const barRef = useRef(null); 

  useEffect(() => {
    const splide = splideRef.current.splide;
    const bar = barRef.current;

    splide.on(' autoplay:play mounted move dragged', () => {
      const end = splide.Components.Controller.getEnd() + 1;
      const rate = Math.min((splide.index + 1) / end, 1);
      bar.style.width = `${100 * rate}%`;
    });
  }, []);
  


  return (
    <>
      <div className="line"> </div>

      <div className="main flex flex-col 	">
        {/* this is just container for showing title and then carousel */}
        <div className="small_header ml-4 md:ml-6 lg:ml-10  mt-6 ">
          <div className="secondary-left-line">
            <h3>Top Upcoming animes:</h3>
            <p>Season - fall 2023</p>
          </div>
        </div>

        <Splide
        ref={splideRef}

          options={{
            perPage: 3,
            gap: "0.75rem",
            rewind: true,
            type: "loop",
            focus: "center",
            autoplay: true,
            autoWidth: true,
            arrows: false,
            pagination: false,
            drag: "free",
            snap: true,
          }}

          aria-labelledby="reactivity-example-heading"
          className="mt-2 "
        >
          {top10UpcomingAnime.map((item, index) => (
            <SplideSlide key={index}>
              <Item item={item} index={index} />
            </SplideSlide>
          ))}
    

    
        </Splide>
    
      <div class="my-carousel-progress">
          <div class="my-carousel-progress-bar" ref={barRef}></div>
      </div>
   

      </div>
    </>
  );
};
