import { PopularCarousel } from "../components/PopularCarousel";
import { UpcomingCarousel } from "../components/UpcomingCarousel";
import { BrowseHome } from "../components/BrowseHome";

export function Home() {
  return (
    <>
      <PopularCarousel />
      <UpcomingCarousel />
      <BrowseHome />
    </>
  );
}



