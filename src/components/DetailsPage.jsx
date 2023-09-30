import "../styles/DetailsPage.css";
import { useLocation } from "react-router-dom";

import { anime_data, manga_data } from "../data";

// this is representing object that is fetched from database (subsequently), depending if it is 'anime_id' or 'manga_id', but format should be same..

var title,
  genre,
  episodes,
  seasons,
  start_date,
  end_date,
  background_image,
  num_of_fav,
  studio,
  desc,
  yt_trailer,
  country_origin,
  status;

const DetailsPage = () => {
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

        background_image = item.background_image;

        genre = item.genre;
        num_of_fav = item.num_of_fav;

        studio = item.studio;

        desc = item.desc;
        yt_trailer = item.yt_trailer;
      }
    });
  } else {
    manga_data.forEach((item) => {
      if (item.manga_id == id) {
        title = item.title;

        episodes = "manga";
        seasons = "manga";
        start_date = item.start_date;
        end_date = item.end_date;

        background_image = item.background_image;

        genre = item.genre;
        num_of_fav = item.num_of_fav;

        status = item.status;
        country_origin = item.country_origin;
        desc = item.desc;
        yt_trailer = item.yt_trailer;
      }
    });
  }

  // if some values are empty, 'null'
  if (!end_date) {
    end_date = "Hasn’t ended yet";
  } else if (!start_date) {
    start_date = "Hasn’t aired yet";
  }

  return (
    <>
      <div className="main4">
        <div
          className="w-full h-96 flex justify-start items-end"
          style={{ backgroundImage: `url("${background_image}")` }}
        >
          <div className="ttl-box bg-blacky p-4 mb-[-2px]">
            <div className=" m-8 border-pinky border-l-2 pr-24 pl-2">
              <h1>{title}</h1>
              <p>{num_of_fav} favorites</p>
            </div>
          </div>
        </div>

        <div className="flex w-full h-auto">
          <div className="basis-1/3 flex items-start justify-center ">
            <div className="flex border-pinky border-2 w-56 m-6 h-auto rounded-2xl p-4 flex-col">
              {anime ? (
                <div>
                  <p className="parag">Studios:</p>
                  <p className="parag border-pinky border-l-2 pl-2 mt-1">
                    {studio}
                  </p>
                </div>
              ) : (
                <div>
                  <p className="parag mt-2">Status:</p>
                  <p className="parag border-pinky border-l-2 pl-2 mt-1">
                    {status}
                  </p>
                </div>
              )}

              {anime ? (
                <div>
                  <p className="parag mt-2">Seasons:</p>
                  <p className="parag border-pinky border-l-2 pl-2 mt-1">
                    {seasons}
                  </p>
                </div>
              ) : (
                <div>
                  <p className="parag mt-2">Country of origin:</p>
                  <p className="parag border-pinky border-l-2 pl-2 mt-1">
                    {country_origin}
                  </p>
                </div>
              )}

              {anime ? (
                <div>
                  <p className="parag mt-2">Number of episodes:</p>
                  <p className="parag border-pinky border-l-2 pl-2 mt-1">
                    {episodes}
                  </p>
                </div>
              ) : (
                <div></div>
              )}

              <p className="parag mt-2">Genres:</p>

              <div className="flex  w-full h-auto mt-1 flex-wrap justify-start items-center gap-y-2 gap-x-2">
                {genre.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center border-pinky border-2 rounded-2xl w-auto h-auto  "
                  >
                    <p className="parag pl-4 pr-4 p-1">{item}</p>
                  </div>
                ))}
              </div>

              <p className="parag mt-2">Aired:</p>
              <p className="parag border-pinky border-l-2 pl-2 mt-1">
                {start_date}
              </p>

              <p className="parag mt-2">Ended:</p>
              <p className="parag border-pinky border-l-2 pl-2 mt-1">
                {end_date}
              </p>
            </div>
          </div>

          <div className="flex grow bg-blacky justify-center items-start flex-col">
            <h2 className="about_ttl m-6 border-pinky border-l-2 pr-24 pl-2 ml-32">
              About {title}:
            </h2>

            <p className="parag1  break-normal p-6 w-[80%] ml-28">{desc}</p>

            {yt_trailer ? (
              <div className="w-full p-6 ml-28">
                {/* show trailer, only if it is not null ! whether it is anime or manga (some mangas have trailer... ) */}
                <iframe
                  width="80%"
                  height="315"
                  src={yt_trailer}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { DetailsPage };
