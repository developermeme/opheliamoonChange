import React, { useContext } from "react";
import { createContext } from "react";
import { AccountLogin } from "../components/UserAccount/Login/AccountLogin";
import { AccountReset } from "../components/UserAccount/Login/AccountReset";
import { OTPVerfication } from "../components/UserAccount/Login/OTPVerfication";
import { PasswordReset } from "../components/UserAccount/Login/PasswordReset";

export const ValidationContext = createContext({});

enum Page {
  LOGIN,
  EMAIL,
  OTP,
  PASSWORD,
}

export const ValidationContextProvider = function ({ children }: any) {
  const [activePage, setActivePage] = React.useState(Page.LOGIN);

  const handleForgotPasswordOnClick = () => {
    setActivePage(Page.EMAIL);
  };

  const handleBackToLogin = () => {
    setActivePage(Page.LOGIN);
  };

  const handleForgotPasswordOnSubmit = () => {
    setActivePage(Page.OTP);
  };

  const handleOTPSubmit = () => {
    setActivePage(Page.PASSWORD);
  };

  const getErrorText = (key: string) => {};

  const getLoginComponent = () => {
    let component;
    switch (activePage) {
      case Page.LOGIN: {
        component = <AccountLogin />;
        break;
      }
      case Page.EMAIL: {
        component = <AccountReset />;
        break;
      }
      case Page.OTP: {
        component = <OTPVerfication />;
        break;
      }
      case Page.PASSWORD: {
        component = <PasswordReset />;
        break;
      }
      default:
        // component =
        break;
    }
    return component;
  };
  const name = activePage === Page.OTP ? "OTP" : "log";
  const loginComponent = getLoginComponent();

  return (
    <ValidationContext.Provider
      value={
        {
          loginComponent,
          name,
          handleForgotPasswordOnClick,
          handleForgotPasswordOnSubmit,
          handleOTPSubmit,
          getErrorText,
          handleBackToLogin,
        } as any
      }
    >
      {children}
    </ValidationContext.Provider>
  );
};

export function useValidationInfoContext() {
  const {
    handleForgotPasswordOnClick,
    handleForgotPasswordOnSubmit,
    handleOTPSubmit,
    getErrorText,
    handleBackToLogin,
  } = useContext(ValidationContext) as any;
  return {
    handleForgotPasswordOnClick,
    handleForgotPasswordOnSubmit,
    handleOTPSubmit,
    getErrorText,
    handleBackToLogin,
  };
}
