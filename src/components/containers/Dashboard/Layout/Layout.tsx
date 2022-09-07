import React from "react";
import { useSelector } from "react-redux";
import Help from "../Help/Help";
import MyOrders from "../MyOrders/MyOrders";
import MyProfile from "../MyProfile/MyProfile";
import MyAddress from "../MyAddress/MyAddress";
import ReferandEarn from "../ReferAndEarn/ReferandEarn";
import Subscription from "../Subscription/Subscription";
import { ProfileMenu } from "../../../../constant/Variables";
import { IRootState } from "../../../../redux/reducer/CombineReducer";
import "./Layout.scss";

export const Layout = () => {
  const { navData } = useSelector((state: IRootState) => state);
  const selectedView = navData && navData.selectedAccountView;

  localStorage.removeItem("selected-category");

  const getComponent = (viewName: string) => {
    switch (viewName) {
      case ProfileMenu.MyProfile:
        return <MyProfile />;
      case ProfileMenu.SavedAddress:
        return <MyAddress />;
      case ProfileMenu.Orders:
        return <MyOrders />;
      case ProfileMenu.ReferAndEarn:
        return <ReferandEarn />;
      case ProfileMenu.SubsCribe:
        return <Subscription />;
      case ProfileMenu.Help:
        return <Help />;
      default:
        return <MyProfile />;
    }
  };

  return (
    <main id="maincontent" className="page-main">
      <div className="columns">{getComponent(selectedView)}</div>
    </main>
  );
};

export default Layout;
