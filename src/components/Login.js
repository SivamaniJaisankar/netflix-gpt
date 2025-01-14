import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utlis/validate";
import { authentication } from "../utlis/authentication";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInform(!isSignInForm);
    if (name.current) name.current.value = "";
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";

    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = () => {
    
    //VALIDATE NAME, EMAIL & PASSWORD
    const message = checkValidateData(
      isSignInForm,
      isSignInForm ? null : name.current.value,
      email.current.value,
      password.current.value,
      setErrorMessage
    );

    //IF ANY ERROR, STOP
    if (message) {
      return setErrorMessage(message);
    }

    //SIGNUP & SIGNIN AUTHENTICATION
    authentication(
      isSignInForm,
      email.current.value,
      password.current.value,
      setErrorMessage,
      isSignInForm ? null : name.current.value,
      dispatch
    );
  };

  return (
    <div >
      <div className="absolute bg-gradient-to-b from-slate-900 w-full min-h-screen">
      <Header />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black bg-opacity-50 rounded-md flex flex-col justify-around w-4/12 mt-40 mx-auto right-0 left-0 px-12 text-white"
      >
        <h1 className="text-3xl py-5 text-white uppercase">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="Name"
            className="mx-2 my-4 py-4 px-2 border border-gray-300 rounded-md bg-transparent focus:border-white"
            ref={name}
            onChange={() => setErrorMessage("")}
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="mx-2 my-4 py-4 px-2 border border-gray-300 rounded-md bg-transparent focus:border-white"
          onChange={() => setErrorMessage("")}
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="mx-2 my-4 py-4 px-2 border border-gray-300 rounded-md bg-transparent focus:border-white"
          onChange={() => setErrorMessage("")}
        />
        <button
          className="bg-red-600 m-2 py-3 text-white font-semibold uppercase rounded-md"
          onClick={handleSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {errorMessage && (
          <p className="px-2 m-2 py-1 font-semibold text-xl text-red-400 text-center">
            {errorMessage}
          </p>
        )}

        <p className="py-4 font-medium text-lg text-white">
          {isSignInForm ? "New to Netflix?" : "Have Account?"}
          <button
            className="hover:underline font-bold px-1 uppercase text-white"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up" : "Sign In"}
          </button>
          now.
        </p>
      </form>
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8e8ff9d3-17b4-4ce1-b571-06ba4e025cca/web_tall_panel/IN-en-20241125-TRIFECTA-perspective_fe8a8dbc-e13a-452e-a9c6-284b08c4f974_large.jpg"
          alt="netflix banner"
        />
      </div>
    </div>
  );
};

export default Login;
