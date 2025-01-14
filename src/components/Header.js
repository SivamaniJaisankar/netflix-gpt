import React, { useEffect } from "react";
import { addUser, removeUser } from "../utlis/userSlice";
import { auth } from "../utlis/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "../utlis/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="">
      <img
        src={NETFLIX_LOGO}
        alt="netflix logo"
        className="w-48 ml-3 mt-14 cursor-pointer"
      />
    </div>
  );
};

export default Header;
