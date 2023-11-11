import "../styles/Explore.css";
import { Link } from "react-router-dom";

// don't mix anime and manga in one list..
// TODO when it fetches it, then it fetches first from the manga table into a json object, and then anime in it's list..

import { anime_data, manga_data, genres, year } from "../data";

const Explore = () => {
  return (
    <>
      <div className="main3">
        {/*TODO apply this filter. should react 'onChange'. and results should be displayed on whole page (without these sections..)  */}
        <div className="filter1 grid grid-cols-6 p-6 ">
          <div className="flex flex-col  justify-start ml-3 mt-3">
            <p className="filter_txt1">Search:</p>

            <div className="search-container">
              <div className="input-container1">
                <input type="text" placeholder="Search" />
                <button className="search-icon">
                  <i className="bx bx-search-alt-2"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col  justify-start ml-3 mt-3">
            <p className="filter_txt1">Genres:</p>

            <select className="dropdown-select_g1" multiple>
              {/* all genres possible */}

              {genres.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col  justify-start ml-3 mt-3">
            <p className="filter_txt1">Year:</p>

            <select className="dropdown-select1">
              <option disabled selected>
                Year
              </option>
              {/*  years from 1940 to 2023 */}

              {year.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="subtitle flex flex-row justify-between p-6">
          <h2>Trending Anime:</h2>
          <Link to="/anime">
            <p className="subtitle1">View more</p>
          </Link>
        </div>

        <div className=" cards_container1 grid grid-cols-6 gap-x-6 gap-y-6 p-6  ">
          {anime_data.map((item) => (
            <Link
              to="/detailspage"
              state={{ id: item.anime_id, anime: true }}
              key={item.anime_id}
            >
              <div className="card">
                <div className="card_img2">
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

        <div className="subtitle flex flex-row justify-between p-6">
          <h2>Trending Manga:</h2>
          <Link to="/manga">
            <p className="subtitle1 ">View more</p>
          </Link>
        </div>

        <div className=" cards_container1 grid grid-cols-6 gap-x-6 gap-y-6 p-6  ">
          {manga_data.map((item) => (
            <Link
              to="/detailspage"
              state={{ id: item.manga_id, anime: false }}
              key={item.manga_id}
            >
              <div className="card">
                <div className="card_img2">
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
      </div>
    </>
  );
};

export { Explore };
