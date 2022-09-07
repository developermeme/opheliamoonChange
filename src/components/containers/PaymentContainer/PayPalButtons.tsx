import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
  PayPalButtonsComponentProps,
} from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
import { useCart } from "../Cart/useCart.hook";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IPaymentProps } from "./PaymentContainer";

const paypalScriptOptions: PayPalScriptOptions = {
  "client-id":
    "AWY-y26BC3PrzVlVLXYMLpDEfldLx7BURWov6D3nYa3OLZUhPMyjTOcZUKYmhoPIZfNwoLW8c6tzGpgG",
  currency: "INR",
};

export const PaypalButtons: React.FC<IPaymentProps> = (
  props: IPaymentProps
) => {
  const { onSuccess } = props.PaymentProps;

  const navigate = useNavigate();
  const { viewCart } = useCart();

  const [msg, setMsg] = React.useState<null | string>(null);

  React.useEffect(() => {
    if (msg === null) {
      return;
    }
    const timer = setTimeout(() => {
      setMsg(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [msg]);

  function Button() {
    const [{ isPending }] = usePayPalScriptReducer();

    const paypalbuttonTransactionProps: PayPalButtonsComponentProps = {
      style: { layout: "vertical" },
      createOrder(actions: any) {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: viewCart.totalPrice && viewCart?.totalPrice.toFixed(),
                currency_code: "INR",
              },
            },
          ],
        });
      },
      onApprove(actions: any) {
        return actions.order.capture({}).then((details: any) => {
          onSuccess(details.id);
          setMsg("Order Placed");
          navigate("/orderconfirm");
        });
      },
      onError(err: any) {
        console.log("err", err);
        setMsg("Order Failed");
      },
    };
    return (
      <>
        {isPending ? <h3>Load Smart Payment Button...</h3> : null}
        <PayPalButtons {...paypalbuttonTransactionProps} />
      </>
    );
  }
  return (
    <div className="paypal-buttons">
      <span className="status-text u-h4">{msg && msg}</span>
      <PayPalScriptProvider options={paypalScriptOptions}>
        <Button />
      </PayPalScriptProvider>
    </div>
  );
};
