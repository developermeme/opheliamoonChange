import DeliveryDetails from "./DeliveryDetails";
import { useSelProduct } from "../useSelProduct.hook";

export const ProductDescription = () => {
  const { productDetails } = useSelProduct();

  const { deliveryTime } = productDetails;
  const time = deliveryTime ? deliveryTime : "3-21";

  return (
    <div className="Delivery_details">
      {` Products are generally dispatched in ${time} days depending upon the
          product you have ordered.`}
      <DeliveryDetails />
    </div>
  );
};
