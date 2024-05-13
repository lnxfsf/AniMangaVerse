import "../../styles/UserProfile.scoped.scss";
import { Link } from "react-router-dom";

import { anime_data, manga_data } from "../../data";
import axios from "axios";

import React, { useState, useEffect } from "react";

const Favorites = ({ user_id }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const apiInstance = axios.create({
      baseURL: "https://animangaverse.onrender.com/api",
    });

    apiInstance
      .get(`/ListFavorites/${user_id}`)
      .then((response) => {
        setFavorites(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        console.log("Loading finished, for favorites");
      });
  }, [user_id]);

  return (
    <>
      {
        // we go throught 'favorites' data, to check only for this user. 'user_id' which he have favorites

        favorites.map((item) => {
          if (item.user_id == user_id) {
            {
              /*show and render anime and manga */
            }

            {
              /* if anime_id is not null then it's anime  */
            }
            if (item.anime_id) {
              console.log("anime second");

              console.log(item.anime_id);
              console.log(anime_data[item.anime_id - 1]);
              console.log(anime_data[item.anime_id - 1].title);

              return (
                <>
                  {/*item */}
                  <Link
                    to="/detailspage"
                    state={{ id: item.anime_id, anime: true }}
                    key={item.anime_id}
                  >
                    <div
                      className="flex border-pinky h-28 border-2 rounded-2xl justify-start items-center overflow-hidden mt-8"
                      style={{
                        backgroundImage: `url("${
                          anime_data[item.anime_id - 1].background_image
                        }")`,

                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div>
                        <h2 className="fav_header p-20 mr-32 ">
                          {anime_data[item.anime_id - 1].title}
                        </h2>
                      </div>
                    </div>
                  </Link>

                  {/*item */}
                </>
              );
            } else if (item.manga_id) {
              console.log(item.manga_id);
              console.log(manga_data[item.manga_id - 1]);
              console.log(manga_data[item.manga_id - 1].title);

              return (
                <>
                  {/*item */}

                  <Link
                    to="/detailspage"
                    state={{ id: item.manga_id, anime: false }}
                    key={item.manga_id}
                  >
                    <div
                      className="flex border-pinky h-28 border-2 rounded-2xl justify-start items-center overflow-hidden mt-8"
                      style={{
                        backgroundImage: `url("${
                          manga_data[item.manga_id - 1].background_image
                        }")`,

                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div>
                        <h2 className="fav_header p-20 mr-32 ">
                          {manga_data[item.manga_id - 1].title}
                        </h2>
                      </div>
                    </div>
                  </Link>

                  {/*item */}
                </>
              );
            } else {
              console.log("nothing");
            }
          }
        })
      }
    </>
  );
};

export { Favorites };
