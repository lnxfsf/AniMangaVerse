
import "../styles/FilterSearch.scoped.scss";




import { useState } from 'react';

import { FilterSearchAnime } from "../components/Anime/FilterSearchAnime";
import { BrowseAniMan } from "../components/Browse/BrowseAniMan";
import { Search } from "../components/Search";

const Anime = () => {
  
  
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
        <FilterSearchAnime />
    
     ) : null}   
    
        <BrowseAniMan isanime={true} />
      </div>
    </>
  );
};

export { Anime };
