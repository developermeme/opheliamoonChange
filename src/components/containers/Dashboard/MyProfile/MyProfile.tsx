import React from "react";
import { useDispatch } from "react-redux";
import { UpdateProfile } from "./UpdateProfile/UpdateProfile";
import { useProfile } from "./useProfile.hook";
import { TextButton } from "../../../ui-kit/TextButton/TextButton.view";
import { SideMenu } from "../Layout/SideMenu/SideMenu";
import {
  getPlanAction,
  getProfileDetails,
  getSubscriptionAction,
} from "../../../stateContainers/Profile/ThunkAction";
import { LoggedInUser } from "../../../common/Script";
import { getOrderAction } from "../../../stateContainers/Order/ThunkAction";
import { useAddress } from "../../Address/useAddress.hook";
import "./MyProfile.scss";

export default function MyProfile() {
  // User

  const { ProfileInfo, PlansInfo } = useProfile();
  const dispatch = useDispatch();

  const { fetchAddreses } = useAddress();

  React.useEffect(() => {
    if (!ProfileInfo.userid) {
      dispatch(getProfileDetails({ phone: LoggedInUser as string }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // User
  React.useEffect(() => {
    dispatch(getOrderAction({ cusId: LoggedInUser as string }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    fetchAddreses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    dispatch(getSubscriptionAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (PlansInfo.length === 0) {
      dispatch(getPlanAction());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [openUpdateView, setOpenUpdateView] = React.useState(false);

  const toggleUpdateView = () => {
    setOpenUpdateView(!openUpdateView);
  };

  const ProfileInfoWrapper = () => {
    return (
      <div className="block">
        <div className="block-title u-h3">Account Information</div>
        <div className="profile-content">
          <div className="profile-avatar">
            <img
              src="https://cdn.yellowmessenger.com/ut2G9Z9WbkRW1604914013763.jpg"
              alt="user"
            />
          </div>

          <div className="profile-text u-h4">
            {ProfileInfo?.fname} &nbsp; {ProfileInfo?.lname}
            <br /> {ProfileInfo?.email}
            <br />
            {ProfileInfo?.uPhone}
          </div>

          <TextButton
            items="Edit Profile"
            className="edit-profile"
            isprimary={true}
            onClick={toggleUpdateView}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="column main">
        {openUpdateView ? (
          <UpdateProfile toggleUpdateView={toggleUpdateView} />
        ) : (
          <ProfileInfoWrapper />
        )}
      </div>
      <SideMenu />
    </>
  );
}
