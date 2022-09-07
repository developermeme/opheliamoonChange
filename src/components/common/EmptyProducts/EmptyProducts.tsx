import { TextButton } from "../../ui-kit/TextButton/TextButton.view";
import { useNavigate } from "react-router-dom";
import EmptyProduct from "../../../assets/image/EmptyProduct.svg";
import "./EmptyProducts.scss";

function EmptyProducts() {
  const navigate = useNavigate();

  return (
    <div className="productsNotFoundCard-wrapper">
      <img
        src={EmptyProduct}
        alt="products-not-found"
        className="productsNotFoundCard-image"
      />
      {/* <div className="productsNotFoundCard-text">OOPS! No Products Found </div> */}
      <TextButton
        items="BACK TO SHOPPING"
        isprimary={true}
        className="productsNotFoundCard-button"
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
}

export default EmptyProducts;
