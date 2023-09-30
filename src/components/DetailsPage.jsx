import "../styles/DetailsPage.css";
import { useLocation } from "react-router-dom";

import { anime_data, manga_data } from "../data";

// this is representing object that is fetched from database (subsequently), depending if it is 'anime_id' or 'manga_id', but format should be same..

var title, genre, episodes, seasons, start_date, end_date, image;

export function DetailsPage() {
  // this is prop from  UpcomingCarousel (anime_id), passed throught <Link>
  const location = useLocation();
  const { id, anime } = location.state;

  // in fact, we only need this 'anime' variable for actual fetching !!! if 'anime' is true then to fetch from 'anime' table, and if not then from 'manga' table !
  // and it will help down below to show if there is some stuff to show depending if it is anime or manga

  // if this is anime in question
  if (anime) {
    // just extract it into variables.. so I can show them..
    // it will get 'id' .. but we will know if it is anime if it have prop passed as 'anime: true'. or manga if it is 'anime: false'

    anime_data.forEach((item) => {
      if (item.anime_id == id) {
        title = item.title;

        episodes = item.episodes;
        seasons = item.seasons;
        start_date = item.start_date;
        end_date = item.end_date;

        image = item.image;

        genre = item.genre;
      }
    });
  } else {
    console.log("manga");
    // then it is manga for sure
    //

    manga_data.forEach((item) => {
      if (item.manga_id == id) {
        title = item.title;

        episodes = "manga";
        seasons = "manga";
        start_date = item.start_date;
        end_date = item.end_date;

        image = item.image;

        genre = item.genre;
      }
    });
  }

  return (
    <>
      <h1>{title}</h1>

      <img src={image}></img>

      {/* show all genres it belongs */}
      {genre.map((item) => (
        <div key="index">
          <p>{item}</p>
        </div>
      ))}

      {/* show trailer, only if it is not null ! whether it is anime or manga (some mangas have trailer... ) */}
      <iframe
        width="560"
        height="315"
        src={anime_data[0].yt_trailer}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </>
  );
}
