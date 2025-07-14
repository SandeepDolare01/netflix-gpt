export const checkValidData = (email, password) => {
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid && isPasswordValid) {
    return "Email is invalid";
  } else if (isEmailValid && !isPasswordValid) {
    return "Password is invalid";
  } else if (!isEmailValid && !isPasswordValid) {
    return "Email and password is invalid";
  } else return null;
};
