import React from "react";
import Stepper from "../Stepper/Stepper";
import { AddressList } from "./AddressList/AddressList";
import "./Address.scss";
import OrderSummary from "./OrderSummary/OrderSummary";
import { useAddress } from "./useAddress.hook";
import { useCart } from "../Cart/useCart.hook";
import { AddressForm } from "./AddressForm/AddressForm";
import Footer from "../../Footer/Footer";

export const Address = () => {
  const { fetchAddreses, openUpdateView, toggleUpdateView } = useAddress();
  const { viewCart, FetchCartData } = useCart();

  React.useEffect(() => {
    fetchAddreses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (Object.entries(viewCart).length < 1) {
      FetchCartData();
    } else return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const TopBar = () => {
    return (
      <div className="opc-estimated-wrapper u-h5">
        <div className="estimated-block">
          <span className="estimated-label u-h4">Estimated Total</span>
          <span className="estimated-price">
            RS. {viewCart.totalPrice && viewCart.totalPrice.toFixed()}
          </span>
        </div>
        <div className="minicart-bag">
          <button type="button" className="action showcart">
            <span className="counter qty">
              <span className="counter-number u-h6">
                {viewCart.cartItem?.length}
              </span>
            </span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="acolumn">
      <div className="acolumn main">
        <Stepper activeIndex={1} />

        <>
          {openUpdateView ? (
            <AddressForm toggleUpdateView={toggleUpdateView} />
          ) : (
            <div id="checkout" className="checkout-container">
              <TopBar />
              <AddressList toggleUpdateView={toggleUpdateView} />
              <OrderSummary />
            </div>
          )}
        </>
      </div>
      <Footer />
    </div>
  );
};

export default Address;
