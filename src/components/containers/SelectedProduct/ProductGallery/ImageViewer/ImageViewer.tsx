import { useEffect, useState } from "react";
import Slider from "react-slick";
import { useSelProduct } from "../../useSelProduct.hook";

import MainImage from "../MainImage";
import "./ImageViewer.scss";
import ImageZoom from "./ImageZoom";

export const ImageViewer = () => {
  const { images } = useSelProduct();

  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);
  const [slider1, setSlider1] = useState<any>(null);
  const [slider2, setSlider2] = useState<any>(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const settingsMain = {
    fade: true,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "main-slider",
    asNavFor: ".slider-nav",
    adaptiveHeight: true,
  };

  const settingsThumbs = {
    speed: 500,
    vertical: true,
    infinite: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    verticalSwiping: true,
    asNavFor: ".slider-for",
    className: "slick-thumb",
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          // slidesToShow: 6,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="ProductImages">
      <Slider
        {...settingsMain}
        asNavFor={nav2}
        ref={(slider) => setSlider1(slider)}
      >
        {images.map((slide) => (
          // <MainImage  key={slide.id} image={slide} />
          <ImageZoom imageUrl={slide.imageUrl} key={slide.id} />
        ))}
      </Slider>

      <Slider
        {...settingsThumbs}
        asNavFor={nav1}
        ref={(slider) => setSlider2(slider)}
      >
        {images.map((slide) => (
          <img key={slide.id} src={slide.imageUrl} alt="ProductImage" />
        ))}
      </Slider>
    </div>
  );
};
