import React from "react";
import { useSelector } from "react-redux";
import { useNavInfoContext } from "../../../react-context/NavContext";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import { Facebook, Instagram, ShowMore } from "../../common/Icons";
import { ICategory, ISubCategory } from "../../stateContainers/NavState/Types";
import { Drawer } from "../../ui-kit/Drawer/Drawer";
import { useNav } from "../useNav.hook";
import "./LeftDrawer.scss";
import { MyCart, MyPerson, MyWishList } from "./LeftDrawerIcons";

export const LeftDrawer = () => {
  const { MenuIconClick } = useNavInfoContext();

  const { categories, MenuItemHandleClick } = useNav();

  const { profileData } = useSelector((state: IRootState) => state);
  const personDetails = profileData && profileData.profileDetails.Profile;
  const { fname, uPhone } = personDetails;

  const [activeIndex, setActiveIndex] = React.useState<null | number>(null);
  const [open, setOpen] = React.useState(false);

  const populateSubMenu = (index: number) => {
    setActiveIndex(index);
    setOpen(!open);
  };

  const getList = (product: ICategory, index: number) => {
    const getSubCategory = () => {
      return (
        <ul className="inner-submenu u-h6">
          {product.categories.map((item: ISubCategory, index: number) => {
            return (
              <li
                onClick={() => {
                  MenuItemHandleClick(product.mainCatName, item.cName);
                }}
              >
                <span>{item.cName}</span>
              </li>
            );
          })}
        </ul>
      );
    };

    return (
      <li>
        <div className="link-category u-h6">
          <span onClick={() => MenuItemHandleClick(product.mainCatName)}>
            {product.mainCatName}
          </span>
          {product?.categories?.length > 0 && (
            <span onClick={() => populateSubMenu(index)}>
              <ShowMore classname="icon-arrow" />
            </span>
          )}
        </div>
        {index === activeIndex &&
          open &&
          product.categories.length > 0 &&
          getSubCategory()}
      </li>
    );
  };

  const RouteUrl = fname ? "/myProfile" : "/auth/login";

  const GreetingText = fname ? `Hello ${fname}!` : `Hello there!`;

  const socialIcons = [
    {
      icon: <Facebook />,
      href: "https://www.facebook.com/Ophelia-moonfashions/",
      name: "Facebook",
    },

    {
      icon: <Instagram />,
      href: "https://www.instagram.com/Ophelia-moonfashions/",
      name: "Instagram",
    },
  ];

  const getSocialIcons = () => {
    return socialIcons.map((item: any, index) => (
      <li key={item.name}>
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.name}
        >
          {item.icon}
        </a>
      </li>
    ));
  };

  const shopBy = ["SHOP BY PRODUCTS", "SHOP BY COLLECTIONS"];

  const Body = () => {
    return (
      <div className="menu-drawer-content">
        <div className="menu-drawer-main" data-scrollable="">
          <div className="user-account">
            <p className="user-account-name">{GreetingText}</p>
            {uPhone && <p className="user-account-no">9498422064</p>}
          </div>
          <ul className="menu-linklist">
            {categories.map((item: ICategory, index: number) => {
              return (
                <React.Fragment key={index}>
                  {getList(item, index)}
                </React.Fragment>
              );
            })}
          </ul>
          <li>
            <div
              className="link-category u-h6"
              onClick={() => {
                MenuItemHandleClick("HOT");
              }}
            >
              <span>HOT</span>
            </div>
          </li>
          {shopBy.map((item: string, index: number) => {
            return (
              <li key={index}>
                <div className="link-category u-h6">
                  <span
                    onClick={() => {
                      MenuItemHandleClick("SHOP BY", item);
                    }}
                  >
                    {item}
                  </span>
                </div>
              </li>
            );
          })}
        </div>
        <div className="divider"></div>

        <ul id="nav-items" className="sidenav active">
          <li>
            <a href="/cart" className="waves-effect">
              <MyCart />
              My Cart
            </a>
          </li>
          <li>
            <a href="/wishlist" className="waves-effect">
              <MyWishList />
              My WishList
            </a>
          </li>
          <li>
            <a href={RouteUrl} className="waves-effect">
              <MyPerson />
              {fname ? "MyAccount" : "Sign in / Register"}
            </a>
          </li>
        </ul>
        <div className="menu-drawer-footer">
          <ul className="menu-social">{getSocialIcons()}</ul>
        </div>
      </div>
    );
  };

  return (
    <Drawer
      body={<Body />}
      name="Menu"
      visibility={true}
      position="left"
      onClose={MenuIconClick}
    />
  );
};

export default LeftDrawer;
