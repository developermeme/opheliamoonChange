import React from "react";
import { useDispatch } from "react-redux";
import { onClick } from "../../../../constant/Types";
import { LoggedInUser } from "../../../common/Script";
import { updateSubscription } from "../../../stateContainers/Profile/ThunkAction";
import { IPlans } from "../../../stateContainers/Profile/Types";
import { SideMenu } from "../Layout/SideMenu/SideMenu";
import { useProfile } from "../MyProfile/useProfile.hook";
import { PaypalButtons } from "./PayPal";
import "./Subscription.scss";

export const Subscription = () => {
  const { PlansInfo, ProfileInfo } = useProfile();

  const [money, setMoney] = React.useState<null | number>(null);
  const [plan, setPlan] = React.useState<string>("");

  const handleOnClick = (e: onClick, money: number, name: string) => {
    e.preventDefault();
    setMoney(money);
    setPlan(name);
  };

  const dispatch = useDispatch();

  const PaymentSuccess = () => {
    const paymentOptions = {
      plan: plan,
      cusId: LoggedInUser as string,
      pstatus: "success",
    };
    dispatch(updateSubscription(paymentOptions));
  };

  return (
    <>
      <div className="column main">
        <div className="block">
          <div className="block-title u-h3">Subscribe to get more offers</div>
          <div className="sub-subhead u-h4">
            Logged in with {ProfileInfo?.uPhone}
          </div>
          <div className="sub-subhead u-h4">
            <a href="/auth/login">Use Another Account</a>
          </div>

          <form className="form-group">
            <div className="btn-group">
              {PlansInfo &&
                PlansInfo.map((item: IPlans) => {
                  const activePlan = plan === item.planName ? "btn-active" : "";
                  return (
                    <div
                      key={item.planID}
                      className={`btn-wrapper ${activePlan}`}
                    >
                      <button
                        className="btn-element"
                        key={item.planID}
                        onClick={(e) => {
                          handleOnClick(e, item.planAmount, item.planName);
                        }}
                      >
                        <img
                          height="50%"
                          width="50%"
                          style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            opacity: 1,
                          }}
                          src={item.imageUrl}
                          alt={item.planName}
                        ></img>
                        <span
                          style={{ color: "rgb(162, 162, 162)" }}
                          className="u-h5 btn-text"
                        >
                          {item.planName}
                        </span>
                        <span className="u-h4 btn-text">
                          Rs. {item.planAmount}
                        </span>
                      </button>
                    </div>
                  );
                })}
            </div>
          </form>
          <div className="Payment-container">
            <PaypalButtons
              amount={money as number}
              PaymentSuccess={PaymentSuccess}
            />
            {/* <TextButton
              items="Pay with RazarPay"
              className="RazarPayButton u-h6"
              isprimary={true}
              onClick={() => displayRazorpay(RazProps)}
            /> */}
          </div>
        </div>
      </div>
      <SideMenu />
    </>
  );
};

export default Subscription;
