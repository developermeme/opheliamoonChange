import React from "react";

interface Iprops {
  name: string;
  childComp?: React.ReactNode;
}

export const WrapperView = (props: Iprops) => {
  const { name, childComp } = props;

  const containerName = `lcontainer ${name}`;

  return (
    <div className={containerName}>
      <div>{childComp}</div>
    </div>
  );
};
