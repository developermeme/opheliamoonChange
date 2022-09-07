import React from "react";
import { useDispatch } from "react-redux";
import { onChange, onClick } from "../../../../constant/Types";
import { monthNames } from "../../../../constant/Variables";
import { fetchDelivery } from "../../../stateContainers/SelectedProduct/ThunkAction";
import { useSelProduct } from "../useSelProduct.hook";

export const DeliveryDetails = () => {
  const [pin, setPin] = React.useState("");
  const [pinError, setPinError] = React.useState<string>("");
  const [valid, setIsValid] = React.useState<boolean>(false);
  const { deliveryStatus } = useSelProduct();
  const dispatch = useDispatch();

  const { productDetails, selectedProduct } = useSelProduct();
  const { deliveryTime, date } = productDetails;

  const currentDate = new Date();
  let someDate =
    selectedProduct.from === "preorder" ? new Date(date) : new Date();

  var numberOfDaysToAdd = parseInt(deliveryTime);
  someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

  const minExpectedDate = `${
    monthNames[currentDate.getMonth()]
  } ${currentDate.getDate()}`;

  const maxExpectedDate = `${
    monthNames[someDate.getMonth()]
  } ${someDate.getDate()}`;

  React.useEffect(() => {
    if (pinError === "") {
      return;
    }
    const timer = setTimeout(() => {
      setPinError("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [pinError]);

  const handleChange = (e: onChange) => {
    setPin(e.target.value);
    setIsValid(false);
  };

  const handeValidate = () => {
    let fields = pin;
    let formIsValid = true;
    let pinError = "";

    if (!fields) {
      formIsValid = false;
      pinError = "Please enter an Pincode.";
    } else if (fields.length !== 6) {
      formIsValid = false;
      pinError = "Invalid Pincode, Please try again.";
    }
    setPinError(pinError);
    return formIsValid;
  };

  const handleClick = (e: onClick) => {
    e.preventDefault();
    if (handeValidate()) {
      setIsValid(true);
      dispatch(fetchDelivery({ zipcode: pin }));
    }
  };

  return (
    <div className="pincode-checker">
      <form className="pincode-checker__form pincode-checker__form--show u-h4">
        <input
          type="number"
          placeholder="Enter Pincode"
          name="pincode"
          className="pincode-checker__form--input"
          value={pin}
          onChange={handleChange}
        />

        <button className="pincode-checker__form--button" onClick={handleClick}>
          Check
        </button>
      </form>
      {valid && deliveryStatus && (
        <div className="pincode-checker__response">
          <p>
            Delivered between &nbsp; {minExpectedDate} - {maxExpectedDate}
          </p>
        </div>
      )}
      {pinError !== "" && (
        <div className="pincode-checker__response">
          <p style={{ color: "red" }}>{pinError}</p>
        </div>
      )}
    </div>
  );
};

export default DeliveryDetails;
