import { IProduct } from "../../../model/IProductType";
import { ICarousel } from "../../../model/ISliderType";

export interface ISlidersList {
  carousel: ICarousel[];
  featuredSliders: IProduct[];
}

export interface IInitialState {
  Sliders: ISlidersList;
  metaTagsHome: any[]
}
