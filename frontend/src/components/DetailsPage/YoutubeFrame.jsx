import "../../styles/DetailsPage.scoped.scss";




const YoutubeFrame = ({yt_trailer}) => {
  return <>
  
  
          {yt_trailer ? (
                

                
              <div className="w-full p-6 ml-28">
                {/* show trailer, only if it is not null ! whether it is anime or manga (some mangas have trailer... ) */}
                <iframe
                  width="80%"
                  height="315"
                  src={yt_trailer}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
                
                
            ) : (
              <div></div>
            )}
  </>
};

export { YoutubeFrame };