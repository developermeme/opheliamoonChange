import { ShopBy } from "../components/containers/ShopBy/ShopBy";
import { HomeView } from "../components/containers/Home/HomeView";
import WishList from "../components/containers/WishList/WishList";
import Layout from "../components/containers/Dashboard/Layout/Layout";
import { Policies } from "../components/containers/Policies/Policies";
import ProductList from "../components/containers/ProductList/ProductList";
import SearchContainer from "../components/containers/SearchContainer/SearchContainer";
import SelectedProduct from "../components/containers/SelectedProduct/SelectedProduct";
import OrderConfirmation from "../components/containers/OrderConfirmation/OrderConfirmation";
import GuestGuard from "./GuestGuard";
import { PartialRouteObject } from "./Routes";
import { ReviewForm } from "../components/containers/ReviewForm/ReviewForm";

const MainRoutes: PartialRouteObject = {
  path: "",
  element: <GuestGuard />,
  children: [
    {
      path: "",
      element: <HomeView />,
    },
    {
      path: "search",
      element: <SearchContainer />,
    },
    {
      element: <ProductList />,
      path: "list",
      children: [
        {
          path: ":name",
          children: [
            {
              path: ":subname",
              children: [
                {
                  path: ":childname",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      element: <ShopBy />,
      path: "shopby/:name",
    },
    {
      element: <SelectedProduct />,
      path: "info/:name/:id",
    },
    {
      element: <ReviewForm />,
      path: "review/:id",
    },
    {
      element: <WishList />,
      path: "wishlist",
    },
    {
      element: <OrderConfirmation />,
      path: "orderconfirm",
    },
    {
      element: <Layout />,
      path: "myprofile",
    },
    {
      element: <Policies />,
      path: "policy",
    },
  ],
};

export default MainRoutes;
