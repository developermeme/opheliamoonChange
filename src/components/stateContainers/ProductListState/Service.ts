import { ProductServices } from "../../../utils/API";

export const getshopByPdtsService = async (): Promise<any> => {
  return ProductServices.ShopByProducts()
    .then((res: any) => res.data)
    .catch((error: any) => error);
};
