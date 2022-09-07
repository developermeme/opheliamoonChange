import { useNavigate } from "react-router-dom";
import emptyCart from "../../../assets/image/emptyCart.png";
import { TextButton } from "../../ui-kit/TextButton/TextButton.view";
import "./EmptyCart.scss";

function EmptyCart() {
  const navigate = useNavigate();

  const RegisterdView = () => {
    return (
      <>
        <img src={emptyCart} alt="Empty Cart" className="empty-cart-image" />
        <h2 className="empty-cart-head u-h3">Your shopping bag is empty!</h2>
        <p className="empty-cart-sub u-h4">
          Looks like you haven’t added anything to your bag. Let’s change that.
        </p>
        <TextButton
          items="Back to shopping"
          isprimary={true}
          className="empty-cart-button u-h2"
          onClick={() => {
            navigate("/");
          }}
        />
      </>
    );
  };

  return (
    <section className="empty-container">
      <RegisterdView />
    </section>
  );
}

export default EmptyCart;
