export type onChange = React.ChangeEvent<HTMLInputElement>;
export type onClick = React.MouseEvent<HTMLElement>;
export type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export type registerUser = {
  fname: string;
  lname: string;
  email: string;
  uPhone: string;
  password: string;
  apiError?: string;
  userReferral: string;
};

export type registerInput = {
  id: number;
  name: string;
  type: string;
  text: string;
  value: string;
};

export type IHeaders = {
  id: number;
  name: string;
};

export type ForgotPwd = {
  email: string;
  apiError?: "";
};

export type loginState = {
  username: string;
  password: string;
  apiError?: string;
};

export type OTP = {
  OTP: string;
  apiError?: string;
};

export type resetType = {
  password: string;
  cpassword: string;
  equalityError?: string;
  apiError?: string;
};

export type AsyncData<T> = {
  loading: boolean;
  error: string | null;
  data: T | null;
};

export const asyncDataInitialState = {
  loading: false,
  error: null,
  data: null,
};
