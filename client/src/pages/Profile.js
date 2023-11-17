import React, { useState } from "react";
import ProfileInfo from "../features/user/ProfileInfo";
import ProfileForm from "../features/user/ProfileForm";

function Profile() {
  const [showForm, setShowForm] = useState(true);
  return (
    <div className="">
      {showForm ? (
        <ProfileInfo setForm={setShowForm} />
      ) : (
        <ProfileForm setForm={setShowForm} />
      )}
    </div>
  );
}

export default Profile;
