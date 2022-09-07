/* eslint-disable react/jsx-no-undef */

import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { ImageListType } from "react-images-uploading";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from "@material-ui/core";
import {
  getToast,
  validateEmailId,
  validateName,
} from "../../UserAccount/Script";
import { removeChar } from "../../common/Script";
import { ImageUploader } from "./ImageUploader/ImageUploader";
import { InputChangeEvent, onClick } from "../../../constant/Types";
import { TextButton } from "../../ui-kit/TextButton/TextButton.view";
import { useSelProduct } from "../SelectedProduct/useSelProduct.hook";
import { TextAreaField } from "../../ui-kit/TextInputField/TextAreaField";
import { TextInputField } from "../../ui-kit/TextInputField/TextInputField";

import "./ReviewForm.scss";
import { useDispatch } from "react-redux";
import { getProduct } from "../../stateContainers/SelectedProduct/ThunkAction";

export const ReviewForm = () => {
  interface IReviewState {
    name: string;
    email: string;
    reviewTitle: string;
    reviewDescription: string;
    rating: number;
    errorText: string;
    successMsg: string;
  }

  const initialState: IReviewState = {
    name: "",
    email: "",
    reviewTitle: "",
    reviewDescription: "",
    rating: 0,
    errorText: "",
    successMsg: "",
  };

  const [reviewState, setReviewState] =
    React.useState<IReviewState>(initialState);
  const [images, setImages] = React.useState<any>();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams() as any;
  const { selectedProduct } = useSelProduct();

  const date = new Date();
  const options = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const currentDate = new Intl.DateTimeFormat("en-US", options as any).format(
    date
  );

  const productname = selectedProduct?.productDetails?.productname;
  const productimage = selectedProduct?.productDetails?.imageurl;
  const toastMessage = getToast(reviewState.successMsg, reviewState.errorText);

  const updateImageChange = (imageList: ImageListType) => {
    setImages(imageList[0].file);
  };

  const handleOnChange = (e: InputChangeEvent) => {
    const name = e.target.name;
    const value = e.target.value;
    setReviewState({ ...reviewState, [name]: value });
  };

  const onFocusEvent = () => {
    setReviewState({ ...reviewState, errorText: "" });
  };

  const changeRating = (newRating: any) => {
    onFocusEvent();
    setReviewState({ ...reviewState, rating: newRating });
  };

  const validate = () => {
    let fields = reviewState;
    let errors = "";
    let formIsValid = true;

    const isValidName = validateName(fields.name, "name");
    const isValidEmailId = validateEmailId(fields.email);

    if (formIsValid && !isValidName.formIsValid) {
      errors = isValidName.error;
      formIsValid = false;
    } else if (formIsValid && !isValidEmailId.formIsValid) {
      errors = isValidEmailId.error;
      formIsValid = false;
    } else if (
      formIsValid &&
      (!fields.reviewTitle || !fields.reviewDescription)
    ) {
      formIsValid = false;
      errors = "Please enter all the required fields";
    } else if (formIsValid && !fields.rating) {
      formIsValid = false;
      errors = "Please enter your rating";
    } else {
      errors = "";
      formIsValid = true;
    }
    setReviewState({ ...reviewState, errorText: errors });
    return formIsValid;
  };

  const handleSubmit = async (e: onClick) => {
    e.preventDefault();
    if (validate()) {
      const item = {
        name: `${reviewState.name},${currentDate},${reviewState.email}`,
        reviews: `${reviewState.reviewTitle},desc:${reviewState.reviewDescription}`,
        rating: reviewState.rating,
        "mcId.mcId": id,
      };

      const formData = new FormData();
      formData.append("file", images);

      await axios
        .post(
          `https://api.homecraft.tv:8443/nazca/ophelia/add/review`,
          formData,

          { params: item }
        )
        .then(async (response: any) => {
          toast.info("Processing...");
          dispatch(getProduct({ pId: id }));
          const str = removeChar(productname);
          const url = `/info/${str}/${id}`;
          navigate(url);
        })
        .catch((err: any) => {
          toast.error("Something went wrong");
        });
    }
  };

  return (
    <div className="Container ReviewForm">
      <Card>
        <CardHeader
          avatar={<Avatar alt="Reviewer" src={productimage} />}
          title={productname}
          subheader={currentDate}
        />
        <Divider />

        <CardContent>
          <form
            className="ReviewForm--form"
            onSubmit={(e) => e.preventDefault()}
          >
            {toastMessage.message && (
              <p className={`alert ${toastMessage.classname} form__alert u-h6`}>
                {toastMessage.message}
              </p>
            )}

            <TextInputField
              type="text"
              text="Name"
              name="name"
              onChange={handleOnChange}
              onFocus={onFocusEvent}
              value={reviewState.name}
            />

            <TextInputField
              type="text"
              text="Email"
              name="email"
              onChange={handleOnChange}
              onFocus={onFocusEvent}
              value={reviewState.email}
            />

            <TextInputField
              type="text"
              text="Review Title* "
              name="reviewTitle"
              placeholder="Example: Great features!"
              onChange={handleOnChange}
              onFocus={onFocusEvent}
              value={reviewState.reviewTitle}
            />

            <TextAreaField
              placeholder="Example: I bought this a month ago and am so happy that I did..."
              text="Review Description*"
              name="reviewDescription"
              onChange={handleOnChange}
              onFocus={onFocusEvent}
              value={reviewState.reviewDescription}
            />

            <div className="ReviewForm--rating">
              <h3 className="h1-head"> Overall Rating* </h3>
              <StarRatings
                rating={reviewState.rating}
                starRatedColor="black"
                starHoverColor="black"
                changeRating={changeRating}
                name="rating"
                starDimension="20px"
                starSpacing="2px"
              />
            </div>

            <ImageUploader updateImageChange={updateImageChange} />

            <TextButton
              className="Update__Review"
              items="Update Review"
              isprimary={true}
              onClick={handleSubmit as any}
            />
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
