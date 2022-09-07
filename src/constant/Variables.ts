import { IHeaders } from "./Types";
import Refer from "../assets/image/Refer.png";
import LocationIcon from "../assets/image/map-icon.svg";
import Order from "../assets/image/orders.png";
import Profile from "../assets/image/profile.png";
import Subscription from "../assets/image/Subscription.png";
import Help from "../assets/image/help.png";

export const headers: IHeaders[] = [
  { id: 1, name: "Shop" },
  { id: 2, name: "Masks" },
  { id: 3, name: "Clothing" },
  { id: 4, name: "Shoes" },
  { id: 5, name: "Bags" },
  { id: 6, name: "Accessories" },
  { id: 7, name: "Size Exchange" },
];

export const LoginValues = Object.freeze({
  USER_LOGIN: "User Login",
  LOGIN_DESCRIPTION: "Please enter your e-mail or mobile and password:",
  LOGIN: "Login",
  NO_ACCOUNT: "Don't have an account?",
  CREATE_ACCOUNT: "Create one",
  FORGOT_PASSWORD: "Forgot Password",
  REGISTERED_ID: "Please enter your registered e-mail or mobile number",
  SUBMIT: "Submit",
  RESET_PASSWORD: "Reset Password",
});

export const OTP = Object.freeze({
  OTP: "OTP",
  OTP_DESCRIPTION: "Please enter one time password to verify your account",
  SUBMIT: " Submit",
});

export const REGISTER = Object.freeze({
  REGISTER: "Register",
  CREATEACCOUNT: "Create My Account",
});

export const ERROR = Object.freeze({
  EMPTY_NAME: "Please enter your",
  INVALID_NAME: "Please enter alphabet characters only.",
  EMPTY_EMAILID: "Please enter your email.",
  INVALID_EMAILID: "Please enter valid email.",
  EMPTY_MOBILENO: "Please enter your mobile no.",
  INVALID_MOBILENO: "Please enter valid mobile no. eg: XXX XXX XXXX",
  EMPTY_PASSWORD: "Please enter your password.",
  INVALID_PASSWORD:
    "Please enter secure and strong password. eg: abc@1442AgjdjK ",
});

export const SLIDERSLIST = Object.freeze({
  NEW_LAUNCH: "NEW_LAUNCH",
  ALL_ITEMS: "ALL_ITEMS",
  FEATURE_LIST: "FEATURE_LIST",
  TRENDING: "TRENDING_LIST",
});

export const SORT = Object.freeze({
  // FEATURED: "Featured",
  // BESTSELLING: "Best selling",
  AlPHABET: " Alphabetically, A-Z",
  REVERSEALPHABET: "Alphabetically, Z-A",
  LOWTOHIGH: "Price, low to high",
  HIGHTOLOW: "Price, high to low",
  // DATE: "Date, new to old",
  // REVERSEDATE: "Date, old to new",
});

export const view1 = {
  mobile: "1*1",
  desktop: "2*2",
};

export const view2 = {
  mobile: "2*2",
  desktop: "4*4",
};

const desktoView1 = {
  mobileCount: 2,
  desktopCount: 2,
  GridName: "Grid__Cell 1/2--phone 1/2--desk 1/2--tablet-and-up",
  maxwidth: "800px",
  aspectRatio: 1.0,
};

const desktopView2 = {
  mobileCount: 2,
  desktopCount: 4,
  GridName: "Grid__Cell 1/2--phone 1/4--desk 1/3--tablet-and-up",
  maxwidth: "800px",
  aspectRatio: 1.0,
};

const TabView1 = {
  mobileCount: 2,
  desktopCount: 2,
  GridName: "Grid__Cell 1/2--phone 1/2--desk 1/2--tablet-and-up",
  maxwidth: "800px",
  aspectRatio: 1.0,
};

const TabView2 = {
  mobileCount: 2,
  desktopCount: 4,
  GridName: "Grid__Cell 1/2--phone 1/4--desk 1/3--tablet-and-up",
  maxwidth: "800px",
  aspectRatio: 1.0,
};

const MobileView1 = {
  mobileCount: 1,
  desktopCount: 2,
  GridName: "Grid__Cell 1/1--phone 1/2--desk 1/2--tablet-and-up",
  maxwidth: "800px",
  aspectRatio: 1.0,
};

const MobileView2 = {
  mobileCount: 2,
  desktopCount: 2,
  GridName: "Grid__Cell 1/2--phone 1/2--desk 1/2--tablet-and-up",
  maxwidth: "800px",
  aspectRatio: 1.0,
};

export const gridViewOne = [desktoView1, TabView1, MobileView1];

export const gridViewTwo = [desktopView2, TabView2, MobileView2];

export const ProfileMenu = Object.freeze({
  MyProfile: "My Profile",
  WishList: "WishList",
  Orders: "Orders",
  ReferAndEarn: "Refer & Earn",
  SubsCribe: "SubsCribe",
  SavedCarts: "Saved Carts",
  SavedAddress: "Saved Address",
  Help: "Help",
});

export const ProfileLinks = [
  {
    id: 1,
    name: ProfileMenu.MyProfile,
    url: Profile,
  },
  {
    id: 2,
    name: ProfileMenu.Orders,
    url: Order,
  },
  {
    id: 3,
    name: ProfileMenu.SavedAddress,
    url: LocationIcon,
  },
  {
    id: 4,
    name: ProfileMenu.ReferAndEarn,
    url: Refer,
  },
  {
    id: 5,
    name: ProfileMenu.SubsCribe,
    url: Subscription,
  },
  {
    id: 6,
    name: ProfileMenu.Help,
    url: Help,
  },
];

export const serviceList = [
  { id: 1, policy: "AboutUs", href: "/pages/about-us" },
  { id: 2, policy: "Privacy Policy", href: "/pages/privacy-policy" },
  {
    id: 3,
    policy: "Return/Exchange Policy",
    href: "/pages/return-exchange-policy",
  },
  { id: 4, policy: "Terms & Condition", href: "/pages/terms-conditions" },
  { id: 5, policy: "Shiping Policy", href: "/pages/shipping-policy" },
  { id: 6, policy: "Terms Of Service", href: "/policies/terms-of-service" },
  { id: 7, policy: "Refund Policy", href: "/policies/refund-policy" },
];

export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const STRIPE_TEST_KEY =
  "pk_test_51K3Cn9SJJLXo9ricH5EX5ImknK3ujoHyhNBK9ppNLlARPo0Iq1AHWk0WCD7QDM0rtfl1htMxmZusvrWWo6ZBsaU400lO4zwPis";

export const STRIPE_KEY =
  "pk_live_51KlAqNSDva7aeTENfNh8HxAlbWFDCYrKhVVd3jwqOjeu7t0VUSE4k0sCIje5i8X1mgibdpden8TcbS9nV9LfirGt00Ngugs83n";
