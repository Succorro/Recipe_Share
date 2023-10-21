import React, { useState } from "react";
import ProfileInfo from "../features/user/ProfileInfo";
import ProfileForm from "../features/user/ProfileForm";

function Profile() {
  const [showForm, setShowForm] = useState(true);
  return (
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      {showForm ? (
        <ProfileInfo setForm={setShowForm} />
      ) : (
        <ProfileForm setForm={setShowForm} />
      )}
    </div>
  );
}

export default Profile;
