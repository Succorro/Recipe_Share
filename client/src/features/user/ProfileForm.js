import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./userSlice";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ProfileForm({ setForm }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { id, username, image, bio, email, first_name, last_name } = user;
  const [updateForm, setUpdateForm] = useState({
    username: username,
    email: email,
    image: image,
    bio: bio,
    first_name: first_name,
    last_name: last_name,
  });
  const [errors, setErrors] = useState([]);
  const displayErrors = errors.map((error) => (
    <p className="text-danger" key={error}>
      {error}
    </p>
  ));

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
    fetch(`/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateForm),
    }).then((r) => {
      if (r.ok) {
        setForm(true);
        r.json().then((user) => dispatch(updateUser(user)));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  console.log(updateForm.image);
  const inputStyle = "input-group input-group-vertical mb-4";
  const spanStyle = "bg-secondary";
  return (
    <div className=" w-full rounded-lg lg:rounded-l-lg shadow-2xl bg-white opacity-75 mx-6 lg:mx-0 pt-3 ">
      <form
        className="container mx-auto  w-1/2 p-4 md:p-12  "
        onSubmit={handleSubmit}
      >
        <label className={inputStyle}>
          <span className={spanStyle}>Username:</span>
          <input
            class="input input-bordered bg-white w-full"
            type="text"
            name="username"
            value={updateForm.username}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label className={inputStyle}>
          <span className={spanStyle}>Image:</span>{" "}
          <input
            type="file"
            name="image"
            class="file-input file-input-bordered file-input-accent w-full max-w-xs"
          />
          {/* <input
          name="image"
          value={updateForm.image}
          onChange={(e) => handleChange(e)}
        /> */}
        </label>
        <label className={inputStyle}>
          <span className={spanStyle}> Email:</span>
          <input
            class="input input-bordered w-full max-w-xs"
            name="email"
            value={updateForm.email}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label className={inputStyle}>
          {" "}
          <span className={spanStyle}>Bio:</span>
          <textarea
            class="input input-bordered w-full max-w-xs"
            rows="3"
            name="bio"
            value={updateForm.bio}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label className={inputStyle}>
          <span className={spanStyle}>First Name:</span>
          <input
            class="input input-bordered w-full max-w-xs"
            name="first_name"
            value={updateForm.first_name}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label className={inputStyle}>
          <span className={spanStyle}>Last Name:</span>
          <input
            class="input input-bordered w-full max-w-xs"
            name="last_name"
            value={updateForm.last_name}
            onChange={(e) => handleChange(e)}
          />
        </label>
        {displayErrors}
        <div>
          <button className="btn btn-success" type="submit">
            Edit Profile
          </button>
          <button className="btn btn-error" onClick={() => setForm(true)}>
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

export default ProfileForm;
