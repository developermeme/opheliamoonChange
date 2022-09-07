export interface IPlaceOrder {
  cusId: string;
  addId: number;
  pstatus: string;
  tnxid: string;
}

export interface IOrderItem {
  id: number;
  orderItemId: number;
  name: string;
  quantity: number;
  subt: number;
  itemType: string;
  size: string;
  color: null | string;
  imgUrl: string;
  taxAmount: number;
  deliveryCharge: number;
  orderId: number;
}

export interface IOrder {
  id: number;
  orderId: number;
  paymentStatus: string;
  ordercode: any;
  userId: string;
  addId: number;
  shopId: string;
  items: IOrderItem[];
  price: number;
  date: string;
  name: string;
  phone: string;
  flatNo: string;
  landMark: string;
  city: string;
  pin: string;
  orderStatus: {
    id: number;
    status: string;
    sPhone: string;
    orders: number;
  };
  street: string;
}

// InitialState
export interface IInitialState {
  placeOrder: boolean | null;
  orderList: IOrder[];
}
