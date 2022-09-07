import { ProductMeta } from "./ProductMeta";
import ProductVarients from "./ProductVarients";

function ProductInfo() {
  return (
    <div className="Product__Info ">
      <div className="Container">
        <ProductMeta />
        <ProductVarients />
      </div>
    </div>
  );
}

export default ProductInfo;
