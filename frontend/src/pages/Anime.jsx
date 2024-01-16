
import "../styles/FilterSearch.scoped.scss";

import { FilterSearchAnime } from "../components/Anime/FilterSearchAnime";
import { BrowseAniMan } from "../components/Browse/BrowseAniMan";

const Anime = () => {
  return (
    <>
      <div className="main">
        <FilterSearchAnime />
        <BrowseAniMan isanime={true} />
      </div>
    </>
  );
};

export { Anime };
