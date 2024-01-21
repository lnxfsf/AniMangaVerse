
import "../../../styles/UpcomingCarousel.scoped.scss";
import { Link } from "react-router-dom";



const Item = ({item,index }) => {
    

  //convert date to 'Month Year' string..
  let convertDate = (start_date) => {
    let dateObj = new Date(start_date);

    let month = dateObj.toLocaleString("en-US", { month: "long" });
    let year = dateObj.getFullYear();

    return `${month} ${year}`;
  };

    return (

        <>
        
              <Link
                to="/detailspage"
                state={{ id: item.anime_id, anime: true }}
                key={item.anime_id}
              >
              

              
                <div
                  className="item flex flex-col justify-start items-stretch "
                  key={index}
              
                  
                >

                  {/* image */}
                  {/* to scale it well you need to put in <div> contaiener. remove width and height and put ' object-fit: contain;' and on <div> put 'overflow: hidden;'*/}
                  <div className="item_div">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="line"> </div>

                  <div className="inner flex flex-col gap-2 justify-start items-start ml-2 mt-2 md:ml-4 md:mt-4">
                    <h1>{item.title}</h1>
                    <p>Season {item.seasons}</p>
                  </div>

                  <p className="release_date md:mt-16 mb-4 mt-4  md:mt-26 mb:mb-8 ml-2 md:ml-4  ">
                    {convertDate(item.start_date)}{" "}
                  </p>
                </div>
              </Link>
              
        </>
    )
    

}


export {Item}