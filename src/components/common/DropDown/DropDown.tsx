import React from "react";
import "./DropDown.scss";

interface IProps {
  collections: any[];
  onChange?: (e: any) => void;
  name: string;
  value?: string;
}

export const DropDown: React.FC<IProps> = (props: IProps) => {
  const { collections, onChange, name, value } = props;
  return (
    <div
      className="dropdown"
      data-address-dropdown="country"
      data-autocomplete-dropdown-container="true"
    >
      <select
        data-backup="country"
        className="dropdown__input dropdown__input--select"
        id="checkout_shipping_address_country"
        placeholder={name}
        value={value}
        onChange={onChange}
      >
        <option value="">Countries</option>
        {collections?.map((item: any, index: any) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
