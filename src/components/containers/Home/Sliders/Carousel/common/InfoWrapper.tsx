import React from "react";
import { getOfferPrice } from "../../../../../common/Script";

interface IProps {
  name: string;
  price: number;
  offer: number;
}

export const InfoWrapper: React.FC<IProps> = (props: IProps) => {
  const { name, price, offer } = props;

  return (
    <div className="ProductItem__Info">
      <h2 className="ProductItem__Title u-h4">
        <span>{name}</span>
      </h2>
      <div className="ProductItem__PriceList u-h4">
        <span
          className="ProductItem__Price Price Price--highlight"
          data-money-convertible=""
        >
          Rs. {getOfferPrice(price, offer)}
        </span>
        {offer !== 0 && (
          <span
            className="ProductItem__Price Price Price--compareAt Text--subdued u-h4"
            data-money-convertible=""
          >
            Rs. {price.toFixed()}
          </span>
        )}
      </div>
    </div>
  );
};
