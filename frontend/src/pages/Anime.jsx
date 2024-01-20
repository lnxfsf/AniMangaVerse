
import "../styles/FilterSearch.scoped.scss";




import { useState,useEffect } from 'react';

import { FilterSearchAnime } from "../components/Anime/FilterSearchAnime";
import { BrowseAniMan } from "../components/Browse/BrowseAniMan";
import { Search } from "../components/Search";

const Anime = () => {
  
  
  const [showFilter, setShowFilter] = useState(false);

  const handleShowFilterChange = (value) => {
    setShowFilter(value);
  };

useEffect(() => {
    const handleResize = () => {
      setShowFilter(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  
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
