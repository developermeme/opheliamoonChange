import React from "react";
import { onChange } from "../../../constant/Types";
import "./TextInputField.scss";

interface IProps {
  name: string;
  type: string;
  text: string;
  value: string;
  onChange: (e: onChange) => void;
  onFocus?: () => void;
  placeholder?: string;
}

export const TextInputField: React.FC<IProps> = (props: IProps) => {
  const { text, type, name, onChange, onFocus, value, placeholder } = props;

  return (
    <div className="Form__Item">
      <input
        type={type}
        className="Form__Input u-h5"
        id={name}
        name={name}
        placeholder={placeholder || text}
        onChange={onChange}
        onFocus={onFocus}
        value={value}
      />
      <label className="Form__FloatingLabel  u-h5" htmlFor={name}>
        {text}
      </label>
    </div>
  );
};
