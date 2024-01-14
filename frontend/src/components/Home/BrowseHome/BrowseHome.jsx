import "../../../styles/BrowseHome.scoped.scss";


import React, { useContext } from "react";
import AuthContext from "../../../context/AuthContext";

import { Filter } from "./Filter";
import { Items } from "./Items";

const BrowseHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="main2 flex justify-center items-center ">

        <div className="basis-1/4">
    

            {/* filter  */}
            <Filter />

        </div>

        <div className="cards_container grow p-14">
    
    {/* other one */}

    
          <Items />



        </div>
      </div>
    </>
  );
};

export { BrowseHome };
