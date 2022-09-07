import React from "react";
import { LoginValues } from "../../../constant/Variables";
import { usePwdReset } from "../../../hook/usePwdReset.hook";
import { TextButton } from "../../ui-kit/TextButton/TextButton.view";
import "../UserAccount.scss";

export const PasswordReset: React.FC = (): JSX.Element => {
  const { handlePasswordChange, handleUpdatePwdOnSubmit, password, pwdError } =
    usePwdReset();
  return (
    <section
      data-section-id="password-change"
      data-section-type="password-change"
    >
      <div className="user--form">
        <div className="user--form__container extra-narrow">
          <form
            id="reset_customer"
            acceptCharset="UTF-8"
            name="reset_customer"
            className="user--form__wrapper"
            autoComplete="off"
          >
            <header className="user--form__header">
              <h1 className="user--form__title u-h3">
                {LoginValues.FORGOT_PASSWORD}
              </h1>
            </header>
            {pwdError && (
              <p className="alert alert--error form__alert u-h6">{pwdError}</p>
            )}
            <div className="user--form__item">
              <input
                className="user--form__input u-h4"
                required={true}
                aria-label="password"
                type="password"
                name="password"
                value={password.password}
                placeholder="Enter new password"
                onChange={handlePasswordChange}
              />
              <label className="form__floating--label  u-h4">Password</label>
            </div>
            <div className="user--form__item">
              <input
                className="user--form__input u-h4"
                required={true}
                aria-label="Email"
                type="password"
                name="cpassword"
                value={password.cpassword}
                placeholder="Confirm new password"
                onChange={handlePasswordChange as any}
              />
              <label className="form__floating--label  u-h4">
                Confirm Password
              </label>
            </div>
            <TextButton
              type="submit"
              className="button--full"
              isprimary={true}
              items={LoginValues.SUBMIT}
              onClick={handleUpdatePwdOnSubmit as any}
            />
          </form>
        </div>
      </div>
    </section>
  );
};
