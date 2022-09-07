import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import {
  CardField,
  ErrorMessage,
  Field,
  ResetButton,
  SubmitButton,
} from "./Elements";
import "./CheckoutForm.scss";
import { paymentService } from "../../../../utils/API";
import { IPaymentProps } from "../PaymentContainer";
import { useNavigate } from "react-router-dom";

const CheckoutForm = (props: IPaymentProps) => {
  const { name, amount, email, phoneNo, onSuccess } = props.PaymentProps;
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements() as any;
  const [error, setError] = useState<any>(null);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<any>(null);

  const reset = () => {
    setError(null);
    setProcessing(false);
    setPaymentMethod(null);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    const response = await paymentService
      .stripePay({
        amnt: +(amount * 100),
        currency: "INR",
        method: "card",
      })
      .then((res: any) => {
        return res.data;
      })
      .catch((err) => {
        setError("Payment Failure, Try Again Later");
      });

    const clientSecret = response.client_secret;

    if (clientSecret) {
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: name,
          },
        },
      });

      setProcessing(false);

      if (paymentResult.error) {
        alert(paymentResult.error.message);
        setError(paymentResult.error.message);
      } else {
        if (paymentResult.paymentIntent.status === "succeeded") {
          setPaymentMethod(paymentResult.paymentIntent as any);
          alert("Payment Successful!");
          onSuccess(paymentResult.paymentIntent.id);
          navigate("/orderconfirm");
        }
      }
    }
  };

  return paymentMethod ? (
    <div className="Result">
      <div className="ResultTitle" role="alert">
        Payment successful
      </div>
      <div className="ResultMessage">
        Thanks for trying Stripe Elements. we generated a PaymentMethod:{" "}
        {paymentMethod.id}
      </div>
      <ResetButton onClick={reset} />
    </div>
  ) : (
    <form className="Form" onSubmit={handleSubmit}>
      <fieldset className="FormGroup">
        <Field
          label="Name"
          id="name"
          type="text"
          placeholder={name}
          autoComplete="name"
          defaultValue={name}
        />
        <Field
          label="Email"
          id="email"
          type="email"
          placeholder={email}
          required
          autoComplete="email"
          defaultValue={email}
        />
        <Field
          label="Phone"
          id="phone"
          type="tel"
          placeholder={phoneNo}
          required
          autoComplete="tel"
          defaultValue={phoneNo}
        />
      </fieldset>
      <fieldset className="FormGroup">
        <CardField
          onchange={(e: any) => {
            setError(null);
          }}
        />
      </fieldset>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <SubmitButton processing={processing} error={error} disabled={!stripe}>
        {`PAY INR ${amount}`}
      </SubmitButton>
    </form>
  );
};

const StripeCard = (props: IPaymentProps) => {
  return (
    <div className="AppWrapper">
      <CheckoutForm PaymentProps={props.PaymentProps} />
    </div>
  );
};

export default StripeCard;
