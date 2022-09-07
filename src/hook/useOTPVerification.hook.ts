import React from "react";
import { useNavigate } from "react-router-dom";
import { ERROR404, ERROR500 } from "../constant/routes";
import { onChange, onClick, OTP } from "../constant/Types";
import { useValidationInfoContext } from "../react-context/ValidationContext";
import { UserServices as UserAPI } from "../utils/API";

export const useOTPVerification = () => {
  const initialState: OTP = {
    OTP: "",
  };

  const navigate = useNavigate();
  const [OTP, setOTP] = React.useState<OTP>(initialState);
  const [OTPError, setOTPError] = React.useState<string>("");
  const [otpSuccessMsg, setOtpSuccessMsg] = React.useState("");

  const { handleOTPSubmit } = useValidationInfoContext();

  const getOTPValue = (e: onChange) => {
    const name = e.target.name;
    const value = e.target.value;
    setOTP({ ...OTP, [name]: value });
  };

  React.useEffect(() => {
    if (OTPError === "") {
      return;
    }
    const timer = setTimeout(() => {
      setOTPError("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [OTPError]);

  const handeValidate = () => {
    let fields = OTP;
    let formIsValid = true;
    let otpError = "";

    if (!fields.OTP) {
      formIsValid = false;
      otpError = "Please enter an OTP.";
    }

    if (fields.OTP.length !== 4) {
      formIsValid = false;
      otpError = "Invalid OTP, Please try again.";
    }
    setOTPError(otpError);
    return formIsValid;
  };

  const token = { token: OTP.OTP };

  const remail = localStorage.getItem("remail") as string;
  const handleOnSubmitOTP = (e: onClick, from: string) => {
    e.preventDefault();

    if (handeValidate()) {
      UserAPI.confimation(token)
        .then((res: any) => {
          console.log(res);
          if (res.status === 202) {
            if (from === "reg") {
              setOtpSuccessMsg("Registered successfully!");
              localStorage.setItem("user-login", remail);
              setTimeout(() => {
                navigate("/");
                window.location.reload();
              }, 1000);
            } else {
              handleOTPSubmit();
            }
          }
        })
        .catch((error: any) => {
          if (error.response) {
            switch (error.response.status) {
              case 409: {
                setOTPError("Invalid OTP");
                break;
              }
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
  return { OTP, getOTPValue, handleOnSubmitOTP, OTPError, otpSuccessMsg };
};
