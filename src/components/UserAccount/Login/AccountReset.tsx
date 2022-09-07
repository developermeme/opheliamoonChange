import React from "react";
import { Link } from "react-router-dom";
import { LoginValues } from "../../../constant/Variables";
import { useForgotPassward } from "../../../hook/useForgotPassward.hook";
import { useValidationInfoContext } from "../../../react-context/ValidationContext";
import { TextButton } from "../../ui-kit/TextButton/TextButton.view";
import "../UserAccount.scss";

export const AccountReset: React.FC = (): JSX.Element => {
  const {
    registeredEmail,
    handleEmailInputChange,
    handleForgotPasswordSubmit,
    emailError,
  } = useForgotPassward();

  const { handleBackToLogin } = useValidationInfoContext();

  return (
    <section data-section-id="account-reset" data-section-type="account-reset">
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
              <p className="user--form__content u-h4">
                {LoginValues.REGISTERED_ID}
              </p>
            </header>
            {emailError && (
              <p className="alert alert--error form__alert u-h6">
                {emailError}
              </p>
            )}
            <div className="user--form__item">
              <input
                type="email"
                className="user--form__input u-h4"
                required={true}
                aria-label="Email"
                id="form-username"
                placeholder="e-mail"
                name="email"
                value={registeredEmail.email}
                onChange={handleEmailInputChange as any}
              />
              <label className="form__floating--label  u-h4">Email</label>
            </div>

            <TextButton
              type="submit"
              className="button--full"
              isprimary={true}
              items={LoginValues.LOGIN}
              onClick={handleForgotPasswordSubmit as any}
            />
            <div className="user--form__footer">
              <span className="u-h4">Remember your password? &nbsp;</span>
              <Link
                to="/auth/login"
                className="u-h4 form--underline"
                onClick={handleBackToLogin}
              >
                Back to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
