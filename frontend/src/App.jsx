import { Routes, Route, Navigate } from "react-router-dom";

// import components
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Anime } from "./pages/Anime";
import { Manga } from "./pages/Manga";
import { Explore } from "./pages/Explore";
import { DetailsPage } from "./components/DetailsPage";
import { PageNotFound } from "./pages/PageNotFound";
import { EditUserProfile } from "./pages/EditUserProfile";
import { UserProfile } from "./pages/UserProfile";


import { Login } from "./pages/Login";


// TODO, so, you need to remove this from here, this is just so it works. but later on, you remove it from here. 
import PrivateRoute from './utils/PrivateRoute'





const App = () => {
  return (
    <>
      {/*it will always show navbar */}
      <Navbar />

      <Routes>
        <Route path="/" element={ <PrivateRoute><Home /> </PrivateRoute>} />
        <Route path="/anime" element={ <Anime />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/detailspage" element={<DetailsPage />} />

        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />

        <Route path="/edituserprofile" element={<EditUserProfile />} />
        <Route path="/userprofile" element={<UserProfile />} />
    



        <Route path="/login" element={<Login />} />
    

    
      </Routes>

      {/*it will always show footer */}

      <Footer />
    </>
  );
};

export { App };
