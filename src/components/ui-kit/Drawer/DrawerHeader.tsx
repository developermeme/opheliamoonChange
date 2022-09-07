import React from "react";
import { CloseIcon } from "../../common/Icons";

interface IProps {
  name: string;
  classname?: string;
  onClose: () => void;
}

export const DrawerHeader: React.FC<IProps> = (props: IProps) => {
  const { name, classname, onClose } = props;

  return (
    <header className={`drawer-head ${classname}`}>
      <span className="drawer__title u-h3">{name}</span>
      <button className="drawer-close-button" onClick={onClose}>
        <CloseIcon />
      </button>
    </header>
  );
};
