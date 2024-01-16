import "../../styles/UserProfile.scoped.scss";

const UserProfileHeader = ({username,bio,profile_image}) => {
  return (
    <>
      <div className="img_profile_back flex ">
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
    </>
  );
};

export { UserProfileHeader };
