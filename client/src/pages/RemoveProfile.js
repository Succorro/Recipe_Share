import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
function RemoveProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  if (!user) return <></>;
  const id = user.id;
  function handleDelete() {
    fetch(`/users/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        dispatch(logoutUser());
        navigate("/");
        console.log("deleted user ");
      }
      // } else {
      //   r.json().then((error) => setErrors(error.errors));
      // }
    });
  }
  if (id)
    return (
      <div>
        <h1>Are you sure you want to delete your account? </h1>
        <button className="btn btn-error" onClick={handleDelete}>
          YES
        </button>
        <button
          className="btn btn-success"
          onClick={() => navigate("/users/profile")}
        >
          NO
        </button>
      </div>
    );
}

export default RemoveProfile;
