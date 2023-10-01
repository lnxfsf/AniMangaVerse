import "../styles/UserProfile.css";
import { Link } from "react-router-dom";

import { favorites, anime_data, manga_data } from "../data";

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

        <div className="flex flex-col p-16">
          <h1 className="fav_header border-pinky border-l-2 pl-2">
            Recent Favorites
          </h1>

         
          {
            // we go throught 'favorites' data, to check only for this user. 'user_id' which he have favorites

            favorites.map((item) => {
              if (item.user_id == user_id) {
                {
                  /*show and render anime and manga */
                }

                {
                  /* if anime_id is not null then it's anime  */
                }
                if (item.anime_id) {
                  console.log(item.anime_id);
                  console.log(anime_data[item.anime_id - 1]);
                  console.log(anime_data[item.anime_id - 1].title);

                  return (
                    <>
                      {/*item */}
                      <Link
                        to="/detailspage"
                        state={{ id: item.anime_id, anime: true }}
                        key={item.anime_id}
                      >
                        <div
                          className="flex border-pinky h-28 border-2 rounded-2xl justify-start items-center overflow-hidden mt-8"
                          style={{
                            backgroundImage: `url("${
                              anime_data[item.anime_id - 1].background_image
                            }")`,

                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <div>
                            <h2 className="fav_header p-20 mr-32 ">
                              {anime_data[item.anime_id - 1].title}
                            </h2>
                          </div>
                        </div>
                      </Link>

                      {/*item */}
                    </>
                  );
                } else if (item.manga_id) {
                  console.log(item.manga_id);
                  console.log(manga_data[item.manga_id - 1]);
                  console.log(manga_data[item.manga_id - 1].title);

                  return (
                    <>
                      {/*item */}

                      <Link
                        to="/detailspage"
                        state={{ id: item.manga_id, anime: false }}
                        key={item.manga_id}
                      >
                        <div
                          className="flex border-pinky h-28 border-2 rounded-2xl justify-start items-center overflow-hidden mt-8"
                          style={{
                            backgroundImage: `url("${
                              manga_data[item.manga_id - 1].background_image
                            }")`,

                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <div>
                            <h2 className="fav_header p-20 mr-32 ">
                              {manga_data[item.manga_id - 1].title}
                            </h2>
                          </div>
                        </div>
                      </Link>

                      {/*item */}
                    </>
                  );
                } else {
                  console.log("nothing");
                }
              }
            })
          }
        </div>
      </div>
    </>
  );
};

export { UserProfile };
