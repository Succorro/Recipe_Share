import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./userSlice";
import { Link } from "react-router-dom";

function ProfileForm({ setForm }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { id, username, bio, email, first_name, last_name, avatar_format } =
    user;
  const [updateForm, setUpdateForm] = useState({
    username: username,
    email: email,
    bio: bio,
    first_name: first_name,
    last_name: last_name,
    avatar: avatar_format,
  });
  const avatarFile = useRef(undefined);
  const [errors, setErrors] = useState([]);
  let displayErrors;
  errors
    ? (displayErrors = errors.map((error) => (
        <p className="text-danger" key={error}>
          {error}
        </p>
      )))
    : (displayErrors = <></>);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
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
    if (avatarFile.current.files[0] !== undefined) {
      formData.append("user[avatar]", avatarFile.current.files[0]);
    }
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
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      <div className=" w-full rounded-lg lg:rounded-l-lg shadow-2xl bg-white opacity-75 mx-6 lg:mx-0 pt-3 ">
        <h1 className="text-center mb-0 mt-3 text-honey">Update Profile: </h1>
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
              className="file-input file-input-bordered file-input-info bg-white w-full"
              ref={avatarFile}
            />
            <p className="text-honey mt-0 mb-5">
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
          <Link className="text-error font-bold" to="/~users/profile/remove">
            Delete Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
const labelStyle = "input-group input-group-vertical mb-4 text-honey";
const spanStyle = "bg-white font-bold text-lg text-honey";
const inputStyle = "input input-bordered bg-white w-full text-honey";
export default ProfileForm;
