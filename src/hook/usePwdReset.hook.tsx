import React from "react";
import { validatePassword } from "../components/UserAccount/Script";
import { ERROR404, ERROR500 } from "../constant/routes";
import { onChange, onClick } from "../constant/Types";
import { useValidationInfoContext } from "../react-context/ValidationContext";
import { UserServices as UserAPI } from "../utils/API";

export const usePwdReset = () => {
  const initialState = {
    password: "",
    cpassword: "",
  };

  const [password, setpassword] = React.useState(initialState);

  const [pwdError, setPwdError] = React.useState<string>("");
  const { handleBackToLogin } = useValidationInfoContext();

  const handlePasswordChange = (e: onChange) => {
    const name = e.target.name;
    const value = e.target.value;
    setpassword({ ...password, [name]: value });
  };

  React.useEffect(() => {
    if (pwdError === "") {
      return;
    }
    const timer = setTimeout(() => {
      setPwdError("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [pwdError]);

  const handeValidate = () => {
    let fields = password;
    let formIsValid = true;
    let passwordError = "";

    const isValidpassword = validatePassword(fields.password);
    const isValidConfirmpassword = validatePassword(fields.cpassword);

    if (formIsValid && !isValidpassword.formIsValid) {
      passwordError = isValidpassword.error;
      formIsValid = false;
    } else if (formIsValid && !isValidConfirmpassword.formIsValid) {
      passwordError = isValidConfirmpassword.error;
      formIsValid = false;
    } else if (formIsValid && fields.password !== fields.cpassword) {
      formIsValid = false;
      passwordError = "New passwords do not match.";
    } else {
      passwordError = "";
      formIsValid = true;
    }

    setPwdError(passwordError);

    return formIsValid;
  };

  const emailID = localStorage.getItem("login-email");

  const user = {
    email: emailID,
    password: password.password,
  };

  const handleUpdatePwdOnSubmit = (e: onClick) => {
    e.preventDefault();
    // dispatch(NotificationSlice.actions.resetNotifications());
    if (handeValidate()) {
      UserAPI.updatepwd(user)
        .then((res: any) => {
          if (res.status === 200) {
            localStorage.setItem("user-login", user.email as string);
            handleBackToLogin();
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
    }
  };

  return { handlePasswordChange, handleUpdatePwdOnSubmit, password, pwdError };
};
