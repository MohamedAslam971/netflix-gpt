import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANDUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    const lang = e.target.value;
    dispatch(changeLanguage(lang));
  };

  return (
    <div className="absolute z-40 bg-gradient-to-b from-black w-full flex justify-between">
      <img className="w-48" src={LOGO} alt="logo" />

      {user && (
        <div className="flex ">
          <div className="mt-6 flex gap-5">
            {showGptSearch && (
              <select
                className="bg-gray-900 h-8 mt-3 rounded-md text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANDUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
                ;
              </select>
            )}
            <button
              className="px-4 mr-5 h-8 mt-3 rounded-sm bg-purple-800 text-white cursor-pointer hover:bg-purple-600 active:bg-purple-950 transition-all"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>

            <img
              className="w-8 h-8 mt-3 rounded-full"
              src={user?.photoURL}
              alt="usericon"
            />
            <button
              onClick={handleSignOut}
              className="bg-red-500 text-white font-semibold rounded-sm px-4 mr-5 h-8 mt-3 cursor-pointer"
            >
              SignOut
            </button>
          </div>
          {/* <div className="mt-7">
          </div> */}
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
