import "../styles/BrowseHome.css";

import { Link } from "react-router-dom";

import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';

// data
import { anime_data, genres, year, studio } from "../data";


const BrowseHome = () => {
  


  const { user } = useContext(AuthContext);

  
  return (
    <>
    

    {/* for testing, auth */}
    {/* This page should only be visible to users who are logged in, but for now, we'll hardcode an isAuthenticated value for demonstration purposes only */}

     
  {user ? (
      <p>You are logged in to the homepage!</p>
    ) : (
      <p>You are not logged in, redirecting...</p>
    )}



    
      <div className="main2 flex justify-center items-center ">
        {/* 
// TODO , and with data we get in search, we need to pass and send it to BE. but dont bother. wait first BE to finish what they have ...
        */}
        <div className="basis-1/4">
          <div className="filter flex flex-col border-2 border-pinky m-6 ">
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
        </div>

        <div className="cards_container grow p-14">
          <div className="  grid grid-cols-4 gap-x-6 gap-y-6  grow ">
            {/*individual card. for anime it shows */}
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

                    <p className="title8 secondary-left-line">{item.title}</p>

                    {/*TODO you add favorite button, and for it to work properly */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { BrowseHome };
