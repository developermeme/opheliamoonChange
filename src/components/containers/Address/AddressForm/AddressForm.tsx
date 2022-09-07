import React from "react";
import { CheckBox } from "./CheckBox/CheckBox";
import { useAddress } from "../useAddress.hook";
import { DropDown } from "../../../common/DropDown/DropDown";
import { TextButton } from "../../../ui-kit/TextButton/TextButton.view";
import { TextInputField } from "../../../ui-kit/TextInputField/TextInputField";
import "./AddressForm.scss";

interface IProps {
  toggleUpdateView: () => void;
}

export const AddressForm: React.FC<IProps> = (props: IProps) => {
  const {
    state,
    error,
    visible,
    handleOnChange,
    handleOnSubmit,
    onClickCancel,
    handleCountrySelect,
    countries,
    selectedCountry,
  } = useAddress();

  const { toggleUpdateView } = props;

  return (
    <React.Fragment>
      <div className="AddressForm__container">
        <div className="AddressForm__Form ">
          <header className="AddressForm__header">
            <h3 className="SectionHeader__Heading u-h3">
              Add Your New Address
            </h3>
          </header>
          {visible && (
            <div className="Form__Item alert alert--error">{error}</div>
          )}
          <div className="fields--2">
            <TextInputField
              type="text"
              name="name"
              text="User Name"
              value={state.name}
              onChange={handleOnChange}
            />
            <TextInputField
              type="email"
              text="Email"
              name="phone"
              onChange={handleOnChange}
              value={state.phone}
            />
          </div>

          <div className="fields--2">
            <TextInputField
              type="text"
              name="flatNo"
              text="Flat No"
              onChange={handleOnChange}
              value={state.flatNo}
            />
            <TextInputField
              type="text"
              text="Street"
              name="street"
              onChange={handleOnChange}
              value={state.street}
            />
          </div>

          <div className="fields--2">
            <TextInputField
              type="text"
              text="City"
              name="city"
              onChange={handleOnChange}
              value={state.city}
            />
            <TextInputField
              type="text"
              text="State"
              name="state"
              onChange={handleOnChange}
              value={state.state}
            />
          </div>
          <div className="fields--2">
            <DropDown
              name="Countries"
              value={selectedCountry}
              onChange={handleCountrySelect}
              collections={countries}
            />
            <TextInputField
              type="number"
              text="Phone Number"
              name="uPhone"
              onChange={handleOnChange}
              value={state.uPhone}
            />
          </div>

          <div className="fields--2">
            <TextInputField
              type="number"
              name="pin"
              text="Pin Code"
              onChange={handleOnChange}
              value={state.pin}
            />
            <TextInputField
              type="text"
              text="Land Mark"
              name="landMark"
              onChange={handleOnChange}
              value={state.landMark}
            />
          </div>
        </div>
        <footer className="AddressForm__footer u-h4">
          <CheckBox label="Make this address default" />
          <div>
            <TextButton
              items="Save"
              className="add-button-full"
              isprimary={true}
              onClick={(e: any) => handleOnSubmit(e, toggleUpdateView) as any}
            />
            <TextButton
              items="Cancel"
              className="add-button-full"
              isprimary={true}
              onClick={() => {
                onClickCancel(toggleUpdateView);
              }}
            />
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};
