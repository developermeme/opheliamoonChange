import { SideMenu } from "../Layout/SideMenu/SideMenu";
import { ReferalCards } from "./ReferalCards";
import "./Referal.scss";
import { TextButton } from "../../../ui-kit/TextButton/TextButton.view";
import { useDispatch } from "react-redux";
import { setselectedAccountView } from "../../../stateContainers/NavState/Slice";
import { ProfileMenu } from "../../../../constant/Variables";

export const ReferandEarn = () => {
  const dispatch = useDispatch();

  const handleSelectedLink = (name: string) => {
    dispatch(setselectedAccountView(name));
  };

  return (
    <>
      <div className="column main">
        <div className="block">
          <div className="block-title u-h3">
            Refer Your Friends & get Cashback
          </div>
          <ReferalCards />
          <TextButton
            items="Subscribe"
            isprimary={true}
            className="subs-btn"
            onClick={() => handleSelectedLink(ProfileMenu.SubsCribe)}
          />
          {/* <DownloadLink label="Download" filename="/path/to/my.pdf" /> */}
        </div>
      </div>
      <SideMenu />
    </>
  );
};

export default ReferandEarn;
