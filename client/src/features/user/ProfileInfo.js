import React from "react";
import { useSelector } from "react-redux";

function ProfileInfo({ setForm }) {
  const user = useSelector((state) => state.user.user);
  const { username, image, email, first_name, last_name, bio } = user;
  return (
    <div className="w-full rounded-lg lg:rounded-l-lg  shadow-2xl bg-white opacity-75 mx-6 lg:mx-0 pt-3">
      <div className="p-4 md:p-12 text-center ">
        <div className="avatar">
          <div className="w-24 rounded-full not-prose">
            <img
              src="https://static.wikia.nocookie.net/disney/images/5/56/Profile_-_Rex.jpeg"
              alt="look"
            />
          </div>
        </div>

        {/* <img style={{ maxWidth: "200px" }} src={image} alt="user" /> */}
        <h1 className="mt-5 mb-0">{username}</h1>
      </div>
      <div className="p-4 md:p-12 text-center pt-0">
        <h3>Bio:</h3>
        <p>{bio}</p>

        <button
          className="btn btn-warning "
          onClick={() => setForm(false)}
          type="click"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default ProfileInfo;
