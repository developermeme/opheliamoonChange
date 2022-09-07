import React from "react";
import {
  validateEmailId,
  validateMobileNumber,
  validateName,
  validatePassword,
} from "../components/UserAccount/Script";
import { ERROR404, ERROR500 } from "../constant/routes";
import { onChange, onClick, registerUser } from "../constant/Types";
import { UserServices } from "../utils/API";
import { Countries } from "../components/common/json/Countries";
import { handleErrorResponse } from "../components/common/Script";

export const useRegister = () => {
  const initialRegisterCredentials: registerUser = {
    uPhone: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    userReferral: "",
  };

  const [registerCredentials, setRegisterCredentials] =
    React.useState<registerUser>(initialRegisterCredentials);
  const [errors, setErrors] = React.useState<string>("");
  const [successMsg, setSuccessMsg] = React.useState("");

  const [isregistered, setIsRegistered] = React.useState(false);

  const handleOnChange = (e: onChange) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterCredentials({ ...registerCredentials, [name]: value });
  };

  const onFocusEvent = () => {
    setErrors("");
  };

  React.useEffect(() => {
    if (errors === "") {
      return;
    }
    const timer = setTimeout(() => {
      setErrors("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [errors]);

  const countries = Countries.map((item: any) => {
    return item.name;
  });

  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [selectedRegion, setSelectedRegion] = React.useState<
    string | undefined
  >("");

  const handleCountrySelect = (e: any) => {
    e.preventDefault();
    setSelectedCountry(e.target.value);
  };

  React.useEffect(() => {
    const regionList = Countries.find(
      (item: any, index) => item.name === selectedCountry
    );
    setSelectedRegion(regionList?.dialCode);
  }, [selectedCountry]);

  const validate = () => {
    let fields = registerCredentials;
    let errors = "";
    let formIsValid = true;

    const isValidFirstName = validateName(fields.fname, "fname");
    const isValidLastName = validateName(fields.lname, "lname");
    const isValidEmailId = validateEmailId(fields.email);
    const isValidMobileNumber = validateMobileNumber(fields.uPhone);
    const isValidPassword = validatePassword(fields.password);

    if (formIsValid && !isValidFirstName.formIsValid) {
      errors = isValidFirstName.error;
      formIsValid = false;
    } else if (formIsValid && !isValidLastName.formIsValid) {
      errors = isValidLastName.error;
      formIsValid = false;
    } else if (formIsValid && !isValidEmailId.formIsValid) {
      errors = isValidEmailId.error;
      formIsValid = false;
    } else if (formIsValid && !isValidMobileNumber.formIsValid) {
      errors = isValidMobileNumber.error;
      formIsValid = false;
    } else if (formIsValid && !isValidPassword.formIsValid) {
      formIsValid = false;
      errors = isValidPassword.error;
    } else if (formIsValid && selectedRegion === undefined) {
      formIsValid = false;
      errors = "Please select your country";
    } else {
      errors = "";
      formIsValid = true;
    }
    setErrors(errors);
    return formIsValid;
  };

  const email = { email: localStorage.getItem("remail") };

  const ResendRegisterOTP = () => {
    UserServices.forgotpwd(email)
      .then((res: any) => {
        if (res.status === 200) {
          console.log("res", res);
          setIsRegistered(true);
        }
      })
      .catch((error: any) => {
        setErrors("User Not Available");
        handleErrorResponse(error);
      });
  };

  const registerOnSubmit = (e: onClick) => {
    e.preventDefault();
    if (validate()) {
      let credentials = { ...registerCredentials };
      credentials.uPhone = selectedRegion + credentials.uPhone;
      UserServices.register(credentials)
        .then((res: any) => {
          if (res.status === 201) {
            localStorage.setItem("remail", registerCredentials.email);
            setSuccessMsg("OTP sent to your registered mobile number");
            ResendRegisterOTP();
          }
        })
        .catch((error: any) => {
          console.log("Error - ", error);
          if (error.response) {
            switch (error.response.status) {
              case 409: {
                setErrors("Registered already!");
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

  return {
    registerCredentials,
    errors,
    handleOnChange,
    onFocusEvent,
    registerOnSubmit,
    setErrors,
    successMsg,
    selectedCountry,
    handleCountrySelect,
    countries,
    selectedRegion,
    isregistered,
    ResendRegisterOTP,
    setIsRegistered,
  };
};
