import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import "./Style.scss";

interface IProps {
  updateImageChange: (imageList: ImageListType) => void;
}

export const ImageUploader = (props: IProps) => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 5;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    setImages(imageList as never[]);
    props.updateImageChange(imageList as never[]);
  };

  return (
    <ImageUploading
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      multiple={false}
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <div className="upload__image-wrapper ">
          <div>
            <button
              className="Uploader"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            {/* &nbsp;
            <button className="Uploader" onClick={onImageRemoveAll}>
              Remove all
            </button> */}
          </div>

          <div className="Grid">
            {imageList.map((image, index) => (
              <div
                key={index}
                className="Grid__Cell 1/2--tablet-and-up 1/3--lap-and-up  image-item"
              >
                <img src={image.dataURL} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button
                    className="Uploader"
                    onClick={() => onImageUpdate(index)}
                  >
                    Update
                  </button>
                  &nbsp;
                  <button
                    className="Uploader"
                    onClick={() => onImageRemove(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </ImageUploading>
  );
};
