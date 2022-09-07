import React from "react";
import { IViewCartResponse } from "../../../../model/IProductType";
import { TextButton } from "../../../ui-kit/TextButton/TextButton.view";
import { useCart } from "../useCart.hook";
import "./CartSummary.scss";

interface IProps {
  items: IViewCartResponse;
}

export const CartSummary: React.FC<IProps> = (props: IProps) => {
  const { items } = props;

  const discount = (items.actualPrice || 0) - items.totalPrice;

  const { handleOnClickCheckOut } = useCart();
  // const x: any = items.tax && items.tax.toFixed(2);
  // const per: any = items.totalPrice && items.totalPrice.toFixed(2);
  const CartTotal = () => {
    return (
      <div className="table-wrapper">
        <table className="data table totals u-h5">
          <tbody>
            <tr className="totals sub">
              <th className="mark">
                <span>{`${items.cartItem?.length} items total`}</span>
              </th>
              <td className="amount">
                <span className="price" data-th="Subtotal">
                  RS {items.actualPrice && items.actualPrice.toFixed()}
                </span>
              </td>
            </tr>

            {/* <tr className="totals shipping excl">
              <th className="mark">
                <span className="label">Total</span>
              </th>
              <td className="amount">
                <span className="price" data-th="Original">
                  RS {items.actualPrice && items.actualPrice.toFixed(2)}
                </span>
              </td>
            </tr> */}

            <tr className="totals-tax">
              <th className="mark">GST(Inclusive of alltaxes) </th>
              <td className="amount" data-th="Tax">
                <span className="price">
                  RS {items.tax && items.tax.toFixed()}
                </span>
              </td>
            </tr>

            <tr className="totals shipping excl">
              <th className="mark">
                <span className="label">Shipping</span>
                <span className="value">(Flat Rate - Fixed)</span>
              </th>
              <td className="amount">
                <span className="price" data-th="Shipping">
                  RS 0
                </span>
              </td>
            </tr>

            <tr className="totals shipping excl">
              <th className="mark">
                <span className="label">Discount</span>
              </th>
              <td className="amount">
                <span className="price" data-th="Shipping">
                  RS {discount?.toFixed()}
                </span>
              </td>
            </tr>

            <tr className="grand totals">
              <th className="mark title">Grand Total</th>
              <td className="amount" data-th="Grand Total">
                <span className="price title">
                  RS {items.totalPrice && items.totalPrice.toFixed(2)}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="cart-summary" style={{ top: "0px" }}>
      <div className="custom-summarytitle u-h3">Order Summary</div>
      {/* 
      <form id="discount-coupon-form u-h4">
        <div className="fieldset coupon">
          <div className="field">
            <label htmlFor="coupon_code" className="label u-h4">
              Promo code
            </label>
            <div className="control">
              <div className="actions-toolbar">
                <div className="primary">
                  <TextButton
                    items="Apply Coupon"
                    isprimary={true}
                    className="action apply primary"
                    onClick={() => {
                      alert("No Coupons Available");
                    }}
                  />
                </div>
              </div>
              <input type="text" className="input-text" readOnly />
            </div>
          </div>
        </div>
      </form>
      <div className="custom-couponbutton u-h5">
        <a href="/#" id="click-coupon">
          View All Coupon
        </a>
      </div> */}

      <div id="cart-totals" className="cart-totals">
        <CartTotal />
      </div>
      <ul className="checkout methods items checkout-methods-items">
        <TextButton
          items="Check Out"
          isprimary={true}
          className="action primary checkout"
          onClick={handleOnClickCheckOut}
        />
      </ul>
    </div>
  );
};
