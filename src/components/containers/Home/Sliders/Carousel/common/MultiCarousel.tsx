import React from "react";
import Slider from "react-slick";
import { ImageView } from "./ImageView";
import { IProduct } from "../../../../../../model/IProductType";

interface IProps {
  Sliderimages: IProduct[];
}

export const MultiCarousel: React.FC<IProps> = (props: IProps) => {
  const settings = {
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { Sliderimages } = props;
  return (
    <Slider {...settings}>
      {Sliderimages?.map((item: IProduct) => {
        return (
          <ImageView
            key={item.mcId}
            url={
              item.imageurl ||
              (item.productImages && item.productImages[0]?.imageUrl)
            }
            maxWidth="400px"
            item={item}
          />
        );
      })}
    </Slider>
  );
};
