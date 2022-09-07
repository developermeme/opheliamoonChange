import { useParams } from "react-router-dom";
import { ShopByProducts } from "./ShopByProducts";
import { ShopByCollections } from "./ShopByCollections";
import "./ShopBy.scss";

export const ShopBy = () => {
  const { name } = useParams() as any;

  return (
    <>
      {name === "SHOP BY PRODUCTS" ? <ShopByProducts /> : <ShopByCollections />}
    </>
  );
};
