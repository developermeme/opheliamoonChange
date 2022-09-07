import React from "react";
import StarRatings from "react-star-ratings";
import { IReviews } from "../../../../model/IProductType";
import ImageZoom from "../../SelectedProduct/ProductGallery/ImageViewer/ImageZoom";
import "./ReviewItem.scss";

interface IProps {
  review: IReviews;
}

export const ReviewItem: React.FC<IProps> = (props: IProps) => {
  const { review } = props;

  const reviewrName = review.name?.split(",");
  const reviews = review.reviews?.split("desc:");

  return (
    <div className="Review__Wrapper">
      <div className="Review__Main">
        <div className="Review__Header">
          <h3>{reviews && reviews[0]}</h3>
          <StarRatings
            rating={review.rating}
            starDimension="15px"
            starSpacing="0px"
          />
        </div>
        <div className="Review__TextWrapper">
          {reviews?.length > 1 && <span>{reviews[1] || reviews[0]}</span>}
        </div>
        <div className="Review__ImageThumb">
          <div className="Review__ImageWrapper">
            <ImageZoom imageUrl={review.url} />
          </div>
        </div>
      </div>
      <div className="Review__Footer ">
        <div>
          <span className="Review__Username">
            {reviewrName && reviewrName[0]}
          </span>
          {reviewrName?.length > 1 && <span>{reviewrName[1]}</span>}
        </div>
      </div>
    </div>
  );
};
