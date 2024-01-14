import "../../styles/Anime.scoped.scss";

import { anime_data, genres, year, studio, season, episodes } from "../../data";

const FilterSearch = () => {
  return <>
  
  
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
            <p className="filter_txt1">Studio:</p>

            <select className="dropdown-select1">
              <option selected disabled>
                Studio
              </option>

              {/*  choose studios */}

              {studio.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col  justify-start ml-3 mt-3">
            <p className="filter_txt1">Seasons:</p>

            <select className="dropdown-select1">
              <option selected disabled>
                Seasons
              </option>

              {/*  choose studios */}

              {season.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col  justify-start ml-3 mt-3">
            <p className="filter_txt1">Episodes:</p>

            <select className="dropdown-select1">
              <option selected disabled>
                Episodes
              </option>

              {/*  choose studios */}

              {episodes.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
  
  
  </>;
};

export { FilterSearch };
