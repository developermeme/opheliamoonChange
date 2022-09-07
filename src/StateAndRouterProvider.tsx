import * as React from "react";
import { Provider } from "react-redux";
import { ReactChild, ReactPortal } from "react";
import { Store } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import Spinner from "./components/common/Spinner/Spinner";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_KEY } from "./constant/Variables";
import { Elements } from "@stripe/react-stripe-js";

type Children = ReactChild | Array<Children> | ReactPortal;

export interface IChildrenProp {
  children: Children;
}

export interface IElementProps {
  className: string;
}

interface IProps extends IChildrenProp {
  store: Store;
}

/**
 * Responsible for rendering the IntlProvider component
 */
const StateAndRouterProvider: React.FC<IProps> = (props: IProps) => {
  const stripePromise = loadStripe(STRIPE_KEY);

  const ELEMENTS_OPTIONS = {
    fonts: [
      {
        cssSrc: "https://fonts.googleapis.com/css?family=Roboto",
      },
    ],
  };

  return (
    <React.Suspense fallback={<Spinner />}>
      <Provider store={props.store}>
        <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
          <BrowserRouter>{props.children}</BrowserRouter>
        </Elements>
      </Provider>
    </React.Suspense>
  );
};

export { StateAndRouterProvider };
