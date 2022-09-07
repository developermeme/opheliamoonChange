import React from "react";
import { validateEmailId } from "../components/UserAccount/Script";
import { ERROR404, ERROR500 } from "../constant/routes";
import { ForgotPwd, onChange, onClick } from "../constant/Types";
import { useValidationInfoContext } from "../react-context/ValidationContext";
import { UserServices as UserAPI } from "../utils/API";

export const useForgotPassward = () => {
  const forgotPwdState = {
    email: "",
  };

  const [registeredEmail, setRegisteredEmail] =
    React.useState<ForgotPwd>(forgotPwdState);
  const [emailError, setEmailError] = React.useState<string>("");

  const { handleForgotPasswordOnSubmit } = useValidationInfoContext();

  const handleEmailInputChange = (e: onChange) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisteredEmail({ ...registeredEmail, [name]: value });
  };

  const handeValidate = () => {
    let fields = registeredEmail;
    let formIsValid = true;
    let userNameError = "";

    const isValidEmailId = validateEmailId(fields.email);
    formIsValid = isValidEmailId.formIsValid;
    userNameError = isValidEmailId.error;
    setEmailError(userNameError);
    return formIsValid;
  };

  React.useEffect(() => {
    if (emailError === "") {
      return;
    }
    const timer = setTimeout(() => {
      setEmailError("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [emailError]);

  const email = { email: registeredEmail.email };

  const ResendOTP = () => {
    UserAPI.forgotpwd(email)
      .then((res: any) => {
        if (res.status === 200 && res.data.toString().length === 4) {
          localStorage.setItem("login-email", registeredEmail.email);
          handleForgotPasswordOnSubmit();
        }
        if (res.status === 200 && res.data === "User Not Available") {
          setEmailError("User Not Available");
        }
      })
      .catch((error: any) => {
        if (error.response) {
          switch (error.response.status) {
            case 500: {
              window.location.href = ERROR500;
              break;
            }
            case 404: {
              window.location.href = ERROR404;
              break;
            }
            default:
              window.location.href = ERROR500;
          }
        }
      });
  };

  const handleForgotPasswordSubmit = (e: onClick) => {
    e.preventDefault();

    if (handeValidate()) {
      ResendOTP();
    }
  };
  return {
    registeredEmail,
    handleEmailInputChange,
    handleForgotPasswordSubmit,
    ResendOTP,
    emailError,
  };
};
