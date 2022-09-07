export interface IProductImage {
  id: number;
  imId: number;
  imageUrl: string;
  mcId: number;
}

export interface IProductSize {
  id: number;
  sid: number;
  psize: string;
  price: number;
  qty: number;
  mcId: number;
}

export interface IProductSepc {
  id: number;
  spid: number;
  specification: string;
  mcId: number;
}

export interface IRating {
  numbers: number;
  rating: number;
  ratingid: number;
}

export interface IReviews {
  dislike: number;
  like: number;
  name: string;
  rating: number;
  reviews: string;
  rid: number;
  start: number;
  url: string;
}

export interface IProduct {
  date: string;
  deliveryTime: string;
  descpription: string;
  descpription1: string;
  fabric: string;
  imageurl: string;
  maincategory: string;
  mcId: number;
  minqty: number;
  offer: number;
  phone: string;
  price: number;
  productImages: IProductImage[];
  productSize: IProductSize[];
  productcode: string;
  productcolor: string;
  productname: string;
  quantity: string;
  sizechart: string;
  subcategory: string;
  tax: number;
  productSpecs?: IProductSepc[];
  metatags?: any[];
  shopbyproducts: string | null;
  pntw: string | null;
  subcategory1: string;
  ratings: IRating[];
  reviews: IReviews[];
}

export interface ICartItemInfo {
  productCode: number;
  productName: string;
  originalPrice: number;
  price: number;
  offer: number;
  imageurl: string;
  sPhone: string;
  enddate: string;
  size: string;
  color: string | null;
  descpription: string;
  cartId: number;
  qty: number;
  minqty: number;
}

export interface ICartItemResponse {
  productInfo: ICartItemInfo;
  quantity: number;
  subTotal: number;
  actualPrice: number;
  deduction: number;
  tax: number;
}

export interface IViewCartResponse {
  orderNumber: number;
  cartItem: ICartItemResponse[];
  totalPrice: number;
  actualPrice?: number;
  addId: number;
  tax: number;
}

export interface IAddress {
  city: string;
  state: string;
  flatNo: string;
  id: number;
  landMark: string;
  name: string;
  phone: string;
  pin: string;
  street: string;
  uPhone: string;
}

export interface IProfile {
  userid: number;
  uPhone: string;
  fname: string;
  lname: string;
  iUmg: string;
  email: string;
  userReferral: string;
  affiliateCode: string;
  password: string;
  address: IAddress[] | any;
  enabled: boolean;
}

export interface IWishList {
  deliveryTime: string;
  descpription: string;
  endDate: string;
  favId: number;
  mcId: number;
  offer: number;
  pIm: IProductImage[];
  pName: string;
  pcolor: string;
  price: number;
  ps: IProductSize[];
  quantity: string;
  sPhone: string;
}
