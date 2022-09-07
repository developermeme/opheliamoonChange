/* eslint-disable no-undef */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cashfreeProd } from "cashfree-dropjs";
import { dropinComponents } from "./dropinComponents";
import { generateRandomId } from "../../../common/Script";
import { paymentService } from "../../../../utils/API";
import "./cashfree.scss";

const style = {
  backgroundColor: "#ffffff",
  color: "#c70c0c",
  fontFamily: "Lato",
  fontSize: "14px",
  errorColor: "#ff0000",
  theme: "light",
};
const components = dropinComponents.map((x) => x.id);

function CashFreePayment(props) {
  const { email, amount, onSuccess, name, phoneNo } = props.PaymentProps;
  const navigate = useNavigate();

  // Payment Success Call
  const onPaymentSuccess = (data) => {
    if (data.order && data.order.status === "PAID") {
      onSuccess(data.transaction.transactionId);
      navigate("/orderconfirm");
    }
  };

  // Payment Failure Call
  const onPaymentFailure = (data) => {
    console.log("error", data);
    // alert(data.order.errorText);
  };

  //Cashfree Component Render Call
  const renderDropin = (orderToken) => {
    if (orderToken === "") {
      alert("Order Token is empty");
      return;
    }

    let parent = document.getElementById("drop_in_container");
    parent.innerHTML = "";
    let cashfree;

    cashfree = new cashfreeProd.Cashfree();
    // cashfree = new cashfreeSandbox.Cashfree();

    cashfree.initialiseDropin(parent, {
      orderToken,
      onSuccess: onPaymentSuccess,
      onFailure: onPaymentFailure,
      components,
      style,
    });
  };

  //Cashfree Token Generation Call
  const getToken = async () => {
    try {
      const respose = await paymentService.cashFree({
        "customer_details.customer_id": name,
        "customer_details.customer_email": email,
        "customer_details.customer_phone": phoneNo,
        order_id: `${generateRandomId(6)}`,
        order_currency: "INR",
        order_amount: +amount,
      });

      const orderToken = await respose.data.order_token;

      if (orderToken) {
        renderDropin(orderToken);
      }
    } catch (error) {
      alert("orderTokenerror", error);
    }
  };

  useEffect(() => {
    getToken();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="cashfree-form">
      <div
        className="dropin-parent"
        id="drop_in_container"
        style={{ minHeight: "300px" }}
      ></div>
    </div>
  );
}

export default CashFreePayment;
