import "../styles/EditUserProfile.css";

import { useState } from "react";

const EditUserProfile = () => {
  // reactive variables
  const [username, setUsername] = useState("hi");
  const [bio, setBio] = useState("");
  const [profile_image, setProfile_image] = useState(
    "https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-user-icon-symbol-design-user-icon-isolated-design-png-image_1746919.jpg"
  );
  const [email, setEmail] = useState("");
  const [pass_confirm, setPass_confirm] = useState("");
  const [pass_new, setPass_new] = useState("");
  const [pass_new_confirm, setPass_new_confirm] = useState("");

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
    setPass_confirm(event.target.value);
  };

  let handlePassNewChange = (event) => {
    setPass_new(event.target.value);
  };

  let handlePassNewConfirmChange = (event) => {
    setPass_new_confirm(event.target.value);
  };

  // when 'submit' button is clicked
  let updateProfile = () => {
    // password fields validation
    if (pass_new !== "" || pass_new_confirm !== "") {
      if (pass_confirm == pass) {
        if (pass_new !== pass_new_confirm) {
          alert("Passwords don't match");
        } else {
          //if new password right, then assign it this new. and now handle it back to server
          setPass(pass_new);

          // clear fields
          setPass_confirm("");
          setPass_new("");
          setPass_confirm("");
          setPass_new_confirm("");
        }
      } else {
        if (pass_confirm == "") {
          alert("Enter your current password");
        } else if (pass_confirm !== pass) {
          alert("Current password incorrect");
        }
      }
    } else if (pass_confirm && pass_confirm !== pass) {
      alert("Current password incorrect");
    }

    // if username field empty
    if (!username) {
      alert("Username can't be empty");
    }
  };

  return (
    <>
      <div className="main10 bg-blacky flex flex-col justify-center items-center">
        <div className="flex w-full p-32 pb-11 gap-x-4">
          <div className="flex flex-col gap-6 basis-1/2">
            <input
              className="input3 font-bold"
              type="text"
              value={username}
              placeholder="Name"
              onChange={handleUsernameChange}
            ></input>
            <textarea
              className="input4 h-56"
              type="text"
              placeholder="Bio"
              value={bio}
              onChange={handleBioChange}
            ></textarea>

            <input
              className="input3"
              type="email"
              placeholder="Email"
              value={email}
              disabled
            ></input>

            <input
              className="input3"
              type="password"
              placeholder="Enter the current password"
              value={pass_confirm}
              onChange={handlePassConfirmChange}
            ></input>

            <input
              className="input3"
              type="password"
              placeholder="Enter a new password"
              value={pass_new}
              onChange={handlePassNewChange}
            ></input>
          </div>
          <div className="flex basis-1/2 flex-col gap-y-36 ">
            {/* //TODO here image need to be scaled and cut before upload.. */}
            <img className="img_profile_edit" src={profile_image} />

            <input
              className="input3 mt-2"
              type="password"
              placeholder="Confirm the new password"
              value={pass_new_confirm}
              onChange={handlePassNewConfirmChange}
            ></input>
          </div>
        </div>

        <button
          className="submit1 bg-pinky rounded-xl  self-center p-2 ml-16 mr-16 mb-12 "
          onClick={updateProfile}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export { EditUserProfile };
