import { pattern } from "../../constant/RegEx";
import { ERROR } from "../../constant/Variables";

export const validateName = (name: string, key: string) => {
  let formIsValid: boolean = true;
  let error: string = "";

  const Name =
    key === "name" ? "name" : key === "fname" ? "first name" : "last name";

  if (!name) {
    formIsValid = false;
    error = ` ${ERROR.EMPTY_NAME} ${Name}.`;
  }
  if (typeof name !== "undefined") {
    if (!name.match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
      error = ERROR.INVALID_NAME;
    }
  }
  return { formIsValid, error };
};

export const validateEmailId = (emailID: string) => {
  let formIsValid: boolean = true;
  let error: string = "";

  if (!emailID) {
    formIsValid = false;
    error = ERROR.EMPTY_EMAILID;
  }

  if (emailID !== "") {
    if (!pattern.test(emailID)) {
      formIsValid = false;
      error = ERROR.INVALID_EMAILID;
    }
  }
  return { formIsValid, error };
};

export const validateMobileNumber = (mobileNumber: string) => {
  let formIsValid: boolean = true;
  let error: string = "";

  if (!mobileNumber) {
    formIsValid = false;
    error = ERROR.EMPTY_MOBILENO;
  }

  if (mobileNumber !== "") {
    if (!mobileNumber.match(/^[0-9]{10}$/)) {
      formIsValid = false;
      error = ERROR.INVALID_MOBILENO;
    }
  }
  return { formIsValid, error };
};

export const validatePassword = (password: string) => {
  let formIsValid: boolean = true;
  let error: string = "";

  if (!password) {
    formIsValid = false;
    error = ERROR.EMPTY_PASSWORD;
  }

  if (password?.length < 6) {
    formIsValid = false;
    error = "Your Password should contain 6 characters";
  }

  //  if (
  //   !password.match(
  //     /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
  //   )
  // ) {
  //   formIsValid = false;
  //   error = ERROR.INVALID_PASSWORD;
  // }

  return { formIsValid, error };
};

export const getToast = (successMsg?: string, apiError?: string) => {
  let classname;
  let message;
  if (successMsg) {
    classname = "alert--success";
    message = successMsg;
  }
  if (apiError) {
    classname = "alert--error";
    message = apiError;
  }
  return { classname, message };
};
