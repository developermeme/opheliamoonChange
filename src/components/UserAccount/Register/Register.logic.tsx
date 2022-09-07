import React from "react";
import { RegisterView } from "./Register.view";
import RegisterOTP from "./RegisterOTP";
import Wrapper from "../Wrapper/Wrapper.logic";
import { useRegister } from "../../../hook/useRegister.hook";
import "../UserAccount.scss";

export const Register: React.FC = () => {
  const {
    registerCredentials,
    errors,
    handleOnChange,
    onFocusEvent,
    registerOnSubmit,
    successMsg,
    handleCountrySelect,
    countries,
    selectedCountry,
    isregistered,
  } = useRegister();

  const regComponent = isregistered ? (
    <RegisterOTP />
  ) : (
    <RegisterView
      onChangeEvent={handleOnChange}
      registerOnSubmit={registerOnSubmit}
      credentials={registerCredentials}
      errors={errors}
      onFocusEvent={onFocusEvent}
      successMsg={successMsg}
      selectedCountry={selectedCountry}
      handleCountrySelect={handleCountrySelect}
      countries={countries}
    />
  );

  return <Wrapper childComp={regComponent} name="reg" />;
};
