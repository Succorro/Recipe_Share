import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { logoutUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
function RemoveProfile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.user.id);
  function handleDelete() {
    fetch(`/users/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        dispatch(logoutUser());
        console.log("deleted user ");
        history.push("/");
      }
      // } else {
      //   r.json().then((error) => setErrors(error.errors));
      // }
    });
  }
  return (
    <div>
      <h1>Are you sure you want to delete your account? </h1>
      <button className="btn btn-error" onClick={handleDelete}>
        YES
      </button>
      <button
        className="btn btn-success"
        onClick={() => history.push("/users/profile")}
      >
        NO
      </button>
    </div>
  );
}

export default RemoveProfile;
