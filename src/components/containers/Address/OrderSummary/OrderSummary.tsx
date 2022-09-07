import { MiniCart } from "../../MiniCart/MiniCart";
import { useAddress } from "../useAddress.hook";

function OrderSummary() {
  const { continuePaymentClick } = useAddress();
  return (
    <div
      className="modal-custom opc-sidebar opc-summary-wrapper
       custom-slide"
    >
      <div id="opc-sidebar">
        <MiniCart onClickContinue={continuePaymentClick} />
      </div>
    </div>
  );
}

export default OrderSummary;
