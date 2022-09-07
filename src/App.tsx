import React from "react";
import { Layout } from "./Layout/Layout";
import { getStore } from "./redux/store/AppStore";
import { NavContextProvider } from "./react-context/NavContext";
import { StateAndRouterProvider } from "./StateAndRouterProvider";
import { NavigationScroll } from "./components/ui-kit/NavigationScroll";
import { ValidationContextProvider } from "./react-context/ValidationContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import "./App.scss";

export const App: React.FC = () => {
  const store = getStore();
  return (
    <StateAndRouterProvider store={store}>
      <NavigationScroll>
        <ValidationContextProvider>
          <NavContextProvider>
            <Layout />
          </NavContextProvider>
        </ValidationContextProvider>
      </NavigationScroll>
    </StateAndRouterProvider>
  );
};
