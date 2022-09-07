import { FC, ReactNode, useState } from "react";
import useElementSize from "../../../hook/useElementSize";
import "./Accordian.scss";

interface IProps {
  title: string;
  child: ReactNode;
}

export const Accordian: FC<IProps> = (props: IProps) => {
  const { child, title } = props;

  const [squareRef, { height }] = useElementSize();
  const [isExpand, setIsExpand] = useState(false);

  const handleClick = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div className="Collapsible">
      <button
        type="button"
        className="Collapsible__Button Heading"
        aria-expanded={isExpand}
        onClick={handleClick}
      >
        {title}
        <span className="Collapsible__Plus"></span>
      </button>
      <div
        className="Collapsible__Inner"
        style={{
          height: isExpand ? `${height}px` : "0",
        }}
      >
        <div className="Collapsible__Content" ref={squareRef}>
          {child}
        </div>
      </div>
    </div>
  );
};
