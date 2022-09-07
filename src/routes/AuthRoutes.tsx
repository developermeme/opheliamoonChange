import { Navigate } from "react-router-dom";
import Login from "../components/UserAccount/Login/Login";
import { Register } from "../components/UserAccount/Register/Register.logic";
import GuestGuard from "./GuestGuard";
import { PartialRouteObject } from "./Routes";

const AuthenticationRoutes: PartialRouteObject = {
  path: "auth",
  element: <GuestGuard />,
  children: [
    {
      path: "",
      element: <Navigate to="login" replace />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ],
};

export default AuthenticationRoutes;
