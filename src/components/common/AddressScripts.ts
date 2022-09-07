import { IAddress } from "../../model/IProductType";

const getExistingItem = (addressItems: IAddress[] | any, mcid: number) => {
  let addresses: IAddress[] = [];
  const parcedAddressItems = JSON.parse(addressItems);
  addresses = parcedAddressItems;

  const existingAddressIndex = addresses.findIndex(
    (item: IAddress) => item.id === mcid
  );

  const existingAddressItem = addresses[existingAddressIndex];

  const details = {
    addresses,
    existingAddressIndex,
    existingAddressItem,
  };

  return details;
};

export const updateAddressList = (selectedAddress: IAddress) => {
  let addressItems = localStorage.getItem("user-address") as any;
  let addresses: IAddress[] = [];
  let updatedAddress;

  const addAddress = {
    ...selectedAddress,
    id: Math.random(),
  };
  // Already pdts available in local storage
  if (addressItems) {
    const existingItemDetails = getExistingItem(
      addressItems,
      selectedAddress.id
    );

    const {
      addresses: addressesList,
      existingAddressIndex,
      existingAddressItem,
    } = existingItemDetails;

    addresses = addressesList;

    if (existingAddressItem) {
      const updatedItem = {
        ...selectedAddress,
      };
      updatedAddress = [...addresses];
      updatedAddress[existingAddressIndex] = updatedItem;
    }
    // Adding new pdt
    else {
      updatedAddress = addresses.concat(addAddress);
    }
  }
  // adding new pts
  else {
    updatedAddress = addresses.concat(addAddress);
  }

  localStorage.setItem("user-address", JSON.stringify(updatedAddress));
};

export const DeleteAddressItem = (mcId: number) => {
  let addressItems = localStorage.getItem("user-address") as any;
  let addresses: IAddress[] = [];
  let updatedAddress;

  if (addressItems) {
    const existingItemDetails = getExistingItem(addressItems, mcId);

    const {
      addresses: addressesList,
      existingAddressIndex,
      existingAddressItem,
    } = existingItemDetails;

    addresses = addressesList;

    if (existingAddressItem) {
      addresses.splice(existingAddressIndex, 1);
      updatedAddress = [...addresses];
    } else {
      updatedAddress = [...addresses];
    }
  } else {
    updatedAddress = [...addresses];
  }

  localStorage.setItem("user-address", JSON.stringify(updatedAddress));
};
