import React from "react";
import { InfoWrapper } from "./InfoWrapper";
import { onClick } from "../../../../../../constant/Types";
import { IProduct } from "../../../../../../model/IProductType";
import useProductList from "../../../../ProductList/useProductList.hook";

interface IProps {
  url: string;
  maxWidth: string;
  item: IProduct;
}

export const ImageView: React.FC<IProps> = (props: IProps) => {
  const { url, maxWidth, item } = props;

  const { handleProductOnclick } = useProductList();

  const ImageOnClick = (e: onClick, item: IProduct) => {
    e.preventDefault();
    handleProductOnclick(item);
  };

  const price =
    (item?.productSize?.length > 0 && item.productSize[0]?.price) || 0;

  const Image = () => {
    return (
      <div
        className="ProductItem__ImageWrapper"
        onClick={(e) => ImageOnClick(e, item as IProduct)}
      >
        <div
          className="AspectRatio AspectRatio--tall"
          style={{ maxWidth: maxWidth, aspectRatio: "1.0" }}
        >
          <img className="ProductItem__Image" alt="Product" src={url} />
        </div>
      </div>
    );
  };

  return (
    <div className="ProductItem">
      <Image />
      <InfoWrapper
        name={item.productname}
        price={price}
        offer={item.offer || 0}
      />
    </div>
  );
};
