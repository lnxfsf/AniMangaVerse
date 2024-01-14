import "../../styles/Anime.scoped.scss";

import { anime_data, genres, year, studio, season, episodes } from "../../data";
import { Link } from "react-router-dom";

const BrowseAnime = () => {
  return (
    <>
      <div className=" cards_container1 grid grid-cols-6 gap-x-6 gap-y-6 p-6  ">
        {anime_data.map((item) => (
          <Link
            to="/detailspage"
            state={{ id: item.anime_id, anime: true }}
            key={item.anime_id}
          >
            <div className="card">
              <div className="card_img1">
                <img src={item.image} />
              </div>

              <div className="flex flex-row gap-x-2 mt-3">
                {/* check index.css, for global use, vertical rectangle.. */}
                <div className="rectangle_smaller"></div>

                <p className="title8">{item.title}</p>

                {/*TODO you add favorite button, and for it to work properly */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export { BrowseAnime };
