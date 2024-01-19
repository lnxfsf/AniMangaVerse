import "../styles/navbar.scoped.scss";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Hidden,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import SwipeableDrawer from "@mui/material/Drawer";

import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import MenuIcon from "@mui/icons-material/Menu";

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

  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        {/* <Toolbar sx={{bgcolor: "#1e1e1e", backg-image:linear-gradient(-45deg, #EA1179 0%, #75083c 100%) }} > */}
        <Toolbar sx={{ bgcolor: "#1e1e1e" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              width: 300,
            }}
          >
            AniManga Verse
          </Typography>

          <nav className="flex flex-wrap gap-8 justify-center items-center hidden sm:flex">
            <Link to="/" className="nav_btns">
              Home
            </Link>
            <Link to="/anime" className="nav_btns">
              Anime
            </Link>
            <Link to="/manga" className="nav_btns">
              Manga
            </Link>
            <Link to="/explore" className="nav_btns">
              Explore
            </Link>
            {/* Conditional user elements */}
          </nav>

          {user ? (
            <>
              <p onClick={logoutUser}>Logout</p>
            </>
          ) : (
            <Button color="inherit" onClick={handleRedirect}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#1e1e1e",
            color: "white",
          },
        }}
      >
        {/* <Link to="/" className="nav_btns">Home</Link>
          <Link to="/anime" className="nav_btns">Anime</Link>
          <Link to="/manga" className="nav_btns">Manga</Link>
          <Link to="/explore" className="nav_btns">Explore</Link> */}

        <ListItem sx={{mt:1}}>
          <Link to="/" className="nav_btns"  onClick={() => setOpen(false)}>

          <HomeIcon sx={{mr:1 ,mb:0.5}}/>
            Home
          </Link>
        </ListItem>

        <ListItem  >
          
          <Link to="/anime" className="nav_btns" onClick={() => setOpen(false)} >
<LiveTvIcon sx={{mr:1 ,mb:0.5}}/>
            Anime
          </Link>
        </ListItem>

        <ListItem  >
          <Link to="/manga" className="nav_btns" onClick={() => setOpen(false)}>

          <MenuBookIcon sx={{mr:1 ,mb:0.5 }}/>
            Manga
          </Link>
        </ListItem>

        <ListItem >
          <Link
            to="/explore"
            className="nav_btns"
            onClick={() => setOpen(false)}
          >

          <ExploreIcon sx={{mr:1,mb:0.5 }}/>
            Explore
          </Link>
        </ListItem>
      </SwipeableDrawer>
    </>
  );
};

export { Navbar };

// <>
//     <nav className="grid grid-cols-2 justify-center">
//       <div className="flex flex-cols-2  justify-start items-center gap-6 ml-16">
//         <Link className="first_img " to="/">
//           <img src="doggy.png" />
//         </Link>
//         <Link className="first_h2 nav_btns" to="/">
//           AniManga Verse
//         </Link>
//       </div>

//       <div className="second flex flex-cols-5 justify-center items-center gap-8 ">
//         <Link to="/" className="nav_btns">Home</Link>
//         <Link to="/anime" className="nav_btns">Anime</Link>
//         <Link to="/manga" className="nav_btns">Manga</Link>
//         <Link to="/explore"  className="nav_btns">Explore</Link>

//         {/*in index.html, boxicons, imported as css. use it as 'Font' */}

//         {user ? (
//           <>
//             <p onClick={logoutUser}>Logout</p>

//             {/* when its logged in. this should show. and in dropdown menu, there should be log out ! */}
//             <img
//               src="bxs-user-circle.svg"
//               className="profile_icon  rounded-full  border-2 border-pinky"
//             />
//           </>
//         ) : (
//           <button className="login" onClick={handleRedirect}>
//             LogIn
//           </button>
//         )}
//       </div>
//     </nav>

//   </>
