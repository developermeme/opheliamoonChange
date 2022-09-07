import React, { useContext } from "react";
import { ValidationContext } from "../../../react-context/ValidationContext";
import Wrapper from "../Wrapper/Wrapper.logic";

const Login = () => {
  const { loginComponent, name } = useContext(ValidationContext) as any;
  return (
    <>
      <Wrapper childComp={loginComponent} name={name} />
    </>
  );
};

export default Login;
