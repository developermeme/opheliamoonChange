import React from "react";
import { IOrder, IOrderItem } from "../../../../stateContainers/Order/Types";
import FwdArrow from "../../../../../assets/image/FwdArrow.png";
import "./OrderDesc.scss";
import { TextButton } from "../../../../ui-kit/TextButton/TextButton.view";
import { OrderServices } from "../../../../../utils/API";
import { useDispatch } from "react-redux";
import { getOrderAction } from "../../../../stateContainers/Order/ThunkAction";
import { LoggedInUser } from "../../../../common/Script";
import { toast } from "react-toastify";

interface IProps {
  item: IOrder;
  expandLessClick: () => void;
}

export const OrderDesc: React.FC<IProps> = (props: IProps) => {
  const { item, expandLessClick } = props;

  const dispatch = useDispatch();

  const {
    orderId,
    ordercode,
    flatNo,
    city,
    landMark,
    street,
    pin,
    paymentStatus,
    phone,
    orderStatus,
    items,
  } = item;

  const updateReturnStatus = async () => {
    try {
      await OrderServices.orderStatusUpdate({
        oid: orderId,
        status: "Return Initiated",
      });

      dispatch(getOrderAction({ cusId: LoggedInUser as string }));
      toast.info("Return Initiated");
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong, Please Contact support team");
    }
  };

  const Header = () => {
    return (
      <div className="order_head u-h4">
        <div className="order_info">
          <div className="ord_status">
            <label>Order Code:</label> <span>{ordercode ?? "-"}</span>
          </div>

          <div className="ord_id">
            <label>Order Id:</label> <span>{orderId}</span>
          </div>
          <div className="ord_date">
            <label>Payment Status:</label> {paymentStatus}
          </div>
        </div>

        <span className="back-arrow" onClick={expandLessClick}>
          <img src={FwdArrow} className="back-arrow-icon" alt="icon-back" />
        </span>
      </div>
    );
  };

  const getList = (pdt: IOrderItem) => {
    return (
      <li className="order-item u-h6">
        <span
          className="order-image-container OrderItem__ImageWrapper AspectRatio"
          style={{ aspectRatio: "0.8" }}
        >
          <img src={pdt.imgUrl} width="130" height="175" alt={pdt.name} />
        </span>
        <div className="order-item-details">
          <div className="order-item-name u-h4">{pdt.name}</div>
          <div className="mt5">
            <span>Rs.{pdt.subt && pdt.subt.toFixed()}</span>
          </div>
          <div className="mt5">
            <span>Size : {pdt.size ? pdt.size : "One Size"}</span>
          </div>
          <div className="mt5">
            <span>Qty : {pdt.quantity}</span>
          </div>
        </div>
      </li>
    );
  };

  const ProductTable = () => {
    return (
      <div className="grd-row">
        <div className="row-head">
          <div className="shipment-details">
            <div className="shipment u-h4">{orderStatus.status}</div>
            {orderStatus.status.toLocaleLowerCase() === "delivered" && (
              <TextButton
                isprimary
                items="Return"
                className="u-h8"
                onClick={updateReturnStatus}
              />
            )}
          </div>
        </div>
        <div className="order-summary">
          <div className="order-items">
            <ol className="order-itemsWrapper">
              {items.map((pdt: IOrderItem) => {
                return (
                  <React.Fragment key={pdt.id}>{getList(pdt)}</React.Fragment>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  };

  const BottomSection = () => {
    return (
      <div
        className="grd-row order-bottom-section u-h5"
        style={{ margin: "20px 0" }}
      >
        <div className="row-head">
          <div className="shipment-details">
            <div className="shipment u-h4">Shipping Address</div>
          </div>
        </div>
        <div className="address">
          <ul>
            <li className="addressList">{flatNo}</li>
            <li className="addressList">{street}</li>
            <li className="addressList">{landMark}</li>
            <li className="addressList">
              {city},{pin}
            </li>
            <li className="email addressList">{phone}</li>
          </ul>
        </div>
      </div>
    );
  };

  const PaymentDetails = () => {
    return (
      <div className="payment-details u-h5">
        <h3 className="mb15 order-card-title u-h4">Payment details</h3>
        <div className="mt5 payment-row">
          <span>Subtotal (Inclusive tax)</span>
          <span className=" text-secondary">
            {item.price && item.price.toFixed()}
          </span>
        </div>
        <div className="mt5 payment-row">
          <span>Discount</span>
          <span>₹0</span>
        </div>
        <div className="mt5 payment-row">
          <span>Shipping Charges</span>
          <span>₹0</span>
        </div>
        <div className="mt10 payment-row grand-total">
          <span>Total:</span>
          <span>{item.price && item.price.toFixed()}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="order-desc">
      <Header />
      <ProductTable />
      <BottomSection />
      <PaymentDetails />
    </div>
  );
};
