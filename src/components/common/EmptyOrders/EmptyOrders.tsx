import React from "react";
import { useNavigate } from "react-router-dom";
import { TextButton } from "../../ui-kit/TextButton/TextButton.view";
import "./EmptyOrders.scss";

function EmptyOrders() {
  const navigate = useNavigate();
  return (
    <div className="ordersNotFoundCard-wrapper">
      <img
        src="https://myntraweb.blob.core.windows.net/selfserveui/assets/images/cards@2x.png"
        alt="orders-not-found"
        className="ordersNotFoundCard-image"
      />
      <div className="ordersNotFoundCard-header u-h3">
        You haven't placed any order yet!
      </div>
      <div className="ordersNotFoundCard-text">
        Order section is empty. After placing order, You can track them from
        here!
      </div>
      <TextButton
        items="Back To Home"
        isprimary={true}
        className="ordersNotFoundCard-button"
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
}

export default EmptyOrders;
