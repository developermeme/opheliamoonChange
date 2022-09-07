import React from "react";
import { useWindowSize } from "../../../hook/useWindowSize.hook";
import "./Drawer.scss";
import { DrawerHeader } from "./DrawerHeader";

interface IProps {
  body: any;
  name: string;
  classname?: string;
  visibility: boolean;
  onClose: () => void;
  position?: string;
}
export const Drawer: React.FC<IProps> = (props: IProps) => {
  // eslint-disable-next-line
  const [width, height] = useWindowSize();
  const { body, name, classname, visibility, onClose, position } = props;

  const drawerPosition = position === "left" ? "drawer--left" : "drawer--right";

  return (
    <div
      id="filter-drawer"
      className={`drawer ${drawerPosition}  hidden-desk  ${classname}`}
      aria-hidden={!visibility}
      tabIndex={-1}
      style={{ maxHeight: height }}
    >
      <React.Fragment>
        <DrawerHeader name={name} classname={classname} onClose={onClose} />
      </React.Fragment>
      <React.Fragment>{body}</React.Fragment>
    </div>
  );
};
