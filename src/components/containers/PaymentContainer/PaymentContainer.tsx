import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { Stepper } from "../Stepper/Stepper";
import { useCart } from "../Cart/useCart.hook";
import { MiniCart } from "../MiniCart/MiniCart";
import CashFreePayment from "./cashfree/cashfree";
import { LoggedInUser } from "../../common/Script";
import StripeCard from "./checkout-form/CheckoutForm";
import { IPlaceOrder } from "../../stateContainers/Order/Types";
import { ISelectedAddress } from "../../stateContainers/Address/Types";
import { placeOrderAction } from "../../stateContainers/Order/ThunkAction";
import "./PaymentContainer.scss";

type paymentModeType = "Stripe" | "CashFree";

const Payments: paymentModeType[] = ["CashFree"];

export interface IPaymentProps {
  PaymentProps: {
    name: string;
    amount: number;
    email: string;
    phoneNo: string;
    onSuccess: (id: string) => void;
  };
}

export const PaymentContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { viewCart } = useCart();

  const [PaymentMode, setPaymentMode] = useState<paymentModeType | null>(null);

  let selectedAddress = {} as ISelectedAddress;
  let cartItem = localStorage.getItem("selected-address");
  if (cartItem) selectedAddress = JSON.parse(cartItem as string);

  let addressId = localStorage.getItem("selected-address-id") as string;

  React.useEffect(() => {
    if (Object.keys(selectedAddress).length < 1) {
      navigate("/address");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAddress]);

  const handlePaymentClick = (e: any, mode: paymentModeType) => {
    e.preventDefault();
    setPaymentMode(PaymentMode === mode ? null : mode);
  };

  const onPaymentSuccess = (id: any) => {
    const OrderItems: IPlaceOrder = {
      cusId: LoggedInUser as string,
      addId: parseInt(addressId),
      pstatus: "success",
      tnxid: id,
    };
    dispatch(placeOrderAction(OrderItems));
  };

  const PaymentProps = {
    name: selectedAddress.address?.name,
    amount: viewCart.totalPrice as any,
    email: selectedAddress.address?.phone,
    phoneNo: selectedAddress?.address?.uPhone,
    onSuccess: onPaymentSuccess,
  };

  const AddressBar = () => {
    const navigate = useNavigate();
    return (
      <div className="add_old_address mb-4 u-h5">
        <h3>{selectedAddress.address?.name}</h3>
        <div>
          <span
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              display: "inline-block",
              verticalAlign: "top",
            }}
          >
            <p>
              {selectedAddress.address?.flatNo},
              {selectedAddress.address?.street}
            </p>
            <p>{selectedAddress.address?.city}</p>
            <p>
              {selectedAddress.address?.state} - {selectedAddress.address?.pin}
            </p>
          </span>
        </div>
        <p>
          Mobile Number: &nbsp;
          <span
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              display: "inline-block",
              verticalAlign: "top",
            }}
          >
            {selectedAddress?.address?.uPhone}
          </span>
        </p>
        <p
          style={{
            marginTop: "7px",
            color: " #c70c0c",
            fontWeight: 500,
          }}
        >
          Delivery in 3-12 Days.
        </p>
        <button
          className="edit-button u-h6"
          onClick={() => navigate("/Address")}
        >
          Edit
        </button>
      </div>
    );
  };

  const getPaymentButton = (paymentType: paymentModeType) =>
    ({
      [Payments[0]]: <CashFreePayment PaymentProps={PaymentProps} />,
      [Payments[1]]: <StripeCard PaymentProps={PaymentProps} />,
    }[paymentType]);

  const getPaymentContainer = (payment: paymentModeType) => {
    const isActiveUPI = payment === PaymentMode ? "active" : "";

    return (
      <div className={`payment-method ${isActiveUPI}`} key={payment}>
        <div
          className="payment-method-title choice"
          style={{ position: "relative" }}
          onClick={(e) => handlePaymentClick(e, payment)}
        >
          <input type="radio" name={payment} className="radio paymentInput" />
          <label htmlFor="paypal" className="payment-label u-h5">
            <span>PayNow</span>
          </label>
        </div>
        {isActiveUPI && getPaymentButton(payment)}
      </div>
    );
  };

  return (
    <div>
      <Stepper activeIndex={2} />
      <div className="checkout-main">
        <div className="checkout-main-wrapper">
          <div className="col-md-8 col-sm-12 col-xs-12 checkout-section">
            <div className="payment-method-section omc-section">
              <AddressBar />
              {Payments.map((payment: paymentModeType) =>
                getPaymentContainer(payment)
              )}
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12 omc-sidebar">
            <MiniCart />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentContainer;
