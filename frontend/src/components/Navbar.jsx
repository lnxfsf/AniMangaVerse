import "../styles/navbar.scoped.scss";
import { Link } from "react-router-dom";

import React, { useState, useContext } from "react";

// on button, redirect to other component. like <Link>
import { useNavigate } from "react-router-dom";

import AuthContext from "../context/AuthContext";


const Navbar = () => {
  

  let { user, logoutUser } = useContext(AuthContext);

  
  // on button, redirect to other component. like <Link>
  const navigate = useNavigate();

  // on button, redirect to other component. like <Link>
  const handleRedirect = () => {
    navigate("/login");
  };

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

          {user ? (
            <>
              <p onClick={logoutUser}>Logout</p>

              {/* when its logged in. this should show. and in dropdown menu, there should be log out ! */}
              <img
                src="bxs-user-circle.svg"
                className="profile_icon  rounded-full  border-2 border-pinky"
              />
            </>
          ) : (
            <button className="login" onClick={handleRedirect}>
              LogIn
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export { Navbar };
