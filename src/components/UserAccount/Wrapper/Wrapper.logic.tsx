import React from "react";
import { WrapperView } from "./Wrapper.view";

interface IProps {
  childComp?: React.ReactNode;
  name: string;
}

export const Wrapper = (props: IProps) => {
  const { childComp, name } = props;

  localStorage.removeItem("selected-category");

  return <WrapperView name={name} childComp={childComp} />;
};

export default Wrapper;
