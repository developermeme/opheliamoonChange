import React from "react";
import { ICartItemResponse } from "../../../../model/IProductType";
import { TextButton } from "../../../ui-kit/TextButton/TextButton.view";
import { useCart } from "../useCart.hook";
import { CartBody } from "./CartBody";
import "./CartTable.scss";
import { NoteContainer } from "./NoteContainer";

interface IProps {
  cartItems: ICartItemResponse[];
}

export const CartTable: React.FC<IProps> = (props: IProps) => {
  const { cartItems } = props;

  const { handleDeleteAll } = useCart();

  let headers = [
    { name: "Item", class: "item" },
    { name: "Description", class: "item desc" },
    { name: "Qty", class: "qty" },
    { name: "Subtotal", class: "subtotal" },
    { name: "Action", class: "action" },
  ];

  const TableHeaders = () => {
    return (
      <thead className="u-h4">
        <tr>
          {headers.map((item: any, index: number) => (
            <th className={`col ${item.class}`} key={item.name}>
              <span>{item.name}</span>
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  return (
    <div className="form-cart">
      <form>
        <div className="cart table-wrapper">
          <table className="cart items table">
            <TableHeaders />
            {cartItems?.map((item: ICartItemResponse, index: number) => {
              return <CartBody key={index} item={item} />;
            })}
          </table>
        </div>
      </form>
      <div className="form-button">
        <TextButton
          items="Remove ALL"
          isprimary={true}
          className="saveChange"
          onClick={handleDeleteAll}
        />
      </div>
      <NoteContainer />
    </div>
  );
};
