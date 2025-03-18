import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const  unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is signIn
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
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
    <div className="absolute z-40 bg-gradient-to-b from-black w-screen flex justify-between">
      <img
        className="w-48"
        src={LOGO}
        alt="logo"
      />

      {user && (
        <div className="flex ">
          <div className="mt-6">
            <img
              className="w-8 h-8 rounded-xs"
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
