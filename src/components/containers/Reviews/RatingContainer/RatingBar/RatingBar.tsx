import React from "react";
import StarRatings from "react-star-ratings";
import "./RatingBar.scss";

interface IProps {
  count: number;
  max: number;
  total: number;
}

export const RatingBar: React.FC<IProps> = (props: IProps) => {
  const { count, total } = props;

  return (
    <div className="RatingBarContainer">
      <StarRatings rating={count} starDimension="15px" starSpacing="2px" />
      <span className="index-count u-h6">{total}</span>
    </div>
  );
};
