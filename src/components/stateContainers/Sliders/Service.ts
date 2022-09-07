import { ProductServices } from "../../../utils/API";

export const getSliders = async (): Promise<any> => {
  return ProductServices.SlidersAPI()
    .then((res) => res)
    .catch((error) => error);
};

export const metaService = async (item: any): Promise<any> => {
  return ProductServices.MetaHome(item)
    .then((res: any) => res.data)
    .catch((error: any) => error);
};
