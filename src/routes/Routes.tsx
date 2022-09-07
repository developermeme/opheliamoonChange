import { Navigate, useRoutes } from "react-router-dom";
import { Page404 } from "../components/common/page/Page404";
import { Page500 } from "../components/common/page/Page500";
import Address from "../components/containers/Address/Address";

import Cart from "../components/containers/Cart/Cart";
import PaymentContainer from "../components/containers/PaymentContainer/PaymentContainer";
import AuthenticationRoutes from "./AuthRoutes";
import MainRoutes from "./MainRoutes";

export interface PartialRouteObject {
  caseSensitive?: boolean;
  children?: PartialRouteObject[];
  element?: React.ReactNode;
  path?: string;
}

export const AllPages = () => {
  const all_routes: PartialRouteObject[] = [
    {
      path: "*",
      children: [
        {
          path: "",
          element: <Navigate to="home" replace />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "address",
          element: <Address />,
        },
        {
          path: "pay",
          element: <PaymentContainer />,
        },
        {
          path: "error",
          children: [
            {
              path: "404",
              element: <Page404 />,
            },
            {
              path: "500",
              element: <Page500 />,
            },
          ],
        },
        {
          path: "*",
          element: <Page404 />,
        },
      ],
    },
    AuthenticationRoutes,
    MainRoutes,
  ];

  return all_routes;
};

export default function Routes() {
  return useRoutes(AllPages());
}
