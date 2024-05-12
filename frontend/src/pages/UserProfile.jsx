import "../styles/UserProfile.scoped.scss";

import { UserProfileHeader } from "../components/UserProfile/UserProfileHeader";
import { Favorites } from "../components/UserProfile/Favorites";

const UserProfile = () => {
  
  //ovo je za uzimanje favorites current user. kao i ostala polja
  let tokens =  JSON.parse(localStorage.getItem('authTokens'))
  if (tokens){
    var user_id = tokens.data.user_id
    var username = tokens.data.username
    var bio = tokens.data.bio
    var profile_image =  tokens.data.profile_image


  }else{
    var user_id = null
    var bio = ""
    var profile_image = ""
  }
    
  return (
    <>
      <div className="bg-blacky w-full h-auto">
        <UserProfileHeader
          username={username}
          bio={bio}
          profile_image={profile_image}
        />

        <div className="flex flex-col p-16">
          <h1 className="fav_header border-pinky border-l-2 pl-2">
            Recent Favorites
          </h1>

          <Favorites user_id={user_id} />
        </div>
      </div>
    </>
  );
};

export { UserProfile };
