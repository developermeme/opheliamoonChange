import { MinusIcon, PlusIcon } from "../Icons";
import "./QuantitySelector.scss";

interface IProps {
  count: number;
  handleIncrement: (prev: number) => void;
  handleDecrement: (prev: number) => void;
  classname?: string;
}

export const QuantitySelector: React.FC<IProps> = (props: IProps) => {
  const { count, handleIncrement, handleDecrement, classname } = props;

  const quantityButton = classname ? classname : "QuantitySelector__Button";

  return (
    <div className="ProductForm__Option">
      {/* {!classname && <span className="ProductForm__Label u-h2">Quantity:</span>} */}

      <div className="QuantitySelector">
        <span
          className={quantityButton}
          data-action="decrease-quantity"
          id="incrementer"
          onClick={() => handleDecrement(count)}
        >
          <MinusIcon />
        </span>
        <input
          type="text"
          className="QuantitySelector__CurrentQuantity u-h4"
          pattern="[0-9]*"
          name="quantity"
          value={count}
          readOnly
        />
        <span
          className={quantityButton}
          data-action="increase-quantity"
          id="decrementer"
          onClick={() => handleIncrement(count)}
        >
          <PlusIcon />
        </span>
      </div>
    </div>
  );
};
