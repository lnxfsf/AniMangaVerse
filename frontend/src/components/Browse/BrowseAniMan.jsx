import "../../styles/BrowseAniMan.scoped.scss";

import {
  anime_data,
  genres,
  year,
  studio,
  season,
  episodes,
  manga_data,
  publishing,
  country_origin,
} from "../../data";

import { Link } from "react-router-dom";

const BrowseAniMan = ({ isanime }) => {
  return (
    <>
      {isanime ? (
        <div className=" cards_container grid custom-grid-cols gap-x-6 gap-y-6 p-6  ">
          {anime_data.map((item) => (
            <Link
              to="/detailspage"
              state={{ id: item.anime_id, anime: true }}
              key={item.anime_id}
            >
              <div className="card">
                <div className="card_img">
                  <img src={item.image} />
                </div>

                <div className="flex flex-row gap-x-2 mt-3">
                  {/* check index.css, for global use, vertical rectangle.. */}
                  <div className="rectangle_smaller"></div>

                  <p className="title">{item.title}</p>

                  {/*TODO you add favorite button, and for it to work properly */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className=" cards_container grid custom-grid-cols gap-x-6 gap-y-6 p-6  ">
          {manga_data.map((item) => (
            <Link
              to="/detailspage"
              state={{ id: item.manga_id, anime: false }}
              key={item.manga_id}
            >
              <div className="card">
                <div className="card_img">
                  <img src={item.image} />
                </div>

                <div className="flex flex-row gap-x-2 mt-3">
                  {/* check index.css, for global use, vertical rectangle.. */}
                  <div className="rectangle_smaller"></div>

                  <p className="title">{item.title}</p>

                  {/*TODO you add favorite button, and for it to work properly */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export { BrowseAniMan };
