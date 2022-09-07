import { useSelProduct } from "../useSelProduct.hook";
import { ProductMetaTimer } from "./ProductMetaTimer";
import { getOfferPrice, MoneyFormater } from "../../../common/Script";

export const ProductMeta = () => {
  const { productDetails, updatedProduct, isPastDate } = useSelProduct();
  const { productname, offer, date: endDate } = productDetails;
  const price = (updatedProduct?.price as number) || 0;

  return (
    <div className="ProductMeta">
      <h1 className="ProductMeta__Title u-h4">{productname}</h1>

      <div className="ProductMeta__PriceList u-h4">
        <span className="ProductMeta__Price Price Price--highlight">
          {MoneyFormater(+getOfferPrice(price, offer))}
        </span>
        {offer !== 0 && (
          <span className="ProductMeta__Price Price Price--compareAt Text--subdued">
            {MoneyFormater(price)}
          </span>
        )}

        {offer !== 0 && (
          <span className="Price Price--discount">({offer}% OFF)</span>
        )}
      </div>

      {!isPastDate && endDate && <ProductMetaTimer endDate={endDate} />}
    </div>
  );
};
