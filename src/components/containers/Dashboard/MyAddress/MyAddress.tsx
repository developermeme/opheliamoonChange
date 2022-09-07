import React from "react";
import { IAddress } from "../../../../model/IProductType";
import { AddressIcon } from "../../../common/Icons";
import { TextButton } from "../../../ui-kit/TextButton/TextButton.view";
import { useAddress } from "../../Address/useAddress.hook";
import { SideMenu } from "../Layout/SideMenu/SideMenu";
import { UpdateAddressForm } from "./AddressForm/AddressForm";
import "./MyAddress.scss";

export const MyAddress = () => {
  const {
    addressListRedux: addressList,
    openUpdateView,
    toggleUpdateView,
    onAddNewCancel,
    handleClick,
    onClickEdit,
    selected,
    RemoveAddreses,
  } = useAddress();

  const address = addressList.address;

  const AddressContainer = () => {
    return (
      <React.Fragment>
        {address.map((item: IAddress, index: number) => {
          const activeclass = selected === index && "is-active";

          const editedItem = {
            name: item.name,
            phone: item.phone,
            uPhone: addressList.uPhone,
            flatNo: item.flatNo,
            street: item.street,
            landMark: item.landMark,
            city: item.city,
            state: item.state,
            pin: item.pin,
            addId: item.id,
          };

          return (
            <div className="addressAccordian-addressAccordian" key={index}>
              <div className="addressAccordian-address">
                <div className="addressAccordian-nameComponent">
                  <span className="addressAccordian-name u-h4">
                    {item.name}
                  </span>
                  <div
                    className="customradio  pull-right"
                    onClick={(event: any) =>
                      handleClick((event.target.value = index))
                    }
                  >
                    <AddressIcon name={`address-radioIcon ${activeclass}`} />
                  </div>
                </div>
                <div className="addressContent">
                  {item.flatNo}, {item.street}
                </div>
                <div className="addressContent">
                  {item.city}, {item.landMark}
                </div>
                <div className="addressContent">
                  {item.state} - {item.pin}
                </div>

                <div className="addressAccordian-mobile">
                  {addressList.uPhone}
                </div>
              </div>
              <div className="addressAccordian-buttons u-h5">
                <div
                  className="addressAccordian-button"
                  onClick={() => {
                    onClickEdit(editedItem, toggleUpdateView);
                  }}
                >
                  EDIT
                </div>
                <div className="addressAccordian-buttonDivider"></div>
                <div
                  className="addressAccordian-button"
                  onClick={() => {
                    RemoveAddreses(item.id);
                  }}
                >
                  REMOVE
                </div>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  };

  const EmptyAddress = () => {
    return (
      <div className="empty-text">
        <h1 className="u-h4">SAVE YOUR ADDRESSES NOW</h1>
        <p className="u-h4">
          Add your home and office addresses and enjoy faster checkout
        </p>
      </div>
    );
  };

  const AddressDetailsView = () => {
    return (
      <div className="block">
        <div className="block-title u-h3">Address Book</div>
        {address && address.length > 0 ? (
          <AddressContainer />
        ) : (
          <EmptyAddress />
        )}
        <div>
          <TextButton
            items="Add New Address"
            isprimary={true}
            onClick={() => {
              onAddNewCancel(toggleUpdateView);
            }}
            className="Add-New-button"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="column main">
        {openUpdateView ? (
          <UpdateAddressForm toggleUpdateView={toggleUpdateView} />
        ) : (
          <AddressDetailsView />
        )}
      </div>
      <SideMenu />
    </>
  );
};

export default MyAddress;
