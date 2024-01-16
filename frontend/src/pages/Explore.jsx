import { Link } from "react-router-dom";

import "../styles/FilterSearch.scoped.scss";
import "../styles/Explore.scoped.scss";

import { BrowseAniMan } from "../components/Browse/BrowseAniMan";
import { FilterSearchExplore } from "../components/Explore/FilterSearchExplore";

const Explore = () => {
  return (
    <>
      <div className="main">
        <FilterSearchExplore />

        <div className="subtitle flex flex-row justify-between p-6 ">
          <h2>Trending Anime:</h2>
          <Link to="/anime">
            <p className="subtitle1">View more</p>
          </Link>
        </div>

        <BrowseAniMan isanime={true} />

        <div className="subtitle flex flex-row justify-between p-6">
          <h2>Trending Manga:</h2>
          <Link to="/manga">
            <p className="subtitle1 ">View more</p>
          </Link>
        </div>

        <BrowseAniMan isanime={false} />
      </div>
    </>
  );
};

export { Explore };
