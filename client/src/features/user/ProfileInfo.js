import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProfileInfo({ setForm }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  if (user.login === false) return <div></div>;
  if (user.user === null) return <div></div>;
  const {
    username,
    avatar_format,
    email,
    first_name,
    last_name,
    bio,
    recipes,
  } = user.user;
  const avatar_url = avatar_format.url;
  let displayRecipes;
  recipes
    ? (displayRecipes = recipes.map((recipe) => {
        return (
          <div onClick={() => navigate(`/recipes/${recipe.id}`)}>
            <p className="font-bold text-gray-500 text-2xl flex flex-col hover:cursor-pointer">
              {recipe.title}{" "}
              <span className="text-sm">
                {" "}
                Cook Time: {recipe.total_time} minutes
              </span>
            </p>
          </div>
        );
      }))
    : (displayRecipes = (
        <h1 className="font-bold text-black text-2xl">
          {" "}
          <button className="btn" onClick={() => navigate("/recipes/new")}>
            Start sharing &rarr;{" "}
          </button>
        </h1>
      ));

  return (
    <div>
      <div className="max-w-4xl flex items-center h-auto lg:h-96 mb-0 flex-wrap mx-auto my-32 lg:my-0">
        <div className="w-full sm:rounded-lg pt-3 shadow-2xl bg-white opacity-75 mx-6 lg:rounded-l-lg lg:w-2/3  lg:flex lg:items-center lg:justify-center lg:m-auto">
          <div className="p-4 md:p-12 text-center ">
            <div className="avatar">
              <div className="w-24 rounded-full not-prose">
                <img src={avatar_url} alt="user" />
              </div>
            </div>

            <h1 className="mt-5 mb-0">{username}</h1>
            <h3>Name:</h3>
            <p>
              {first_name} {last_name}
            </p>
          </div>
          <div className="p-4 md:p-12 text-center pt-0">
            <h3>Bio:</h3>
            <p>{bio}</p>
            <h3>Email:</h3>
            <p>{email}</p>

            <button
              className="btn btn-warning "
              onClick={() => setForm(false)}
              type="click"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-4xl flex items-center h-auto lg:mt-16  flex-wrap mx-auto my-32 lg:my-0 ">
        <div className="w-full sm:rounded-lg pt-3 shadow-2xl bg-white opacity-75 mx-6 lg:rounded-l-lg lg:w-2/3  lg:flex lg:items-center lg:justify-center lg:m-auto">
          <div className="p-4 md:p-12 text-center ">
            <h1>Recipes Created:</h1>
            {displayRecipes}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
