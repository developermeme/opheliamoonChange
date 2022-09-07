import { FC } from "react";
import classNames from "classnames";
import "./AnnouncementBar.scss";

interface IProps {
  position?: string;
}

export const AnnouncementBar: FC<IProps> = (props: IProps) => {
  const { position = "left" } = props;

  return (
    <section className="marquee">
      <div className="marquee__container u-h4">
        <div
          className={classNames("marquee__text", {
            "marquee__text--left": position === "left",
            "marquee__text--right": position === "right",
          })}
        >
          {/* <span>PRE-ORDER NOW TO GET FLAT 50% OFF ON ANY STYLE.</span>
          <span aria-hidden="true">
            PRE-ORDER NOW TO GET FLAT 50% OFF ON ANY STYLE.
          </span>
          <span aria-hidden="true">
            PRE-ORDER NOW TO GET FLAT 50% OFF ON ANY STYLE.
          </span>
          <span aria-hidden="true">
            PRE-ORDER NOW TO GET FLAT 50% OFF ON ANY STYLE.
          </span>
          <span aria-hidden="true">
            PRE-ORDER NOW TO GET FLAT 50% OFF ON ANY STYLE.
          </span>
          <span aria-hidden="true">
            PRE-ORDER NOW TO GET FLAT 50% OFF ON ANY STYLE.
          </span>
          <span aria-hidden="true">
            PRE-ORDER NOW TO GET FLAT 50% OFF ON ANY STYLE.
          </span> */}
        </div>
      </div>
    </section>
  );
};
