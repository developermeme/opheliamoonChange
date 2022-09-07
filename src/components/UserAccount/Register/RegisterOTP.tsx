import React from "react";
import { OTP } from "../../../constant/Variables";
import { TextButton } from "../../ui-kit/TextButton/TextButton.view";
import reset from "../../../assets/image/accounts/resendotp.svg";
import { useRegister } from "../../../hook/useRegister.hook";
import { useOTPVerification } from "../../../hook/useOTPVerification.hook";

function RegisterOTP() {
  const { ResendRegisterOTP } = useRegister();

  const { getOTPValue, handleOnSubmitOTP, OTPError, otpSuccessMsg } =
    useOTPVerification();

  const getToast = () => {
    let classname;
    let message;
    if (otpSuccessMsg) {
      classname = "alert--success";
      message = otpSuccessMsg;
    }
    if (OTPError) {
      classname = "alert--error";
      message = OTPError;
    }
    return { classname, message };
  };

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
            {getToast().message && (
              <p className={`alert ${getToast().classname} form__alert u-h6`}>
                {getToast().message}
              </p>
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
                className="user--form__input--text reg-resend"
              >
                <img
                  src={reset}
                  alt="logo"
                  width="30px"
                  onClick={ResendRegisterOTP}
                />
              </button>
            </div>

            <TextButton
              type="submit"
              className="button--full"
              isprimary={true}
              items={OTP.SUBMIT}
              onClick={(e: any) => {
                handleOnSubmitOTP(e, "reg");
              }}
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterOTP;
