
import {studio, anime_data, genres, year } from "../../../data";
import "../../../styles/BrowseHome.scoped.scss";


const Filter = () => {
    

    
   return <>
        
        {/* 
// TODO , and with data we get in search, we need to pass and send it to BE. but dont bother. wait first BE to finish what they have ...
        */}


          <div className="filter flex flex-col border-2 border-pinky md:m-6 ">
            <h1 className="self-center m-4 mt-8 ">Browse</h1>

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

              <select className="dropdown-select_g" multiple>
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
              <p className="filter_txt">Studio:</p>

              <select className="dropdown-select">
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

            <button className="submit bg-pinky rounded-xl  self-center p-2 m-3 mt-6 mb-4">
              Submit
            </button>
          </div>
        
   </> 
} 

export {Filter};