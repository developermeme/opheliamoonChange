import { useSelector } from "react-redux";
import Slider from "react-slick";
import { Timer } from "../../../common/Timer/Timer";
import { ICarousel } from "../../../../model/ISliderType";
import { IRootState } from "../../../../redux/reducer/CombineReducer";
import "./Banner.scss";

export const Banner = () => {
  const { sliderData } = useSelector((state: IRootState) => state);
  const carousel = sliderData && sliderData.Sliders.carousel;

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {carousel?.map((slide: ICarousel) => (
          <div className="ImageHero">
            <img key={slide.banId} src={slide.bannerUrl} alt="Slider-Img" />
            <div className="ImageHero__TextContent">
              <Timer
                endDate={slide.date}
                showDay={true}
                theme="dark"
                size={"extra-small"}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
