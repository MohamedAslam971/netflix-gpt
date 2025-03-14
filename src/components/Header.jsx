import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute z-40 bg-gradient-to-b from-black w-screen flex justify-between">
      <img
        className="w-48"
        src=" https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (
        <div className="flex ">
          <div className="mt-6">
            <img
              className="w-8 h-8 rounded-full"
              src={user?.photoURL}
              alt="usericon"
            />
          </div>
          <div className="mt-7">
            <button
              onClick={handleSignOut}
              className="bg-red-500 text-white font-semibold rounded-xl px-2 mx-4 cursor-pointer"
            >
              SignOut
            </button>
          </div>
        </div> 
      )}
    </div>
  );
};

export default Header;

{
  /* <div className="absolute top-0 left-0 w-full h-20 bg-red-500 z-30 flex items-center justify-center text-white text-lg">
          First (Top Layer)
        </div> */
}
