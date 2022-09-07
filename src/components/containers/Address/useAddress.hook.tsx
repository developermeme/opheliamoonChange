import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onChange, onClick } from "../../../constant/Types";
import { IAddress, ICartItemResponse } from "../../../model/IProductType";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import { UserServices } from "../../../utils/API";
import {
  DeleteAddressItem,
  updateAddressList,
} from "../../common/AddressScripts";
import { Countries } from "../../common/json/Countries";
import { LoggedInUser } from "../../common/Script";
import { IAddAddress } from "../../stateContainers/Address/Service";
import {
  SetEditedAddress,
  SetSelecteddAddress,
} from "../../stateContainers/Address/Slice";
import {
  addUserAddress,
  deleteUserAddress,
  getUserAddressList,
} from "../../stateContainers/Address/ThunkAction";
import { AddToCart } from "../../stateContainers/Cart/ThunkActions";
import {
  deliveryService,
  sendPasswordToUserService,
} from "../../stateContainers/SelectedProduct/Services";
import {
  validateEmailId,
  validateMobileNumber,
  validateName,
} from "../../UserAccount/Script";
import { useCart } from "../Cart/useCart.hook";

export const useAddress = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { viewCart } = useCart();

  const { addressData } = useSelector((state: IRootState) => state);
  const addressListRedux = addressData && addressData.addressList;
  const editedAddress = addressData && addressData.EditedAddress;
  const { profileData } = useSelector((state: IRootState) => state);
  const userId = profileData && profileData.profileDetails.Profile.userid;

  let addressList: IAddress[] = [];
  let addressItems = localStorage.getItem("user-address") as any;
  if (addressItems) addressList = JSON.parse(addressItems as string);

  const [selected, setSelected] = React.useState(0);
  const [openUpdateView, setOpenUpdateView] = React.useState(false);

  const toggleUpdateView = () => {
    setOpenUpdateView(!openUpdateView);
  };

  const handleClick = (no: number) => {
    setSelected(no);
  };

  const item = {
    phone: LoggedInUser as string,
  };

  // Form Validation
  const initialState = {
    name: "",
    phone: "",
    flatNo: "",
    street: "",
    landMark: "",
    city: "",
    state: "",
    pin: "",
    uPhone: "",
  };

  const initialValues = editedAddress ? editedAddress : initialState;
  const [state, setState] = React.useState<any>(initialValues);
  const [error, setError] = React.useState<string | null>();
  const [visible, setVisible] = React.useState(false);

  // API Calls
  const fetchAddreses = () => {
    dispatch(getUserAddressList(item));
  };

  const RemoveAddreses = (num: number) => {
    DeleteAddressItem(num);
    if (LoggedInUser) {
      dispatch(deleteUserAddress({ id: num }));
    } else {
      window.location.reload();
    }
  };

  const handleOnChange = (e: onChange) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
    setVisible(false);
    setError(null);
  };

  React.useEffect(() => {
    if (!error) {
      setVisible(false);
      return;
    }
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [error]);

  //Country Change

  const countries = Countries.map((item: any) => {
    return item.name;
  });
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [selectedRegion, setSelectedRegion] = React.useState<
    string | undefined
  >("");

  const handleCountrySelect = (e: any) => {
    e.preventDefault();
    setSelectedCountry(e.target.value);
  };

  React.useEffect(() => {
    const regionList = Countries.find(
      (item: any, index) => item.name === selectedCountry
    );
    setSelectedRegion(regionList?.dialCode);
  }, [selectedCountry]);

  const validate = () => {
    let fields = state;
    let errors = "";
    let formIsValid = true;

    const isValidName = validateName(fields.name, "name");
    const isValidEmail = validateEmailId(fields.phone);
    const isValidMobileNumber = validateMobileNumber(fields.uPhone);

    if (
      fields.flatNo === "" ||
      fields.street === "" ||
      fields.city === "" ||
      fields.state === "" ||
      fields.landMark === "" ||
      fields.pin === ""
    ) {
      errors = "Please enter all the fields";
      formIsValid = false;
    } else if (formIsValid && !isValidName.formIsValid) {
      errors = isValidName.error;
      formIsValid = false;
    } else if (formIsValid && !isValidEmail.formIsValid) {
      errors = isValidEmail.error;
      formIsValid = false;
    } else if (formIsValid && !isValidMobileNumber.formIsValid) {
      errors = isValidMobileNumber.error;
      formIsValid = false;
    } else if (formIsValid && selectedRegion === undefined) {
      formIsValid = false;
      errors = "Please select your country";
    } else {
      errors = "";
      formIsValid = true;
    }
    setError(errors);
    return formIsValid;
  };

  const handleOnSubmit = (e: onClick, toggleUpdateView: any) => {
    e.preventDefault();
    if (validate()) {
      let credentials = { ...state };
      credentials.uPhone = selectedRegion + credentials.uPhone;
      updateAddressList(credentials);
      toggleUpdateView();
    } else {
      setVisible(true);
    }
  };

  const onClickEdit = (item: any, toggleUpdateView: any) => {
    dispatch(SetEditedAddress(item));
    toggleUpdateView();
  };

  const onClickCancel = (toggleUpdateView: any) => {
    dispatch(SetEditedAddress({} as IAddAddress));
    window.location.reload();
    toggleUpdateView();
  };

  const onAddNewCancel = (toggleUpdateView: any) => {
    dispatch(SetEditedAddress({} as IAddAddress));
    toggleUpdateView();
  };

  const onAddNewAdd = (e: onClick, toggleUpdateView: any) => {
    e.preventDefault();
    dispatch(SetEditedAddress({} as IAddAddress));
    toggleUpdateView();
  };

  //Add Cart to API
  const addCartItems = async (id: number, emailId: string) => {
    const items = viewCart.cartItem?.map((item: ICartItemResponse) => {
      return {
        pId: item.productInfo.productCode,
        custId: emailId,
        price: item.productInfo.originalPrice,
        qty: item.quantity,
        size: item.productInfo.size,
      };
    });
    dispatch(AddToCart(items));
  };

  //Add address to API
  const addAddress = async (selectedAddress: IAddress, id: number) => {
    let updatedResult = {
      name: selectedAddress.name,
      phone: selectedAddress.uPhone,
      email: selectedAddress.phone,
      flatNo: selectedAddress.flatNo,
      street: selectedAddress.street,
      landMark: selectedAddress.landMark,
      city: selectedAddress.city,
      state: selectedAddress.state,
      pin: selectedAddress.pin,
      userid: id,
    };
    dispatch(addUserAddress(updatedResult));
  };

  const checkDelivery = async (pin: any) => {
    await deliveryService({ zipcode: pin })
      .then((res) => {
        if (res === "Available") {
          navigate("/pay");
        } else {
          toast(`dispatch not available at ${pin}`);
        }
      })
      .catch((error) => {
        console.log("Error", error);
        toast("Something went wrong");
      });
  };

  const AddUserDetails = async (selectedAddress: IAddress, id: number) => {
    const AddressItem = {
      address: selectedAddress as IAddress,
      uName: selectedAddress.name,
      uPhone: selectedAddress.phone,
      userid: id,
    };
    localStorage.setItem("selected-address", JSON.stringify(AddressItem));
    dispatch(SetSelecteddAddress(AddressItem));
    await checkDelivery(selectedAddress.pin);
    await addCartItems(id, selectedAddress.phone);
    await addAddress(selectedAddress, id);
  };

  const sendPasswordToUser = async (
    username: string,
    password: string,
    id: any,
    selectedAddress: IAddress
  ) => {
    await sendPasswordToUserService({
      username,
      password,
      phone: selectedAddress.uPhone,
    })
      .then(async (res) => {
        toast.info("Password Sent to your registered email address");
        await AddUserDetails(selectedAddress, id);
      })
      .catch((error) => {
        console.log("Error", error);
        toast.error("Something went wrong while registering user credentials");
      });
  };

  const RegisterUser = async (selectedAddress: IAddress) => {
    const credentials = {
      fname: selectedAddress.name,
      email: selectedAddress.phone,
      uPhone: selectedAddress.uPhone,
      password: "Nazca@78",
    };
    await UserServices.guestUserRegistration(credentials)
      .then(async (res: any) => {
        if (res.data) {
          const id = res.data.split(":")[1];
          await sendPasswordToUser(
            credentials.email,
            credentials.password,
            id,
            selectedAddress
          );
        }
      })
      .catch((error: any) => {
        console.log("Error - ", error?.response);
        if (error?.response?.status === 409) {
          toast.info("Already registered with this email, Please Login");
          setTimeout(() => {
            navigate("/auth/login");
          }, 5000);
        } else {
          toast.error("Something Went Wrong please try again later");
        }
      });
  };

  const continuePaymentClick = async () => {
    const selectedAddress = addressList.find(
      (item: IAddress, index: number) => index === selected
    );
    toast.info("Processing...");
    if (selectedAddress) {
      if (LoggedInUser) {
        await AddUserDetails(selectedAddress, userId);
      } else {
        await RegisterUser(selectedAddress);
      }
    } else {
      toast.info("Add your Address");
    }
  };

  return {
    fetchAddreses,
    addressList,
    selected,
    handleClick,
    RemoveAddreses,
    openUpdateView,
    toggleUpdateView,
    state,
    error,
    visible,
    handleOnChange,
    handleOnSubmit,
    onClickEdit,
    onClickCancel,
    onAddNewCancel,
    continuePaymentClick,
    onAddNewAdd,
    addressListRedux,
    handleCountrySelect,
    countries,
    selectedRegion,
    selectedCountry,
  };
};
