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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          name="username"
          value={updateForm.username}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          value={updateForm.email}
          onChange={(e) => handleChange(e)}
        />
      </label>

      <label>
        {" "}
        Bio:
        <textarea
          rows="3"
          name="bio"
          value={updateForm.bio}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        First Name:
        <input
          name="first_name"
          value={updateForm.first_name}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        Last Name:
        <input
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
