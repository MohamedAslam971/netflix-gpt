import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // const handleButtonClick = () => {
  //   const message = checkValidData(
  //     name.current.value,
  //     email.current.value,
  //     password.current.value,
  //     isSignInForm
  //   );
  //   setErrorMessage(message);
  // };

  const handleButtonClick = () => {
    const emailValue = email.current?.value || "";
    const passwordValue = password.current?.value || "";
    const nameValue = isSignInForm ? "" : name.current?.value || "";

    const message = checkValidData(
      nameValue,
      emailValue,
      passwordValue,
      isSignInForm
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue,
            photoURL:USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute w-full z-10">
        <img
          className="w-full h-full"
          src={BG_URL}
          alt="bg_img"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-white bg-black opacity-80 w-3/12 absolute z-50 p-12 mx-auto right-0 left-0 my-36 rounded-md"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="FullName"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-500 py-2 font-bold text-lg">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-600 w-full rounded-lg font-semibold cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <p>
              <span className="text-gray-400">New to Netflix?</span>{" "}
              <span>Sign up now</span>
            </p>
          ) : (
            <p>
              <span className="text-gray-400">Already Registered?</span>{" "}
              <span>Sign in</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
