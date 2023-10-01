import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PopularItem } from "./PopularItem";
import { anime_data } from "../data";
import "../styles/PopularCarousel.css";


const PopularCarousel = () => {

  var curIndex = 0
  const [curAnime , setAnime] = useState(anime_data[curIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      curIndex++
      if(curIndex >= anime_data.length){
        curIndex = 0
      }
      setAnime(anime_data[curIndex])
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
     <Link
                  to="/detailspage"
                  state={{ id: curAnime.anime_id, anime: true }}
                  key={curAnime.anime_id}
      >
      <PopularItem  title={curAnime.title} subtitle={curAnime.subtitle} image={curAnime.image} seasons={curAnime.seasons} year={curAnime.start_date} age_restriction={curAnime.age_restriction} about={curAnime.desc} genres={curAnime.genre} />
    </Link></>
  );
}

export {PopularCarousel}