import "../styles/navbar.scoped.scss";
import { Link } from "react-router-dom";





import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  ListItem,
  Hidden,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Tooltip,
  SwipeableDrawer,
} from "@mui/material";

import {
  Settings,
  Logout,
  Star as StarIcon,
  Home as HomeIcon,
  Explore as ExploreIcon,
  LiveTv as LiveTvIcon,
  MenuBook as MenuBookIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";



import React, { useState, useContext } from "react";

// on button, redirect to other component. like <Link>
import { useNavigate } from "react-router-dom";

import AuthContext from "../context/AuthContext";


const Navbar = () => {
  let { user, logoutUser } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);

  const handleClick = (event) => {
    // ovo ako kliknes sa strane
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // on button, redirect to other component. like <Link>
  const navigate = useNavigate();

  // on button, redirect to other component. like <Link>
  const handleRedirect = () => {
    navigate("/login");
  };

  const [open, setOpen] = useState(false);

  // to get username, picture..
  let tokens = JSON.parse(localStorage.getItem("authTokens"));
  if (tokens) {
    var username = tokens.data.username;
    var profile_image = tokens.data.profile_image;
  }

  function userProfile() {}

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

          <Hidden mdDown>
            <IconButton variant="text" sx={{ mr: 2 }}>
              <Link className="first_img " to="/">
                <img src="doggy.png" />
              </Link>
            </IconButton>
          </Hidden>

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
            <Link className="first_h2 nav_btns" to="/">
              AniManga Verse
            </Link>
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
              {/* <p onClick={logoutUser}>Logout</p> 
              <Button color="inherit" onClick={logoutUser}>
                Logout
              </Button>
            */}

              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open1 ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open1 ? "true" : undefined}
                >
                  {profile_image ===
                  "https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-user-icon-symbol-design-user-icon-isolated-design-png-image_1746919.jpg" ? (
                    <Avatar sx={{ width: 32, height: 32 }}>
                      {username.charAt(0).toUpperCase()}
                    </Avatar>
                  ) : (
                    <Avatar
                      sx={{ width: 32, height: 32 }}
                      src={profile_image}
                    />
                  )}
                </IconButton>

                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open1}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem
                    onClick={userProfile}
                    to="/userprofile"
                    component={Link}
                  >
                    {profile_image ===
                    "https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-user-icon-symbol-design-user-icon-isolated-design-png-image_1746919.jpg" ? (
                      <Avatar sx={{ width: 32, height: 32 }}>
                        {username.charAt(0).toUpperCase()}
                      </Avatar>
                    ) : (
                      <Avatar
                        sx={{ width: 32, height: 32 }}
                        src={profile_image}
                      />
                    )}

                    {username}
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    onClick={handleClose}
                    to="/userprofile"
                    component={Link}
                  >
                    <ListItemIcon>
                      <StarIcon fontSize="small" />
                    </ListItemIcon>
                    Favorites
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    to="/edituserprofile"
                    component={Link}
                  >
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={logoutUser}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Tooltip>
            </>
          ) : (
            // <Button   sx={{bgcolor: "#e5c9d9", color: "#1e1e1e" , borderRadius: 25,  border: `1px solid #ea1179`,   '&:hover': { background: "rgb(234, 17, 121)", color: "white"    }  }} onClick={handleRedirect}>
            //
            //   Login
            // </Button>
            //
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

        <ListItem sx={{ mt: 1 }}>
          <Link to="/" className="nav_btns" onClick={() => setOpen(false)}>
            <HomeIcon sx={{ mr: 1, mb: 0.5 }} />
            Home
          </Link>
        </ListItem>

        <ListItem>
          <Link to="/anime" className="nav_btns" onClick={() => setOpen(false)}>
            <LiveTvIcon sx={{ mr: 1, mb: 0.5 }} />
            Anime
          </Link>
        </ListItem>

        <ListItem>
          <Link to="/manga" className="nav_btns" onClick={() => setOpen(false)}>
            <MenuBookIcon sx={{ mr: 1, mb: 0.5 }} />
            Manga
          </Link>
        </ListItem>

        <ListItem>
          <Link
            to="/explore"
            className="nav_btns"
            onClick={() => setOpen(false)}
          >
            <ExploreIcon sx={{ mr: 1, mb: 0.5 }} />
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
