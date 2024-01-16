import "../styles/EditUserProfile.scoped.scss";

import { useState } from "react";

const EditUserProfile = () => {
  // reactive variables
  const [username, setUsername] = useState("Jovan Popović");
  const [bio, setBio] = useState("");
  //TODO click on image, and get to insert new image from local storage. it's first cropped to fit, and then it's uploaded to server.
  const [profile_image, setProfile_image] = useState(
    "https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-user-icon-symbol-design-user-icon-isolated-design-png-image_1746919.jpg"
  );
  const [email] = useState("");
  const [passConfirm, setpassConfirm] = useState("");
  const [passNew, setpassNew] = useState("");
  const [passNewConfirm, setpassNewConfirm] = useState("");

  //TODO in this 'pass' you bring real password so it can be checked to
  const [pass, setPass] = useState("1234");

  // changes for <input> fields
  let handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  let handleBioChange = (event) => {
    setBio(event.target.value);
  };

  let handlePassConfirmChange = (event) => {
    setpassConfirm(event.target.value);
  };

  let handlePassNewChange = (event) => {
    setpassNew(event.target.value);
  };

  let handlePassNewConfirmChange = (event) => {
    setpassNewConfirm(event.target.value);
  };

  // when 'submit' button is clicked
  let updateProfile = () => {
    // password fields validation
    if (passNew !== "" || passNewConfirm !== "") {
      if (passConfirm == pass) {
        if (passNew !== passNewConfirm) {
          alert("Passwords don't match");
        } else {
          //if new password right, then assign it this new. and now handle it back to server
          setPass(passNew);

          // clear fields
          setpassConfirm("");
          setpassNew("");
          setpassConfirm("");
          setpassNewConfirm("");
        }
      } else {
        if (passConfirm == "") {
          alert("Enter your current password");
        } else if (passConfirm !== pass) {
          alert("Current password incorrect");
        }
      }
    } else if (passConfirm && passConfirm !== pass) {
      alert("Current password incorrect");
    }

    // if username field empty
    if (!username) {
      alert("Username can't be empty");
    }
  };

  return (
    <>
      <div className="main bg-blacky flex flex-col justify-center items-center">
        <div className="flex w-full p-32 pb-11 gap-x-4">
          <div className="flex flex-col gap-6 basis-1/2">
            <input
              className="input font-bold"
              type="text"
              value={username}
              placeholder="Name"
              onChange={handleUsernameChange}
            ></input>
            <textarea
              className="input1 h-56"
              type="text"
              placeholder="Bio"
              value={bio}
              onChange={handleBioChange}
            ></textarea>

            <input
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              disabled
            ></input>

            <input
              className="input"
              type="password"
              placeholder="Enter the current password"
              value={passConfirm}
              onChange={handlePassConfirmChange}
            ></input>

            <input
              className="input"
              type="password"
              placeholder="Enter a new password"
              value={passNew}
              onChange={handlePassNewChange}
            ></input>
          </div>
          <div className="flex basis-1/2 flex-col gap-y-36 ">
            {/* //TODO here image need to be scaled and cut before upload.. */}
            <img className="img_profile_edit" src={profile_image} />

            <input
              className="input mt-2"
              type="password"
              placeholder="Confirm the new password"
              value={passNewConfirm}
              onChange={handlePassNewConfirmChange}
            ></input>
          </div>
        </div>

        <button
          className="submit bg-pinky rounded-xl  self-center p-2 ml-16 mr-16 mb-12 "
          onClick={updateProfile}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export { EditUserProfile };
