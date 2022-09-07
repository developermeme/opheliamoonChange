import { NavLink } from "react-router-dom";
import logo from "../../../../assets/image/nav/logo.png";

export default function LogoWrapper() {
  return (
    <div className="Header__FlexItem">
      <div className="Header__Logo">
        <NavLink to={"/"} className="Header__LogoLink">
          <img
            className="Header__LogoImage"
            src={logo}
            // width="100"
            // style={{ height: "200px" }}
            alt="Ophelia-moon"
          />
        </NavLink>
      </div>
    </div>
  );
}
