import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ImageZoom = ({ imageUrl }) => {
  return (
    <Zoom>
      <img alt="product" src={imageUrl} width="500" />
    </Zoom>
  );
};

export default ImageZoom;
