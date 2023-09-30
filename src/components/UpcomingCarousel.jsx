import "../styles/UpcomingCarousel.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ScrollCarousel from "scroll-carousel";
import { anime_data } from "../data";

export function UpcomingCarousel() {
  useEffect(() => {
    let main1 = document.querySelector(".main1");

    // don't put it in a variable, then it won't work!
    //https://asif-jalil.github.io/scroll-carousel-website/#api
    new ScrollCarousel(main1, {
      autoplay: true,
      autoplaySpeed: 8,
      smartSpeed: true,
      slideSelector: ".carousel-container",
      direction: "ltr", // ltr
      speed: 7,
      margin: 24,
    });
  }, []);

  return (
    <>
      <div className="line"> </div>

      <div className="main1 flex flex-col 	">
        {/* this is just container for showing title and then carousel */}
        <div className="small_header1 ml-10 mt-6 ">
          {/* check index.css, for global use, vertical rectangle.. */}
          <div className="rectangle_taller"></div>

          <div>
            <h3>Top Upcoming animes:</h3>
            <p>Season - fall 2023</p>
          </div>
        </div>

        <div className="carousel-container">
          {/* container for items*/}

          <div className="flex  flex-row gap-3 justify-center mt-2">
            {/* TODO from server we should get 10 items that are most recent by  'release_date'.   */}
            {/* show items (render from object) dynamically render items */}

            {/*only prop that will be passed is 'anime_id'. because on DetailedPage, it will be fetched again from database for all info. And 'anime_id' because this if for 'upcoming animes'. it can be manga as well .. just say to include it if needed */}

            {anime_data.map((item, index) => (
              <Link
                to="/detailspage"
                state={{ id: item.anime_id, anime: true }}
                key={item.anime_id}
              >
                <div className="item flex flex-col justify-start " key={index}>
                  {/* image */}
                  {/* TODO , image need to scale well. to be by square. whatever image it is. or somehow to do it automatically */}
                  <img src={item.image} alt={item.title} />

                  <div className="line"> </div>

                  <div className="inner flex flex-col gap-2 justify-start items-start ml-4 mt-4">
                    <h1>{item.title}</h1>
                    <p>{item.season}</p>
                  </div>

                  <p className="release_date mt-16 ml-4 ">{item.start_date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
