import React, { useEffect } from "react";
import { fetchUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <div>
      Profile <p>{user.user.username}</p>
    </div>
  );
}

export default Profile;
