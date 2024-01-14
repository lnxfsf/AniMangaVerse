import { PopularCarousel } from "../components/Home/PopularCarousel/PopularCarousel";
import { UpcomingCarousel } from "../components/Home/UpcomingCarousel";
import { BrowseHome } from "../components/Home/BrowseHome/BrowseHome";

const Home = () => {
  return (
    <>
      <PopularCarousel />
      <UpcomingCarousel />
      <BrowseHome />
    </>
  );
};

export { Home };
