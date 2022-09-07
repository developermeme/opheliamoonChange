import { NavBar } from "./Navbar/NavBar";
import SearchBox from "./SearchBox/SearchBox";
import LeftDrawer from "./LeftDrawer/LeftDrawer";
import { useNavInfoContext } from "../../react-context/NavContext";

export const Header = () => {
  const { isVisibleSearch, isVisibleMenu } = useNavInfoContext();

  return (
    // <div>
    //   {isVisibleSearch && <SearchBox />}

    //   <section>{isVisibleMenu && <LeftDrawer />}</section>
    // </div>
    <NavBar />
  );
};

export default Header;
