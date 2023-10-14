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

  return (
    <form className="form m-2 p-2" onSubmit={handleSubmit}>
      <label className="input-group m-2 p-2 ">
        <span>Username:</span>
        <input
          class="input input-bordered bg-white w-full max-w-xs"
          type="text"
          name="username"
          value={updateForm.username}
          onChange={(e) => handleChange(e)}
        />
      </label>

      <label className="input-group m-2 p-2 ">
        <span>Image:</span>{" "}
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
      <label className="input-group m-2 p-2 ">
        <span> Email:</span>
        <input
          class="input input-bordered w-full max-w-xs"
          name="email"
          value={updateForm.email}
          onChange={(e) => handleChange(e)}
        />
      </label>

      <label className="input-group m-2 p-2 ">
        {" "}
        <span>Bio:</span>
        <textarea
          class="input input-bordered w-full max-w-xs"
          rows="3"
          name="bio"
          value={updateForm.bio}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label className="input-group m-2 p-2 ">
        <span>First Name:</span>
        <input
          class="input input-bordered w-full max-w-xs"
          name="first_name"
          value={updateForm.first_name}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label className="input-group m-2 p-2 ">
        <span>Last Name:</span>
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
      <Link to="/users/profile/remove">Delete Profile</Link>
    </form>
  );
}

export default ProfileForm;
