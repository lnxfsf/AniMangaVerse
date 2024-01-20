import { Link } from "react-router-dom";
import { useState } from 'react';

import "../styles/FilterSearch.scoped.scss";
import "../styles/Explore.scoped.scss";

import { BrowseAniMan } from "../components/Browse/BrowseAniMan";
import { FilterSearchExplore } from "../components/Explore/FilterSearchExplore";
import { Search } from "../components/Search";

const Explore = () => {
  
  const [showFilter, setShowFilter] = useState(false);

  const handleShowFilterChange = (value) => {
    setShowFilter(value);
  };
  
  return (
    <>
      <div className="main">
    

    

      <div className="bg-blacky flex justify-center items-center ">
          <Search  onShowFilterChange={handleShowFilterChange}/>
      </div>

 {showFilter ? (
        <FilterSearchExplore />

     ) : null}   

        <div className="subtitle flex flex-row justify-between p-6 ">
          <h2>Trending Anime:</h2>
          <Link to="/anime">
            <p className="subtitle1">View more</p>
          </Link>
        </div>

        <BrowseAniMan isanime={true} />

        <div className="subtitle flex flex-row justify-between p-6">
          <h2>Trending Manga:</h2>
          <Link to="/manga">
            <p className="subtitle1 ">View more</p>
          </Link>
        </div>

        <BrowseAniMan isanime={false} />
      </div>
    </>
  );
};

export { Explore };
