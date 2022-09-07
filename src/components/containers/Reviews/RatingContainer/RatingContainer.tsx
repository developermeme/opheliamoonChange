import React from "react";
import "./RatingContainer.scss";
import { RatingBar } from "./RatingBar/RatingBar";
import { StarIcon } from "../../../../assets/icons/StarIcon";
import { useSelProduct } from "../../SelectedProduct/useSelProduct.hook";
import { IReviews } from "../../../../model/IProductType";

export const RatingContainer = () => {
  const { selectedProduct } = useSelProduct();
  const reviews = selectedProduct?.productDetails?.reviews;

  const averagRating = reviews?.reduce(
    (acc, review: IReviews) => acc + review.rating,
    0
  );

  const groupByRating = reviews.reduce(
    (group: any, review: IReviews): Record<string, Array<IReviews>> => {
      const { rating } = review;
      group[rating] = group[rating] ?? [];
      group[rating].push(review);
      return group;
    },
    {}
  );

  return (
    <div className="RatingContainer">
      <div className="AvgRating__Wrapper">
        <div>
          <div className="AvgRating__Index">
            <span>{(averagRating / reviews.length).toFixed(1)}</span>
            <span className="AvgRating__Icon">
              <StarIcon />
            </span>
          </div>
          <div className="AvgRating__CountDesc">{reviews.length} Buyers</div>
        </div>
        <div>
          {Object.entries(groupByRating).map(([key, value]) => {
            return (
              <RatingBar
                count={+key}
                max={averagRating}
                total={value?.length}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
