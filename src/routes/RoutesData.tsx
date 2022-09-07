// import React from "react";
// import { RouteComponentProps } from "react-router";
// import { WishList } from "../components/common/Icons";
// import Cart from "../components/containers/Cart/Cart";
// import Login from "../components/UserAccount/Login/Login";
// import { Page404 } from "../components/common/page/Page404";
// import { Page500 } from "../components/common/page/Page500";
// import HomeView from "../components/containers/Home/HomeView";
// import Address from "../components/containers/Address/Address";
// import { ShopBy } from "../components/containers/ShopBy/ShopBy";
// import { Policies } from "../components/containers/Policies/Policies";
// import Layout from "../components/containers/Dashboard/Layout/Layout";
// import ProductList from "../components/containers/ProductList/ProductList";
// import { Register } from "../components/UserAccount/Register/Register.logic";
// import SearchContainer from "../components/containers/SearchContainer/SearchContainer";
// import SelectedProduct from "../components/containers/SelectedProduct/SelectedProduct";
// import OrderConfirmation from "../components/containers/OrderConfirmation/OrderConfirmation";
// import PaymentContainer from "../components/containers/PaymentContainer/PaymentContainer";

// export interface IRoutesData {
//   /**
//    * Should be displayed on the home page
//    */
//   component:
//     | React.ComponentType<RouteComponentProps<any>>
//     | React.ComponentType<any>;
//   /**
//    * Should be displayed on the home page
//    */
//   path: string;
// }

// const RoutesData: IRoutesData[] = [
//   {
//     component: HomeView,
//     path: "/",
//   },
//   {
//     component: Login,
//     path: "/login",
//   },
//   {
//     component: Register,
//     path: "/register",
//   },
//   {
//     component: SearchContainer,
//     path: "/search",
//   },
//   {
//     component: ProductList,
//     path: "/list/:name?/:subname?",
//   },
//   {
//     component: ShopBy,
//     path: "/shopby/:name?",
//   },
//   {
//     component: SelectedProduct,
//     path: "/info/:name/:id",
//   },
//   {
//     component: Cart,
//     path: "/cart",
//   },
//   {
//     component: WishList,
//     path: "/wishlist",
//   },
//   {
//     component: Address,
//     path: "/address",
//   },
//   {
//     component: PaymentContainer,
//     path: "/pay",
//   },
//   {
//     component: OrderConfirmation,
//     path: "/orderconfirm",
//   },
//   {
//     component: Layout,
//     path: "/myprofile",
//   },
//   {
//     component: Policies,
//     path: "/policy",
//   },
//   {
//     component: Page404,
//     path: "/error/404",
//   },
//   {
//     component: Page500,
//     path: "/error/500",
//   },
// ];

// export default RoutesData;
import React from "react";

export default function RoutesData() {
  return <div>RoutesData</div>;
}
