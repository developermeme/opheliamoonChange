import NavWrapper from "./wrappers/NavWrapper";
import SearchBox from "../SearchBox/SearchBox";
import LogoWrapper from "./wrappers/LogoWrapper";
import LeftDrawer from "../LeftDrawer/LeftDrawer";
import IconsWrapper from "./wrappers/IconsWrapper";
import { AnnouncementBar } from "../AnnouncementBar/AnnouncementBar";
import { useNavInfoContext } from "../../../react-context/NavContext";
import "./NavBar.scss";

export const NavBar = () => {
  const { isVisibleSearch, isVisibleMenu } = useNavInfoContext();

  return (
    <div className="Nazca__Header--Section">
      {isVisibleSearch && <SearchBox />}
      <AnnouncementBar />
      <header className="Header">
        <div className="Header__Wrapper">
          <NavWrapper />
          <LogoWrapper />
          <IconsWrapper />
        </div>
      </header>
      <section>{isVisibleMenu && <LeftDrawer />}</section>
    </div>
  );
};
