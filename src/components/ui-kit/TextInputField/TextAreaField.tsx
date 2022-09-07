import React from "react";
import { InputChangeEvent } from "../../../constant/Types";
import "./TextInputField.scss";

interface IProps {
  name: string;
  text: string;
  value: string;
  onChange: (e: InputChangeEvent) => void;
  placeholder?: string;
  onFocus?: () => void;
}

export const TextAreaField: React.FC<IProps> = (props: IProps) => {
  const { text, name, onChange, value, placeholder, onFocus } = props;

  return (
    <div className="Form__Item">
      <textarea
        className="Form__Input u-h5"
        id={name}
        name={name}
        placeholder={placeholder || text}
        cols={30}
        rows={10}
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
