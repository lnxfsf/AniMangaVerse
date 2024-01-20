

import "../../styles/FilterSearch.scoped.scss";

import { anime_data, manga_data, genres, year } from "../../data";

const FilterSearchExplore = () => {
  return <>
  


   {/*TODO apply this filter. should react 'onChange'. and results should be displayed on whole page (without these sections..)  */}
        <div className="filter grid custom-grid-cols p-6 ">
          <div className="flex flex-col  justify-start md:ml-3 mt-3">
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

          <div className="flex flex-col  justify-start md:ml-3 mt-3">
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

          <div className="flex flex-col  justify-start md:ml-3 mt-3">
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
        </div>

        

  </>;
};

export { FilterSearchExplore };
