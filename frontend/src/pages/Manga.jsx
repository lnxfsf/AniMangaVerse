import "../styles/Manga.scoped.scss";
import { Link } from "react-router-dom";

import { manga_data, genres, year, publishing, country_origin } from "../data";

const Manga = () => {
  return (
    <>
      <div className="main3">
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

          <div className="flex flex-col  justify-start ml-3 mt-3">
            <p className="filter_txt1">Publishing Status:</p>

            <select className="dropdown-select1">
              <option selected disabled>
                Publishing Status
              </option>

              {/*  choose studios */}

              {publishing.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col  justify-start ml-3 mt-3">
            <p className="filter_txt1">Country Of Origin:</p>

            <select className="dropdown-select1">
              <option selected disabled>
                Country Of Origin
              </option>

              {/*  choose studios */}

              {country_origin.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className=" cards_container1 grid grid-cols-6 gap-x-6 gap-y-6 p-6  ">
          {manga_data.map((item) => (
            <Link
              to="/detailspage"
              state={{ id: item.manga_id, anime: false }}
              key={item.manga_id}
            >
              <div className="card">
                <div className="card_img3">
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

export { Manga };
