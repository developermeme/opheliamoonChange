import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/image/nav/logo.png";
import "./Stepper.scss";

interface IProps {
  activeIndex: number;
}

export const Stepper: React.FC<IProps> = (props: IProps) => {
  const list = ["My Cart", " My Address", "Payment"];

  const { activeIndex } = props;

  const navigate = useNavigate();
  return (
    <header className="page-header">
      <ul className="checkout-tab">
        <li
          className="checkout-logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </li>
        {list.map((name: string, index) => {
          let clsname =
            activeIndex === index ? "checkout_active" : "checkout_inactive";
          return (
            <li className={`checkout-menu ${clsname} u-h5`} key={name}>
              <span>{name}</span>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Stepper;
