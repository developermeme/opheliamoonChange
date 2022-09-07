import React from "react";
import "./CheckBox.scss";

interface IProps {
  label: string;
}

export const CheckBox: React.FC<IProps> = (props: IProps) => {
  const { label } = props;

  return (
    <div className="section__content">
      <div className="checkbox-wrapper">
        <div className="checkbox__input">
          <input
            className="input-checkbox"
            data-backup="buyer_accepts_marketing"
            type="checkbox"
            value="1"
            name="checkout[buyer_accepts_marketing]"
            id="checkout_buyer_accepts_marketing"
          />
        </div>
        <label
          className="checkbox__label"
          htmlFor="checkout_buyer_accepts_marketing"
        >
          {label}
        </label>
      </div>
    </div>
  );
};
