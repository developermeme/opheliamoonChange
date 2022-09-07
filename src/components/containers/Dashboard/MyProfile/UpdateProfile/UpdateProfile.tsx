import React from "react";
import { DropDown } from "../../../../common/DropDown/DropDown";
import { CloseIcon } from "../../../../common/Icons";
import { TextButton } from "../../../../ui-kit/TextButton/TextButton.view";
import { useProfile } from "../useProfile.hook";
import ProfilePic from "./ProfilePic";
import "./UpdateProfile.scss";

interface IProps {
  toggleUpdateView: () => void;
}

export const UpdateProfile: React.FC<IProps> = (props: IProps) => {
  const { toggleUpdateView } = props;

  const {
    state,
    error,
    visible,
    handleOnChange,
    registerOnSubmit,
    selectedCountry,
    handleCountrySelect,
    countries,
  } = useProfile();

  const inputs = [
    {
      id: 1,
      name: "fname",
      type: "text",
      text: "First name",
      value: state.fname,
    },
    {
      id: 2,
      name: "lname",
      type: "text",
      text: "Last name",
      value: state.lname,
    },

    {
      id: 3,
      name: "uPhone",
      type: "number",
      text: "Mobile number",
      value: state.uPhone,
    },
  ];

  const getFormInputs = () => {
    return inputs.map((item: any) => {
      return (
        <div className="Form__Item u-h5" key={item.id}>
          <input
            type={item.type}
            className="Form__Input"
            name={item.name}
            placeholder={item.text}
            value={item.value}
            onChange={handleOnChange}
          />
          <label className="Form__FloatingLabel u-h6">{item.text}</label>
        </div>
      );
    });
  };

  return (
    <div className="Modal__Content">
      <button
        className="Modal__Close Modal__Close--outside"
        data-action="close-modal"
        onClick={toggleUpdateView}
      >
        <CloseIcon classname="Icon Icon--close" />
      </button>

      <header className="Modal__Header">
        <h3 className="Modal__Title u-h3">Update Profile</h3>
      </header>
      <form
        method="post"
        id="address_form_new"
        className="Form Form--spacingTight"
      >
        <div className="Form__Item">
          <ProfilePic />
        </div>
        {visible && (
          <div className="Form__Item alert alert--error u-h6">{error}</div>
        )}

        {getFormInputs()}
        <div className="Form__Item u-h5">
          <DropDown
            name="Countries"
            value={selectedCountry}
            onChange={handleCountrySelect}
            collections={countries}
          />
        </div>
        <TextButton
          items="Save Changes"
          className="profile-button"
          isprimary={true}
          onClick={registerOnSubmit as any}
        />
      </form>
    </div>
  );
};
