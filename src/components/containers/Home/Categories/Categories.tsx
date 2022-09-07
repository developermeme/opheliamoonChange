import { ReactNode } from "react";
import { ShopByCategories } from "./ShopByCategories";

interface IProps {
  title?: string;
  children?: ReactNode;
}

export const Categories = (props: IProps) => {
  return (
    <div className="Home__Section">
      {props.title && (
        <div className="Home__SectionHeader">
          <h4 className="Heading u-h3 Container">{props.title}</h4>
        </div>
      )}
      {props.children || <ShopByCategories />}
    </div>
  );
};
