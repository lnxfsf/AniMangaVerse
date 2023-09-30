import { PopularCarousel } from "../components/PopularCarousel";
import { UpcomingCarousel } from "../components/UpcomingCarousel";
import { BrowseHome } from "../components/BrowseHome";

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
