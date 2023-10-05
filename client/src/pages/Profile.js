import React, { useState } from "react";
import ProfileInfo from "../ProfileInfo";
import ProfileForm from "../ProfileForm";

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
