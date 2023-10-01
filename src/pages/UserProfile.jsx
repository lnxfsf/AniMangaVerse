import "../styles/UserProfile.css";

import { useState } from "react";

const UserProfile = () => {
  const [username, setUsername] = useState("Jovan Popović");

  const [bio, setBio] = useState(
    "Lorem Ipsum is simply dummy text of the printing."
  );

  const [profile_image, setProfile_image] = useState(
    "https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-user-icon-symbol-design-user-icon-isolated-design-png-image_1746919.jpg"
  );

  return (
    <>
      <div className="bg-blacky w-full h-auto">
        <div className="img88 flex ">
          <div className="basis-1/2 flex justify-center items-center">
            <div className="flex p-24">
              <div className="basis-1/4">
                <img className="img_profile" src={profile_image} />
              </div>

              <div className="grow flex flex-col gap-y-1">
                <h2 className="username ml-4 ">{username}</h2>
                <p className="bio ml-4">{bio}</p>
              </div>
            </div>
          </div>
        </div>
      




      <div className="flex flex-col p-16">

            
            <h1 className="fav_header border-pinky border-l-2 pl-2">Recent Favorites</h1>
      

      


      </div>








      
      </div>
    </>
  );
};

export { UserProfile };
