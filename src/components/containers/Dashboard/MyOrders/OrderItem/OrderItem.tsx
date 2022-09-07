import React from "react";
import { OrderIcon } from "../../../../common/Icons";
import { IOrder, IOrderItem } from "../../../../stateContainers/Order/Types";
import "./OrderItem.scss";

interface IProps {
  item: IOrder;
  expandOnClick: (item: IOrder) => void;
}

export const OrderItem: React.FC<IProps> = (props: IProps) => {
  const { item, expandOnClick } = props;
  const { orderStatus, date, items } = item;
  var splitedDate = date.split("T");

  const Status = () => {
    return (
      <div className="ItemStatus">
        <div className="ItemStatusContainer">
          <div className="CustomStatusIcon" style={{ background: "#c70c0c" }}>
            <div className="CustomStatusIcon-status">
              <OrderIcon />
            </div>
          </div>
          <div className="ItemStatus-details">
            <div
              className="ItemStatus-title Text-Text u-h5 "
              style={{ fontWeight: 500, color: "#c70c0c" }}
            >
              {orderStatus.status}
            </div>
            <div className="Text-Text u-h5">{splitedDate[0]}</div>
          </div>
        </div>
        <div className="OrderMoreIcon" onClick={() => expandOnClick(item)}>
          <span
            className="OrderMoreIconSvg"
            style={{ width: "24px", height: "24px" }}
          ></span>
        </div>
      </div>
    );
  };

  const getDescription = (name: string, qty: number, size: string) => {
    return (
      <div className="ProductList-details u-h5">
        <div>
          <span className="Text-Text OrderItemName">{name}</span>
        </div>
        <div>
          <span className="Text-Text">Qty: {qty}</span>
        </div>
        <div>
          <span className="Text-Text">Size: {size}</span>
        </div>
      </div>
    );
  };

  const getThumbNail = (imgUrl: string, name: string) => {
    return (
      <div
        className="ProductList-thumbnail"
        style={{
          background: "rgb(229, 241, 255)",
          height: "70px",
          width: "70px",
          borderRadius: "5px",
        }}
      >
        <img
          src={imgUrl}
          className="ProductList-thumbnailImage"
          alt={name}
          style={{ borderRadius: "5px", width: "100%" }}
        />
      </div>
    );
  };

  return (
    <div className="orderView">
      <div className="orderStatus">
        <Status />
      </div>
      {items &&
        items.map((x: IOrderItem) => {
          return (
            <div className="OrderItemWrapper" key={x.id}>
              <div className="imageAndDetails">
                {getThumbNail(x.imgUrl, x.name)}
                {getDescription(x.name, x.quantity, x.size)}
              </div>
            </div>
          );
        })}
    </div>
  );
};
