import React from "react";
import { OTP } from "../../../constant/Variables";
import { useForgotPassward } from "../../../hook/useForgotPassward.hook";
import { useOTPVerification } from "../../../hook/useOTPVerification.hook";
import reset from "../../../assets/image/accounts/resendotp.svg";
import "../UserAccount.scss";
import { TextButton } from "../../ui-kit/TextButton/TextButton.view";

export const OTPVerfication: React.FC = (): JSX.Element => {
  const { getOTPValue, handleOnSubmitOTP, OTPError } = useOTPVerification();

  const { ResendOTP } = useForgotPassward();

  return (
    <section
      data-section-id="account-verify"
      data-section-type="account-verify"
    >
      <div className="user--form">
        <div className="user--form__container extra-narrow">
          <form
            id="otp-verify"
            acceptCharset="UTF-8"
            name="otp-verify"
            className="user--form__wrapper"
            autoComplete="off"
          >
            <header className="user--form__header">
              <h1 className="user--form__title u-h3">{OTP.OTP}</h1>
              <p className="user--form__content u-h4">{OTP.OTP_DESCRIPTION}</p>
            </header>
            {OTPError && (
              <div className=" form__alert alert alert--error u-h6">
                {OTPError}
              </div>
            )}
            <div className="user--form__item">
              <input
                type="number"
                className="user--form__input u-h4"
                required={true}
                aria-label="OTP"
                placeholder="OTP"
                name="OTP"
                onChange={getOTPValue as any}
              />
              <label className="form__floating--label  u-h5">OTP</label>
              <button
                type="button"
                className="user--form__input--text otp-icon"
                data-action="toggle-recover-form"
              >
                <img src={reset} alt="logo" onClick={ResendOTP} width="30px" />
              </button>
            </div>

            <TextButton
              type="submit"
              className="button--full"
              isprimary={true}
              items={OTP.SUBMIT}
              onClick={(e: any) => {
                handleOnSubmitOTP(e, "login");
              }}
            />
          </form>
        </div>
      </div>
    </section>
  );
};
