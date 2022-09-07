import { Gallery, Item } from "react-photoswipe-gallery";
import { IProductImage } from "../../../../model/IProductType";

interface IProps {
  image: IProductImage;
}

function MainImage(props: IProps) {
  const { image } = props;

  return (
    <Gallery>
      <Item
        original={image.imageUrl}
        thumbnail={image.imageUrl}
        width="600"
        height="700"
      >
        {({ ref, open }) => (
          <img
            src={image.imageUrl}
            ref={ref as any}
            onClick={open}
            alt="product"
            data-max-width="auto"
            data-max-height="auto"
          />
        )}
      </Item>
    </Gallery>
  );
}

export default MainImage;
