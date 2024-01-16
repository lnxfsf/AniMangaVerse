
import "../styles/FilterSearch.scoped.scss";

import { FilterSearchManga } from "../components/Manga/FilterSearchManga";
import { BrowseAniMan } from "../components/Browse/BrowseAniMan";

const Manga = () => {
  return (
    <>
      <div className="main">
        <FilterSearchManga />
        <BrowseAniMan isanime={false} />
      </div>
    </>
  );
};

export { Manga };
