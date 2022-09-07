import React from "react";
import { CheckBoxIcon, CloseIcon } from "../../../../common/Icons";
import { TextButton } from "../../../../ui-kit/TextButton/TextButton.view";
import { TextInputField } from "../../../../ui-kit/TextInputField/TextInputField";
import { useAddress } from "../../../Address/useAddress.hook";

import "./AddressForm.scss";

interface IProps {
  toggleUpdateView: () => void;
}

export const UpdateAddressForm: React.FC<IProps> = (props: IProps) => {
  const { toggleUpdateView } = props;

  const {
    state,
    error,
    visible,
    handleOnChange,
    handleOnSubmit,
    onClickCancel,
  } = useAddress();

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      text: "Name",
      value: state.name,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      text: "Email",
      value: state.phone,
    },

    {
      id: 5,
      name: "flatNo",
      type: "text",
      text: "Flat No",
      value: state.flatNo,
    },
    {
      id: 6,
      name: "street",
      type: "text",
      text: "Street",
      value: state.street,
    },

    {
      id: 7,
      name: "landMark",
      type: "text",
      text: "Land Mark",
      value: state.landMark,
    },
    {
      id: 8,
      name: "city",
      type: "text",
      text: "City",
      value: state.city,
    },
    {
      id: 8,
      name: "state",
      type: "text",
      text: "State",
      value: state.state,
    },
    {
      id: 9,
      name: "pin",
      type: "number",
      text: "Pin",
      value: state.pin,
    },
  ];

  const getInputFields = () => {
    return (
      <React.Fragment>
        {inputs.map((item: any) => {
          return (
            <TextInputField
              name={item.name}
              type={item.type}
              text={item.text}
              value={item.value}
              onChange={handleOnChange}
            />
          );
        })}
      </React.Fragment>
    );
  };

  return (
    <div className="Modal__Content">
      <header className="Modal__Header">
        <h3 className="Modal__Title Heading u-h3">Add a new address</h3>
        <p className="Modal__Description">
          Please fill in the information below:
        </p>
      </header>
      <button
        className="Modal__Close Modal__Close--outside"
        data-action="close-modal"
        onClick={() => {
          onClickCancel(toggleUpdateView);
        }}
      >
        <CloseIcon classname="Icon Icon--close" />
      </button>

      <form
        method="post"
        action="/account/addresses"
        id="address_form_new"
        className="Form Form--spacingTight"
      >
        {visible && (
          <div className="Form__Item alert alert--error u-h4">{error}</div>
        )}

        {getInputFields()}

        <div className="Form__Item">
          <div className="Form__CheckboxWrapper">
            <input
              type="checkbox"
              className="Form__Checkbox"
              name="address[default]"
              id="address-new[default]"
              value="0"
            />
            <CheckBoxIcon />
            <label htmlFor="address-new[default]">Set as default address</label>
          </div>
        </div>

        <TextButton
          items="Save"
          className="Address-btn"
          isprimary={true}
          onClick={handleOnSubmit as any}
        />
      </form>
    </div>
  );
};
