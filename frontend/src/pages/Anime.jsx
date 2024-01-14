import "../styles/Anime.scoped.scss";

import { FilterSearch } from "../components/Anime/FilterSearch";
import { BrowseAnime } from "../components/Anime/BrowseAnime";


const Anime = () => {
  return (
    <>
      <div className="main3">
        <FilterSearch />

        {/* TODO cards. try to extract ONE for all 3. anime, manga, and explore ! and all to use same .css scoped file if possible ! because this one you copy/pasted ! and just need little tweak here and there, and this can be smaller and more compact. so easier for responsive design later...  */}
        <BrowseAnime />
      </div>
    </>
  );
};

export { Anime };
