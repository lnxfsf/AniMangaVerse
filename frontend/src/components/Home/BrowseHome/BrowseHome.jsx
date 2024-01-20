import "../../../styles/BrowseHome.scoped.scss";


import React, { useContext } from "react";
import AuthContext from "../../../context/AuthContext";

import { Filter } from "./Filter";
import { Items } from "./Items";

const BrowseHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="main flex justify-center items-center ">

        <div className="md:basis-1/4 m-4 flex justify-center items-center ">
    

            {/* filter  */}
            <Filter />

        </div>
    

     <div className="cards_container md:grow md:p-14">
    
    {/* other one */}

    
          <Items />



        </div>


    

       
      </div>

     <div className="cards_container_mob grow p-6">
    
    {/* other one */}

    
          <Items />



        </div>

    </>
  );
};

export { BrowseHome };
