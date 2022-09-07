import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LoggedInUser } from "../components/common/Script";
import {
  fetchSlidersList,
  fetMetaHome,
} from "../components/stateContainers/Sliders/ThunkAction";
import {
  fetchCategories,
  fetchHomePdts,
} from "../components/stateContainers/NavState/ThunkActions";

import { IgetProfile } from "../components/stateContainers/Profile/Services";
import { useWishList } from "../components/containers/WishList/useWishList.hook";
import { getProfileDetails } from "../components/stateContainers/Profile/ThunkAction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "../routes/Routes";

/**
 * Responsible for rendering the component as per route path
 */

export const Layout: React.FC = () => {
  const dispatch = useDispatch();

  const { FetchWishList } = useWishList();

  const item: IgetProfile = {
    phone: LoggedInUser as string,
  };

  useEffect(() => {
    dispatch(fetchHomePdts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchSlidersList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetMetaHome({ where: "home" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getProfileDetails(item));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (LoggedInUser !== null) {
  //     FetchCartData();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    if (LoggedInUser !== null) {
      FetchWishList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Routes />
      <ToastContainer position="top-right" />
    </>
  );
};
