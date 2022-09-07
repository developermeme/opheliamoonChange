import React from "react";
import {
  onChange,
  onClick,
  registerInput,
  registerUser,
} from "../../../constant/Types";
import { REGISTER } from "../../../constant/Variables";
import { DropDown } from "../../common/DropDown/DropDown";
import { TextButton } from "../../ui-kit/TextButton/TextButton.view";
import "../UserAccount.scss";

interface IProps {
  onChangeEvent: (e: onChange) => void;
  registerOnSubmit: (e: onClick) => void;
  credentials: registerUser;
  errors: string;
  onFocusEvent: () => void;
  successMsg: string;
  selectedCountry: string;
  handleCountrySelect: (e: any) => void;
  countries: any;
}

export const RegisterView: React.FC<IProps> = (props: IProps): JSX.Element => {
  const {
    onChangeEvent,
    registerOnSubmit,
    credentials,
    errors,
    onFocusEvent,
    successMsg,
    selectedCountry,
    handleCountrySelect,
    countries,
  } = props;

  const inputs: registerInput[] = [
    {
      id: 1,
      name: "fname",
      type: "text",
      text: "First name",
      value: credentials.fname,
    },
    {
      id: 2,
      name: "lname",
      type: "text",
      text: "Last name",
      value: credentials.lname,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      text: "Email",
      value: credentials.email,
    },
    {
      id: 4,
      name: "uPhone",
      type: "number",
      text: "Mobile number",
      value: credentials.uPhone,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      text: "Password",
      value: credentials.password,
    },
    {
      id: 6,
      name: "userReferral",
      type: "text",
      text: "Referral Code",
      value: credentials.userReferral,
    },
  ];

  const getToast = () => {
    let classname;
    let message;
    if (successMsg) {
      classname = "alert--success";
      message = successMsg;
    }
    if (errors) {
      classname = "alert--error";
      message = errors;
    }
    return { classname, message };
  };

  const getInputText = () => {
    return inputs.map((item: registerInput) => {
      return (
        <React.Fragment key={item.id}>
          <div className="user--form__item">
            <input
              type={item.type}
              id={item.name}
              className="user--form__input u-h4"
              name={item.name}
              aria-label={item.text}
              placeholder={item.text}
              autoFocus={false}
              onChange={onChangeEvent}
              onFocus={onFocusEvent}
            />
            <label className="form__floating--label u-h4">{item.text}</label>
          </div>
        </React.Fragment>
      );
    });
  };

  return (
    <section data-section-id="register" data-section-type="register">
      <div className="user--form">
        <div className="user--form__container reg__container extra-narrow">
          <form
            id="create_customer"
            acceptCharset="UTF-8"
            name="create_customer"
            className="user--form__wrapper"
            autoComplete="off"
          >
            <header className="user--form__header">
              <h1 className="user--form__title u-h3">{REGISTER.REGISTER}</h1>
              <p className="user--form__content u-h4">
                Please fill in the information below:
              </p>
            </header>
            {getToast().message && (
              <p className={`alert ${getToast().classname} form__alert u-h6`}>
                {getToast().message}
              </p>
            )}

            <div className="input-grp">{getInputText()}</div>
            <div className="dropdown-grp">
              <DropDown
                name="Countries"
                value={selectedCountry}
                onChange={handleCountrySelect}
                collections={countries}
              />
            </div>
            <TextButton
              type="submit"
              className="button--full"
              isprimary={true}
              items={REGISTER.CREATEACCOUNT}
              onClick={registerOnSubmit as any}
            />
          </form>
        </div>
      </div>
    </section>
  );
};
