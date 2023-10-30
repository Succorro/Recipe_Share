import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./userSlice";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ProfileForm({ setForm }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { id, username, bio, email, first_name, last_name } = user;
  const [updateForm, setUpdateForm] = useState({
    username: username,
    email: email,
    bio: bio,
    avatar: null,
    first_name: first_name,
    last_name: last_name,
  });
  const [errors, setErrors] = useState([]);
  const displayErrors = errors.map((error) => (
    <p className="text-danger" key={error}>
      {error}
    </p>
  ));

  // function handleImage(event) {
  //   const file = event.target.files[0];
  //   const formData = { ...updateForm, avatar: event.target.value, file };
  //   setUpdateForm(formData);
  // }

  function handleChange(event) {
    const name = event.target.name;
    let value;
    if (name === "avatar") {
      value = event.target.files[0];
    } else {
      value = event.target.value;
    }
    const newInfo = {
      ...updateForm,
      [name]: value,
    };
    setUpdateForm(newInfo);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    const formData = new FormData();
    formData.append("user[username]", updateForm.username);
    formData.append("user[email]", updateForm.email);
    formData.append("user[bio]", updateForm.bio);
    formData.append("user[first_name]", updateForm.first_name);
    formData.append("user[last_name]", updateForm.last_name);
    formData.append("user[avatar]", updateForm.avatar);

    fetch(`/users/${id}`, {
      method: "PATCH",
      body: formData,
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => dispatch(updateUser(user)));
        setForm(true);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className=" w-full rounded-lg lg:rounded-l-lg shadow-2xl bg-white opacity-75 mx-6 lg:mx-0 pt-3 ">
      <h1 className="text-center mb-0 mt-3">Update Profile: </h1>
      <form
        className="container mx-auto  w-1/2 p-4 md:p-12  "
        onSubmit={handleSubmit}
      >
        <label className={labelStyle}>
          <span className={spanStyle}>Username:</span>
          <input
            className={inputStyle}
            type="text"
            name="username"
            value={updateForm.username}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label className={labelStyle}>
          <span className={spanStyle}>First Name:</span>
          <input
            className={inputStyle}
            name="first_name"
            value={updateForm.first_name}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label className={labelStyle}>
          <span className={spanStyle}>Last Name:</span>
          <input
            className={inputStyle}
            name="last_name"
            value={updateForm.last_name}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label className={labelStyle}>
          <span className={spanStyle}>Image:</span>{" "}
          <input
            type="file"
            name="avatar"
            onChange={(e) => handleChange(e)}
            className="file-input file-input-bordered file-input-info bg-white w-full"
          />
          <p className="text-primary mt-0 mb-5">
            By changing this value a new image will be shown on avatar
          </p>
        </label>
        <label className={labelStyle}>
          <span className={spanStyle}> Email:</span>
          <input
            className={inputStyle}
            name="email"
            value={updateForm.email}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label className={labelStyle}>
          {" "}
          <span className={spanStyle}>Bio:</span>
          <textarea
            className={inputStyle}
            rows="3"
            name="bio"
            value={updateForm.bio}
            onChange={(e) => handleChange(e)}
          />
        </label>

        {displayErrors}
        <div className="flex justify-center">
          <button className="btn btn-success m-1 lg:mr-5" type="submit">
            Edit Profile
          </button>
          <button
            className="btn btn-error m-1 lg:ml-5"
            onClick={() => setForm(true)}
          >
            Cancel
          </button>
        </div>
      </form>
      <div className="flex justify-center  pb-5">
        <Link className="text-error font-bold" to="/users/profile/remove">
          Delete Profile
        </Link>
      </div>
    </div>
  );
}
const labelStyle = "input-group input-group-vertical mb-4";
const spanStyle = "bg-white font-bold text-lg";
const inputStyle = "input input-bordered bg-white w-full";
export default ProfileForm;
