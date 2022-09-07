import { useNavigate } from "react-router-dom";
import { LoggedInUser } from "../../common/Script";
import { ReviewItem } from "./ReviewItem/ReviewItem";
import { RatingContainer } from "./RatingContainer/RatingContainer";
import { useSelProduct } from "../SelectedProduct/useSelProduct.hook";
import "./Reviews.scss";
import { IReviews } from "../../../model/IProductType";

export const Reviews = () => {
  const navigate = useNavigate();
  const { selectedProduct } = useSelProduct();

  const mcId = selectedProduct?.productDetails?.mcId;
  const reviews = selectedProduct?.productDetails?.reviews;
  const url = `/review/${mcId}`;

  const EmptyReviews = (
    <div style={{ textAlign: "center" }} className="Review__Empty">
      <p>There are no reviews yet.</p>
      <p>
        Only logged in customers who have purchased this product may leave a
        review.
      </p>
    </div>
  );

  const ReviewsView = (
    <>
      <RatingContainer />
      <div className="Review__Collection">
        {reviews?.reverse()?.map((review: IReviews) => (
          <ReviewItem review={review} />
        ))}
      </div>
    </>
  );

  return (
    <div className="Review__Container">
      <div className="Grid">
        <div className="Grid__Cell">
          {LoggedInUser && (
            <h5
              className="Heading Link Link--secondary Link--underline "
              onClick={() => navigate(url)}
            >
              Write Review
            </h5>
          )}
          {!reviews?.length ? EmptyReviews : ReviewsView}
        </div>
      </div>
    </div>
  );
};
