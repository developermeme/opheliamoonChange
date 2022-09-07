import {
  addAddressAPI,
  addCartAPI,
  addFavouriteAPI,
  addReviewAPI,
  allMetaHomeAPI,
  allProductsAPI,
  bannersAPI,
  cashFreeAPI,
  categoriesAPI,
  confirmationAPI,
  deleteAddressAPI,
  deleteCartAPI,
  deletefavAPI,
  deleteItemAPI,
  featuredCollectionAPI,
  featurePdtsAPI,
  forgotpwdAPI,
  getAddressAPI,
  getFavoritesAPI,
  getOrderAPI,
  getUserAPI,
  guestUserRegistrationAPI,
  helpAPI,
  homeProductsAPI,
  loginAPI,
  orderStatusUpdateAPI,
  placeOrderAPI,
  plansAPI,
  preOrder,
  registerAPI,
  searchAPI,
  sendPasswordUsernameAPI,
  shopbyproductsAPI,
  singleProductAPI,
  stripePay,
  subscripeAPI,
  subscriptionAPI,
  updateAddressAPI,
  updatepwdAPI,
  updateSubscriptionAPI,
  updateUserAPI,
  verifyDeliveryAPI,
  viewCartAPI,
} from "./APIEndPoint";
import { GET, GETALL, POST } from "./axios";

export const UserServices = {
  login: async function (user: any) {
    const promise = await POST(loginAPI, user);
    return promise;
  },
  forgotpwd: async function (email: any) {
    const promise = await POST(forgotpwdAPI, email);
    return promise;
  },
  confimation: async function (token: any) {
    const promise = await POST(confirmationAPI, token);
    return promise;
  },
  updatepwd: async function (user: any) {
    const promise = await POST(updatepwdAPI, user);
    return promise;
  },
  register: async function (user: any) {
    const promise = await POST(registerAPI, user);
    return promise;
  },
  guestUserRegistration: async function (user: any) {
    const promise = await POST(guestUserRegistrationAPI, user);
    return promise;
  },
};

export const ProductServices = {
  categories: async () => {
    const promise = await GET(categoriesAPI);
    return promise;
  },
  Search: async (item: any) => {
    const promise = await GET(searchAPI, item);
    return promise;
  },
  SlidersAPI: async () => {
    const promise = await GETALL([bannersAPI, featuredCollectionAPI]);
    return promise;
  },
  AllProducts: async (item: any) => {
    const promise = await GET(allProductsAPI, item);
    return promise;
  },
  FeatureProducts: async (item: any) => {
    const promise = await GET(featurePdtsAPI, item);
    return promise;
  },
  HomeProducts: async () => {
    const promise = await GET(homeProductsAPI);
    return promise;
  },
  PreOrder: async (item: any) => {
    const promise = await GET(preOrder, item);
    return promise;
  },

  MetaHome: async (item: any) => {
    const promise = await GET(allMetaHomeAPI, item);
    return promise;
  },
  ShopByProducts: async () => {
    const promise = await GET(shopbyproductsAPI);
    return promise;
  },
};

export const CartServices = {
  addCart: async function (item: any) {
    const promise = await POST(addCartAPI, {}, item);
    return promise;
  },
  deleteCartItem: async function (details: any) {
    const promise = await POST(deleteItemAPI, details);
    return promise;
  },
  deleteCart: async function (details: any) {
    const promise = await POST(deleteCartAPI, details);
    return promise;
  },
  viewCart: async function (details: any) {
    const promise = await GET(viewCartAPI, details);
    return promise;
  },
  verifyDelivery: async function (item: any) {
    const promise = await GET(verifyDeliveryAPI, item);
    return promise;
  },
  sendPasswordUsername: async function (details: any) {
    const promise = await POST(sendPasswordUsernameAPI, details);
    return promise;
  },
};

// Profile Services

export const UpdateProfileservice = {
  getUserProfile: async function (item: any) {
    const promise = await GET(getUserAPI, item);
    return promise;
  },
  updateUserProfile: async function (item: any) {
    const promise = await POST(updateUserAPI, item);
    return promise;
  },
  help: async function (item: any) {
    const promise = await POST(helpAPI, item);
    return promise;
  },
};

// Delivery Services

export const DeliveryServices = {
  getAddress: async function (item: any) {
    const promise = await GET(getAddressAPI, item);
    return promise;
  },
  addAddress: async function (item: any) {
    const promise = await POST(addAddressAPI, item);
    return promise;
  },
  deleteAddress: async function (item: any) {
    const promise = await POST(deleteAddressAPI, item);
    return promise;
  },
  updateAddress: async function (item: any) {
    const promise = await POST(updateAddressAPI, item);
    return promise;
  },
};

// Fav Services

export const FavServices = {
  getFav: async function (item: any) {
    const promise = await GET(getFavoritesAPI, item);
    return promise;
  },
  addFav: async function (item: any) {
    const promise = await POST(addFavouriteAPI, item);
    return promise;
  },
  deleteFav: async function (item: any) {
    const promise = await POST(deletefavAPI, item);
    return promise;
  },
};

// OrderService
export const OrderServices = {
  placeOrder: async function (item: any) {
    const promise = await POST(placeOrderAPI, item);
    return promise;
  },
  orderStatusUpdate: async function (item: any) {
    const promise = await POST(orderStatusUpdateAPI, item);
    return promise;
  },
  getOrderByUserId: async function (item: any) {
    const promise = await GET(getOrderAPI, item);
    return promise;
  },
};

//Subscription
export const SubscriptionServices = {
  Subscription: async function (item: any) {
    const promise = await GET(subscriptionAPI, item);
    return promise;
  },
  plans: async function () {
    const promise = await POST(plansAPI);
    return promise;
  },
  UpdateSubscription: async function (item: any) {
    const promise = await POST(updateSubscriptionAPI, item);
    return promise;
  },
  NewsLetter: async function (item: any) {
    const promise = await POST(subscripeAPI, item);
    return promise;
  },
};

// SingleProductService
export const ShowSingLeProduct = {
  showSingleProduct: async function (item: any) {
    const promise = await GET(singleProductAPI, item);
    return promise;
  },
};

export const paymentService = {
  stripePay: async function (item: any) {
    const promise = await POST(stripePay, item);
    return promise;
  },
  cashFree: async function (item: any) {
    const promise = await POST(cashFreeAPI, item);
    return promise;
  },
};

export const reviewtService = {
  addReview: async function (item: any, data: any) {
    const promise = await POST(addReviewAPI, item);
    return promise;
  },
};
