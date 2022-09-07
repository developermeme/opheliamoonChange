import { useDispatch } from "react-redux";
import { ProfileLinks } from "../../../../../constant/Variables";
import { setselectedAccountView } from "../../../../stateContainers/NavState/Slice";
import { TextButton } from "../../../../ui-kit/TextButton/TextButton.view";

import "./SideMenu.scss";

export const SideMenu = () => {
  const dispatch = useDispatch();
  const handleSelectedLink = (name: string) => {
    dispatch(setselectedAccountView(name));
  };

  const LogOff = () => {
    localStorage.removeItem("user-login");
    window.location.reload();
    window.location.replace("/auth/login");
  };

  return (
    <div className="sidebar-main u-h6">
      <div className="account-nav account-nav-content">
        <ul className="nav items">
          {ProfileLinks.map((item: any, index: number) => {
            return (
              <li
                key={index}
                onClick={() => {
                  handleSelectedLink(item.name);
                }}
                className="nav item"
              >
                <img src={item.url} alt={item.name} className="sidemenu-icon" />
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <TextButton
        items="Logout"
        isprimary={true}
        className="logout-button"
        onClick={LogOff}
      />
    </div>
  );
};
