import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onChange } from "../../../../constant/Types";
import { IRootState } from "../../../../redux/reducer/CombineReducer";
import { Countries } from "../../../common/json/Countries";
import { LoggedInUser } from "../../../common/Script";
import { updateUserProfile } from "../../../stateContainers/Profile/ThunkAction";
import {
  validateMobileNumber,
  validateName,
} from "../../../UserAccount/Script";

export const useProfile = () => {
  const { profileData } = useSelector((state: IRootState) => state);
  const ProfileInfo = profileData && profileData.profileDetails.Profile;
  const SubscriptionInfo = profileData && profileData.subcription;
  const PlansInfo = profileData && profileData.plans;
  const subsInfo = profileData && profileData.subcription;

  const dispatch = useDispatch();

  const initialState = {
    uPhone: ProfileInfo?.uPhone,
    fname: ProfileInfo?.fname,
    lname: ProfileInfo?.lname,
  };

  const [state, setState] = React.useState(initialState);
  const [error, setError] = React.useState<string | null>();
  const [visible, setVisible] = useState(false);
  const [fileSelected, setFileSelected] = React.useState<File | any>(
    ProfileInfo?.iUmg
  );

  const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;
    if (!fileList) return;
    setFileSelected(fileList[0]);
  };

  const uploadFile = function () {
    if (fileSelected) {
      const formData = new FormData();
      formData.append("image", fileSelected, fileSelected.name);
      return formData;
    }
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

  const handleOnChange = (e: onChange) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
    setVisible(false);
    setError(null);
  };

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

    const isValidFirstName = validateName(fields.fname, "fname");
    const isValidLastName = validateName(fields.lname, "lname");
    const isValidMobileNumber = validateMobileNumber(fields.uPhone);
    if (formIsValid && !isValidFirstName.formIsValid) {
      errors = isValidFirstName.error;
      formIsValid = false;
    } else if (formIsValid && !isValidLastName.formIsValid) {
      errors = isValidLastName.error;
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

  const registerOnSubmit = (e: any) => {
    e.preventDefault();
    if (validate()) {
      let credentials = { ...state };
      credentials.uPhone = selectedRegion + credentials.uPhone;
      let updatedData: any = {
        ...credentials,
        file: "",
        email: LoggedInUser as string,
        userid: ProfileInfo.userid,
      };
      dispatch(updateUserProfile(updatedData));
    } else {
      setVisible(true);
    }
  };

  return {
    state,
    error,
    visible,
    fileSelected,
    ProfileInfo,
    uploadFile,
    handleImageChange,
    handleOnChange,
    registerOnSubmit,
    SubscriptionInfo,
    PlansInfo,
    subsInfo,
    selectedCountry,
    handleCountrySelect,
    countries,
  };
};
