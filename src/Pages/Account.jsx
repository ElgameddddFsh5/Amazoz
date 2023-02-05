import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
// import SavedShows from '../components/SavedShows';

const Account = () => {
  const { user, logOut } = UserAuth();

  // console.log(user);
  const navigate = useNavigate();
  // console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(user);
  return (
    <div className="container mt-5 py-5">
      <h1>Nothing To see here...</h1>
      <h6>I'm not a backend </h6>

      <div className="w-full text-white">
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
          <Link
            onClick={handleLogout}
            className="nav-link d-flex justify-content-center flex-column text-center align-items-center"
            to="/signup"
          >
            LogOut
          </Link>
        </div>
      </div>
      {/* <SavedShows /> */}
    </div>
  );
};

export default Account;
