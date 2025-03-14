// export const checkValidData = (name, email, password, isSignInForm) => {
//   if (!isSignInForm) {
//     const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
//     if (!isNameValid) return "Name is not valid";
//   }
//   const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
//   const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

//   if (!isEmailValid) return "Email Id is not valid";
//   if (!isPasswordValid) return "password is not valid";

//   return null;
// };

export const checkValidData = (name, email, password, isSignInForm) => {
    if (!isSignInForm) {
      if (!name || !/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)) {
        return "Name is not valid";
      }
    }
  
    if (!email || !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)) {
      return "Email Id is not valid";
    }
  
    if (!password || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)) {
      return "Password is not valid";
    }
  
    return null;
  };
  
