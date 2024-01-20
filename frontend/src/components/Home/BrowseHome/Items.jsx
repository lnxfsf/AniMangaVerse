
import { anime_data, genres, year, studio } from "../../../data";
import "../../../styles/BrowseHome.scoped.scss";

import { Link } from "react-router-dom";

const Items = () => {
    

    
   return <>

          <div className="  grid   custom-grid-cols  gap-x-6 gap-y-6  grow ">

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

                    <p className="title secondary-left-line">{item.title}</p>

                    {/*TODO you add favorite button, and for it to work properly */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
    
   </> 
} 

export {Items};