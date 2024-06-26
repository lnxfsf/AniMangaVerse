import "../../styles/DetailsPage.scoped.scss";
import { useLocation } from "react-router-dom";

import { getDataObject } from "./getDataObject.js";

import { Header } from "./Header";
import { LeftBox } from "./LeftBox";
import { MainContent } from "./MainContent";

const DetailsPage = () => {
  // this is prop from  UpcomingCarousel (anime_id), passed throught <Link>
  const location = useLocation();
  const { id, anime } = location.state;
  



  // we get all variables from external function (imported .js)
  var dataObject = getDataObject(id, anime);

  return (
    <>
      <div className="main">
        {/* upper part. header */}
        <Header data={dataObject} />

        <div className="flex w-full h-auto img">
          {/* left box */}
          <LeftBox data={dataObject} anime={anime} />

          {/* main content */}
          <MainContent data={dataObject} />
        </div>
    


      <div className=" img1">
          <MainContent data={dataObject} />

          <LeftBox data={dataObject} anime={anime} />
      </div> 


    
      </div>
    </>
  );
};

export { DetailsPage };
