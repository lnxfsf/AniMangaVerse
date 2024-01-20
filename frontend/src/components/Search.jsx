
import "../styles/BrowseHome.scoped.scss";

import  { useState } from 'react';

import { IconButton,Button } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';

const Search = ({onShowFilterChange}) => {
    

  const [showFilter, setShowFilter] = useState(false);

  const toggleShowFilter = () => {
    const newValue = !showFilter;
    setShowFilter(newValue);
    onShowFilterChange(newValue);
  };

    
    return (

        <>
        
      <div className="flex items-center  justify-center ml-3 mt-3 mb-6 filter_btn">
        

              <div className="search-container">
                <div className="input-container">
                  <input type="text" placeholder="Search" />
                  <button className="search-icon">
                    <i className="bx bx-search-alt-2"></i>
                  </button>
                </div>
              </div>
        




            </div>


      <div className="flex items-center  justify-start ml-3 mt-5 mr-3 mb-6 filter_btn ">
        <IconButton sx={{bgcolor: "#e5c9d9", color: "#1e1e1e" , borderRadius: 25,  border: `1px solid #ea1179`,   '&:hover': { background: "rgb(234, 17, 121)", color: "white"    }  }} onClick={toggleShowFilter}  ><FilterListIcon/></IconButton>

        </div>
        


        
        </>
    )

    
}


export {Search}