import React from "react";
import { onClick } from "../../../../constant/Types";
import { IAddress } from "../../../../model/IProductType";
import { AddressIcon } from "../../../common/Icons";
import { TextButton } from "../../../ui-kit/TextButton/TextButton.view";
import { useAddress } from "../useAddress.hook";
import { AddressWidget } from "./AddressWidget";

interface IProps {
  toggleUpdateView: () => void;
}

export const AddressList: React.FC<IProps> = (props: IProps) => {
  const {
    addressList,
    selected,
    handleClick,
    continuePaymentClick,
    onAddNewAdd,
  } = useAddress();

  const { toggleUpdateView } = props;

  return (
    <div className="opc-wrapper">
      <ol className="opc" id="checkoutSteps">
        <li id="shipping" className="checkout-shipping-address">
          <div className="step-title u-h3">Shipping Address</div>
          <div id="checkout-step-shipping" className="step-content">
            <div className="field addresses u-h5">
              <div className="shipping-address-items">
                {addressList?.map((item: IAddress, index: any) => {
                  const activeclass = selected === index && "is-active";
                  return (
                    <div className="shipping-address-item" key={index}>
                      <div
                        className="customradio  pull-right"
                        onClick={(event: any) =>
                          handleClick((event.target.value = index))
                        }
                      >
                        <AddressIcon
                          name={` address-radioIcon ${activeclass}`}
                        />
                      </div>
                      <AddressWidget
                        item={item}
                        toggleUpdateView={toggleUpdateView}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="new-address-popup">
              <button
                type="button"
                className="action action-show-popup"
                onClick={(e: onClick) => {
                  onAddNewAdd(e, toggleUpdateView);
                }}
              >
                <span>New Address</span>
              </button>
            </div>
          </div>
        </li>
      </ol>
      <div className="shipping actions-toolbar">
        {addressList?.length > 0 ? (
          <TextButton
            items="CONTINUE TO PAYMENT"
            isprimary={true}
            className="continue"
            onClick={continuePaymentClick}
          />
        ) : (
          <span
            style={{
              color: "red",
              display: "block",
              margin: "10px 0px 20px 0px",
            }}
          >
            *Add your address to continue shipping
          </span>
        )}
      </div>
    </div>
  );
};
