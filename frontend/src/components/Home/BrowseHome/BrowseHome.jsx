import "../../../styles/BrowseHome.scoped.scss";

import React, { useContext } from "react";
import AuthContext from "../../../context/AuthContext";


import { useState, useEffect } from 'react';


import { Filter } from "./Filter";
import { Items } from "./Items";
import { Search } from "../../Search";

const BrowseHome = () => {
  const { user } = useContext(AuthContext);

  
  // you'll just pass prop from child to parent, in child, just toogle that, and it shows/hides it. without using css..
  
  
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


      <div className="bg-blacky flex justify-center items-center ">
          <Search  onShowFilterChange={handleShowFilterChange}/>
      </div>
    

    
 {showFilter ? (

      <div className="main flex justify-center items-center ">
    
    
        <div className="md:basis-1/4 m-4 flex justify-center items-center">
          {/* filter */}
          <Filter />
        </div>
      
    

        {/* <div className="md:basis-1/4 m-4 flex justify-center items-center ">
    

    
          <Filter />
        </div> */}


    

        <div className="cards_container md:grow md:p-14">

          {/* when desktop layout */}
          <Items />
        </div>
      </div>
   
     ) : null}   


      <div className="cards_container_mob grow p-6">
        {/*  when mobile */}

        <Items />
      </div>
    </>
  );
};

export { BrowseHome };
