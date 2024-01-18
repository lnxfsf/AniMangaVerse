import "../../styles/footer.scoped.scss";
import { Link } from "react-router-dom";

const SecondBox = () => {
  return (
    <>
      <div>
    

        <div className="small_header">
          {/* check index.css, for global use, vertical rectangle.. */}
          <h3 className=" secondary-left-line non_clickable text-2xl md:text-3xl ">Navigation:</h3>
        </div>

        <ul  >
          <li>
            <Link to="/" className="nav_btns text-base md:text-xl ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/anime" className="nav_btns text-base md:text-xl">
              Anime
            </Link>
          </li>
          <li>
            <Link to="/manga" className="nav_btns text-base md:text-xl">
              Manga
            </Link>
          </li>
          <li>
            <Link to="/explore" className="nav_btns text-base md:text-xl">
              Explore
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export { SecondBox };
