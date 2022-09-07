import { useNavigate } from "react-router-dom";
import { useNavInfoContext } from "../../../../react-context/NavContext";
import { LoggedInUser } from "../../../common/Script";
import { useCart } from "../../../containers/Cart/useCart.hook";
import { useWishList } from "../../../containers/WishList/useWishList.hook";
import {
  CartDesktop,
  CartMobile,
  ProfileIcon,
  SearchDeskptop,
  SearchIconMobile,
  WishListDesktop,
} from "../../../../assets/icons/headerIcons";

export default function IconsWrapper() {
  const { searchToggleClick } = useNavInfoContext();

  const navigate = useNavigate();

  const ProfileIconClick = () => {
    if (LoggedInUser !== null) {
      navigate("/myprofile");
    } else {
      navigate("/auth/login");
    }
  };

  const { viewCart } = useCart();
  const { favItems } = useWishList();

  return (
    <div className="Header__FlexItem Header__FlexItem--fill">
      <span
        className="Header__Icon  Icon-Wrapper--clickable hidden-phone"
        onClick={ProfileIconClick}
      >
        <ProfileIcon />
      </span>

      <span
        className="Header__Icon  Icon-Wrapper--clickable"
        onClick={searchToggleClick}
      >
        <span className="hidden-tablet-and-up">
          <SearchIconMobile />
        </span>
        <span className="hidden-phone">
          <SearchDeskptop />
        </span>
      </span>

      <a
        href="/wishlist"
        className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable hidden-phone"
      >
        <span className="hidden-phone">
          <WishListDesktop />
        </span>

        {favItems.length > 0 && (
          <span className="Header__CartDot is-visible"></span>
        )}
      </a>

      <a href="/cart" className="Header__Icon  Icon-Wrapper--clickable ">
        <span className="hidden-tablet-and-up">
          <CartMobile />
        </span>
        <span className="hidden-phone">
          <CartDesktop />
        </span>
        {viewCart?.cartItem?.length > 0 && (
          <span className="Header__CartDot is-visible"></span>
        )}
      </a>
    </div>
  );
}
