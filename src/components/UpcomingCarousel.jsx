import "../styles/UpcomingCarousel.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ScrollCarousel from "scroll-carousel";
import { anime_data } from "../data";

var top10UpcomingAnime;

export const UpcomingCarousel = () => {
  useEffect(() => {
    let main1 = document.querySelector(".main1");

    // don't put it in a variable, then it won't work!
    //https://asif-jalil.github.io/scroll-carousel-website/#api
    new ScrollCarousel(main1, {
      
      slideSelector: ".carousel-container",
      direction: "rtl", // ltr
      speed: 5,
      margin: 24,
    });
  }, []);

  //convert date to 'Month Year' string..
  var convertDate = (start_date) => {
    let dateObj = new Date(start_date);

    let month = dateObj.toLocaleString("en-US", { month: "long" });
    let year = dateObj.getFullYear();

    return `${month} ${year}`;
  };

  // Sort the anime_data array based on start_date in descending order
  // this way, we get most recent by start_date, elements. and put them in other list, which shows latest 10 by start_date
  const sortedAnimeData = anime_data.sort((a, b) => {
    const dateA = new Date(a.start_date);
    const dateB = new Date(b.start_date);
    return dateB - dateA; // Sort in descending order (from newest to oldest date)
  });

  // this way, we get most recent by start_date, elements. and put them in other list, which shows latest 10 by start_date
  top10UpcomingAnime = sortedAnimeData.slice(0, 10);

  return (
    <>
      <div className="line"> </div>

      <div className="main1 flex flex-col 	">
        {/* this is just container for showing title and then carousel */}
        <div className="small_header1 ml-10 mt-6 ">
          {/* check index.css, for global use, vertical rectangle.. */}

          <div className="secondary-left-line">
            <h3>Top Upcoming animes:</h3>
            <p>Season - fall 2023</p>
          </div>
        </div>
        <div className="carousel-container">
            {/* container for items*/}

            <div className="flex  flex-row gap-3 justify-center mt-2">
              {/* show items (render from object) dynamically render items */}

              {/*only prop that will be passed is 'anime_id'. because on DetailedPage, it will be fetched again from database for all info. And 'anime_id' because this if for 'upcoming animes'. it can be manga as well .. just say to include it if needed */}

              {top10UpcomingAnime.map((item, index) => (
                <Link
                  to="/detailspage"
                  state={{ id: item.anime_id, anime: true }}
                  key={item.anime_id}
                >
                  <div
                    className="item flex flex-col justify-start items-stretch"
                    key={index}
                  >
                    {/* image */}
                    {/* to scale it well you need to put in <div> contaiener. remove width and height and put ' object-fit: contain;' and on <div> put 'overflow: hidden;'*/}
                    <div className="item_div">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="line"> </div>

                    <div className="inner flex flex-col gap-2 justify-start items-start ml-4 mt-4">
                      <h1>{item.title}</h1>
                      <p>Season {item.seasons}</p>
                    </div>

                    <p className="release_date mt-16 ml-4 ">
                      {convertDate(item.start_date)}{" "}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
        </div>
      </div>
    </>
  );
};

