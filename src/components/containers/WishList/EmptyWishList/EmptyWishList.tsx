import React from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInUser } from "../../../common/Script";
import { TextButton } from "../../../ui-kit/TextButton/TextButton.view";
import EmtyWishList from "../../../../assets/image/EmtyWishList.png";
import "./EmptyWishList.scss";

function EmptyWishList() {
  const navigate = useNavigate();

  const RegisteredUserView = () => {
    return (
      <div className="modal-empty-wishlist">
        <img
          src={EmtyWishList}
          alt="No-Wishlist"
          className="productsNotFoundCard-image"
        />
        <div className="empty-text u-h4">YOUR WISHLIST IS EMPTY</div>
        <div className="second-text u-h4">(but it doesn’t have to be)</div>
        <TextButton
          items=" CONTINUE SHOPPING"
          isprimary={true}
          className="shop-emt-btn"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    );
  };

  const NonRegisteredUserView = () => {
    return (
      <div className="modal-empty-wishlist">
        <div className="empty-text u-h4">
          Please login to get your wishlist!
        </div>
        <TextButton
          items="Login"
          isprimary={true}
          className="shop-emt-btn"
          onClick={() => {
            navigate("/auth/login");
          }}
        />
      </div>
    );
  };

  return (
    <div className="wishlist-wrapper">
      {LoggedInUser !== null ? (
        <RegisteredUserView />
      ) : (
        <NonRegisteredUserView />
      )}
    </div>
  );
}

export default EmptyWishList;
