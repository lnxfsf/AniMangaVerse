

import "../../styles/FilterSearch.scoped.scss";

import { manga_data, genres, year, publishing, country_origin } from "../../data";

const FilterSearchManga = () => {
  return <>
  
  
        <div className="filter grid grid-cols-6 p-6 ">
          <div className="flex flex-col  justify-start ml-3 mt-3">
            <p className="filter_txt">Search:</p>

            <div className="search-container">
              <div className="input-container">
                <input type="text" placeholder="Search" />
                <button className="search-icon">
                  <i className="bx bx-search-alt-2"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col  justify-start ml-3 mt-3">
            <p className="filter_txt">Genres:</p>

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
            <p className="filter_txt">Year:</p>

            <select className="dropdown-select">
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
            <p className="filter_txt">Publishing Status:</p>

            <select className="dropdown-select">
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
            <p className="filter_txt">Country Of Origin:</p>

            <select className="dropdown-select">
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
        
        
  
  </>;
};

export { FilterSearchManga };