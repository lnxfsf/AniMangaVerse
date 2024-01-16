import "../styles/UserProfile.scoped.scss";

import { UserProfileHeader } from "../components/UserProfile/UserProfileHeader";
import { Favorites } from "../components/UserProfile/Favorites";

const UserProfile = () => {
  // TODO this is what you pass into. username, bio, profile_image
  let username = "Jovan Popović";
  let bio = "Lorem Ipsum is simply dummy text of the printing.";
  let profile_image =
    "https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-user-icon-symbol-design-user-icon-isolated-design-png-image_1746919.jpg";

  // TODO this is dummy 'user_id' . this is passed to here for 'favorites'. you need to use passed 'user_id'
  let user_id = 1;

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
