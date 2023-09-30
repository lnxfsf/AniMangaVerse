import "../styles/navbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <nav className="grid grid-cols-2 justify-center">
        <div className="flex flex-cols-2  justify-start items-center gap-6 ml-16">
          <Link className="first_img " to="/">
            <img src="BabyBananya.png" />
          </Link>
          <Link className="first_h2 " to="/">
            AniManga Verse
          </Link>
        </div>

        <div className="second flex flex-cols-5 justify-center items-center gap-8 ">
          <Link to="/">Home</Link>
          <Link to="/anime">Anime</Link>
          <Link to="/manga">Manga</Link>
          <Link to="/explore">Explore</Link>

          {/*in index.html, boxicons, imported as css. use it as 'Font' */}

          {/*   @Dragan  , here, this is for showing profile and dropdown ..  

            <img src="bxs-user-circle.svg"  className="profile_icon  rounded-full  border-2 border-pinky"/>
 */}

          <button className="login">LogIn</button>
        </div>
      </nav>
    </>
  );
}
