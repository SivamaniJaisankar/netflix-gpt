export const checkValidateData = (isSignInForm, name, email, password, setErrorMessage) => {

  if (!isSignInForm && (!name || /^[\s]*$/.test(name))) {
        return setErrorMessage("Name is required");
      }
  
  const validateEmail =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

  const validatePassword =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  
  if (!validateEmail) return "Invalid Email";
  if (!validatePassword) return "Invalid Password";

  return null;
};
