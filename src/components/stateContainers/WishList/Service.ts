import { FavServices } from "../../../utils/API";

export interface IGETFAV {
  phone: string;
}

export interface IADDFAV {
  phone: string;
  pId: number;
}

export interface IDELFAV {
  id: number;
  cusId: string;
}

export const getFavService = async (userId: IGETFAV): Promise<any> => {
  return FavServices.getFav(userId)
    .then((res: any) => res.data)
    .catch((error: any) => error);
};

export const addFavService = async (item: IADDFAV): Promise<any> => {
  return FavServices.addFav(item)
    .then((res: any) => res.status)
    .catch((error: any) => error);
};

export const deleteFavService = async (id: IDELFAV): Promise<any> => {
  return FavServices.deleteFav(id)
    .then((res: any) => res.status)
    .catch((error: any) => error);
};
