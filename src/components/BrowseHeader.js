import React from "react";
import Header from "./Header";
import { SIGN_OUT } from "../utlis/constants";
import { auth } from "../utlis/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utlis/userSlice";

const BrowseHeader = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="flex justify-between absolute z-10 w-full bg-gradient-to-b from-slate-900">
      
      <div className="flex">
        <Header />
        <div className="text-md text-white font-extrabold mt-20">
          <ul className="flex">
            <li className="mx-2 cursor-pointer">Home</li>
            <li className="mx-2 cursor-pointer">My List</li>
          </ul>
        </div>
      </div>

      <div className="flex mt-16">
        <h3 className="font-semibold text-slate-200 text-2xl ml-4 mt-6">
          Welcome {user?.displayName}
        </h3>
        <button
          className="font-semibold text-white text-xl ml-4 mt-4"
          onClick={handleSignOut}
        >
          <img className="rounded-md w-12 h-12" src={SIGN_OUT} alt="Sign Out" />
        </button>
      </div>
    </div>
  );
};

export default BrowseHeader;
