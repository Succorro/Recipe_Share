import React, { useState } from "react";
import ProfileInfo from "../features/user/ProfileInfo";
import ProfileForm from "../features/user/ProfileForm";

function Profile() {
  const [form, setForm] = useState(true);
  return (
    <div>
      {form ? (
        <ProfileInfo setForm={setForm} />
      ) : (
        <ProfileForm setForm={setForm} />
      )}
    </div>
  );
}

export default Profile;
