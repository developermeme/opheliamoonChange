import React, { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const NavContext = createContext({});

export const NavContextProvider = ({ children }: any) => {
  const [isVisibleSearch, setIsVisibleSearch] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const [isVisibleProfile, setIsVisibleProfile] =
    React.useState<boolean>(false);

  const [isVisibleMenu, setIsVisibleMenu] = React.useState<boolean>(false);

  const onProfileMouseEnter = () => {
    setIsVisibleProfile(true);
  };

  function useOutsideAlerter(ref: any) {
    React.useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsVisibleProfile(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const searchToggleClick = () => {
    setIsVisibleSearch(!isVisibleSearch);
  };

  const registerIconClick = () => {
    alert(2);
  };
  const cartIconClick = () => {
    navigate("/cart");
  };

  const MenuIconClick = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };

  return (
    <NavContext.Provider
      value={
        {
          isVisibleSearch,
          searchToggleClick,
          // handleIconClick,
          cartIconClick,
          registerIconClick,
          isVisibleProfile,
          onProfileMouseEnter,
          useOutsideAlerter,
          MenuIconClick,
          isVisibleMenu,
        } as any
      }
    >
      {children}
    </NavContext.Provider>
  );
};

export function useNavInfoContext() {
  const {
    isVisibleSearch,
    searchToggleClick,
    // handleIconClick,
    cartIconClick,
    registerIconClick,
    isVisibleProfile,
    onProfileMouseEnter,
    useOutsideAlerter,
    MenuIconClick,
    isVisibleMenu,
  } = useContext(NavContext) as any;
  return {
    isVisibleSearch,
    searchToggleClick,
    // handleIconClick,
    registerIconClick,
    cartIconClick,
    isVisibleProfile,
    onProfileMouseEnter,
    useOutsideAlerter,
    MenuIconClick,
    isVisibleMenu,
  };
}
