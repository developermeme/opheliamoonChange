import React from "react";
import { IProduct } from "../../../../../model/IProductType";
import { MultiCarousel } from "./common/MultiCarousel";
import "./Carousel.scss";

interface IProps {
  Sliderimages: IProduct[];
  header?: string;
  buttonName?: string;
  hanleViewAllProducts?: () => void;
}

export const Carousel: React.FC<IProps> = (props: IProps) => {
  const { Sliderimages, header } = props;

  const Header = () => {
    return (
      <header className="SectionHeader">
        <h2>{header}</h2>
      </header>
    );
  };

  return (
    <section className="Product__Slider">
      {header && <Header />}
      <MultiCarousel Sliderimages={Sliderimages} />
    </section>
  );
};
