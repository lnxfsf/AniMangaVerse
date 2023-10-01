import { PopularItem } from "./PopularItem";
import "../styles/PopularCarousel.css";


const PopularCarousel = () => {
  let title = "The Seven Deadly Sins"
  let subtitle = "Dragon’s Judgment"
  let seasons = 5
  let year = 2015
  let age_restriction = 13
  let about = "When a kingdom is taken over by tyrants, the deposed princess begins a quest to find a disbanded group of evil knights to help take back her realm."
  let genres = "action;fantasy;adventure"
  let image = "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRizHOisWbEgggecyUNDUYX2ZBS_-TL9INEf8g1s1q_OvLXm_KvjDgzzJqg74bpQ-g5W4g3OI3SpJ8q4JJCVEjmDE0O_xWP7pHBG.jpg?r=5a5"
  return (
    <>
      <PopularItem  title={title} subtitle={subtitle} image={image} seasons={seasons} year={year} age_restriction={age_restriction} about={about} genres={genres} />
    </>
  );
}

export {PopularCarousel}