
import "../styles/FilterSearch.scoped.scss";

import { useState } from 'react';

import { FilterSearchManga } from "../components/Manga/FilterSearchManga";
import { BrowseAniMan } from "../components/Browse/BrowseAniMan";
import { Search } from "../components/Search";


const Manga = () => {
  
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
        <FilterSearchManga />
   
        
     ) : null}   
    
    
        <BrowseAniMan isanime={false} />
      </div>
    </>
  );
};

export { Manga };
