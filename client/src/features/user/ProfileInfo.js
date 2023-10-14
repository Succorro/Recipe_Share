import React from "react";
import { useSelector } from "react-redux";

function ProfileInfo({ setForm }) {
  const user = useSelector((state) => state.user.user);
  const { username, image, email, first_name, last_name, bio } = user;
  return (
    <div>
      <div>
        <div className="avatar">
          <div className="w-24 rounded-full not-prose">
            <img
              src="https://static.wikia.nocookie.net/disney/images/5/56/Profile_-_Rex.jpeg"
              alt="look"
            />
          </div>
        </div>

        <img style={{ maxWidth: "200px" }} src={image} alt="user" />
        <h1>{username}</h1>
      </div>
      <div>
        <h3>Bio:</h3>
        <p>{bio}</p>
      </div>
      <button
        className="btn btn-warning"
        onClick={() => setForm(false)}
        type="click"
      >
        Edit Profile
      </button>
    </div>
  );
}

export default ProfileInfo;
