import { Fragment, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { NavBar } from "../components/header/Navbar/NavBar";

interface GuestGuardProps {
  children?: ReactNode;
}
const GuestGuard = ({ children }: GuestGuardProps) => {
  return (
    <Fragment>
      <NavBar />
      {children || <Outlet />}
      <Footer />
    </Fragment>
  );
};

export default GuestGuard;
