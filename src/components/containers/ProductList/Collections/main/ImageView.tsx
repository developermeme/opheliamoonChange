import React from "react";
import { onClick } from "../../../../../constant/Types";
import { IProduct } from "../../../../../model/IProductType";
import { dateInPast, getOfferPrice } from "../../../../common/Script";
import { Timer } from "../../../../common/Timer/Timer";

interface IProps {
  gridName: any;
  url: string;
  name: string;
  price: number;
  offer: number;
  item: IProduct;
  endDate: string;
  handleProductOnclick: (item: IProduct) => void;
}

export const ImageView: React.FC<IProps> = (props: IProps) => {
  const {
    gridName,
    url,
    name,
    price,
    offer,
    handleProductOnclick,
    item,
    endDate,
  } = props;

  const ImageOnClick = (e: onClick, item: any) => {
    e.preventDefault();
    handleProductOnclick(item);
  };

  const finalDate = new Date(endDate);
  const today = new Date();

  const isPastDate = dateInPast(finalDate, today);

  return (
    <div
      className={gridName}
      onClick={(e) => ImageOnClick(e, item as IProduct)}
    >
      <div className="ProductItem ProductTwo">
        <div className="ProductItem__Wrapper">
          <div className="ProductItem__ImageWrapper">
            <div className="AspectRatio AspectRatio--tall P2-square">
              <img className="ProductItem__Image" src={url} alt="name" />
            </div>
          </div>

          <div className="ProductItem__Info ProductItem__Info--center">
            <h2 className="ProductItem__Title Collection-Heading u-h41">
              {name}
            </h2>
            <div className="ProductItem__PriceList  Collection-Heading u-h4">
              <span
                className="ProductItem__Price Price Price--highlight"
                data-money-convertible=""
              >
                Rs. {getOfferPrice(price, offer)}
              </span>
              {offer !== 0 && (
                <span
                  className="ProductItem__Price Price Price--compareAt Text--subdued"
                  data-money-convertible=""
                >
                  Rs. {price.toFixed()}
                </span>
              )}
            </div>
            {!isPastDate && <Timer endDate={endDate} showDay={true} />}
          </div>
        </div>
      </div>
    </div>
  );
};
