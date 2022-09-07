import { FC, ReactElement, useState } from "react";
import classnames from "classnames";
import { useNav } from "../../useNav.hook";
import useProductList from "../../../containers/ProductList/useProductList.hook";

interface IProps {
  mCategory: string;
  sCategory?: {
    title: string;
    child: string[];
  }[];
  onMenuClick?: () => void;
}

export const NavItem: FC<IProps> = (props: IProps): ReactElement => {
  const { mCategory, sCategory, onMenuClick } = props;
  const [isShown, setValue] = useState<boolean>(false);

  const handleMouseEnter = () => setValue(true);
  const handleMouseLeave = () => setValue(false);

  const { MenuItemHandleClick } = useNav();
  const { selectedCategory: category } = useProductList();

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classnames("HorizontalList__Item", {
        "is-expanded": isShown,
        "is-active": category === mCategory,
      })}
    >
      <span className="Heading u-h5" onClick={onMenuClick}>
        {mCategory}
        {!sCategory && <span className="Header__LinkSpacer level-1"> {mCategory}</span>}
      </span>

      {sCategory && (
        <div className="DropdownMenu" aria-hidden={!isShown}>
          <ul className="Linklist">
            {sCategory.map((submenu: any, index: number) => (
              <li className="Linklist__Item" key={index}>
                <span
                  className="Link Link--secondary level-2"
                  onClick={() => MenuItemHandleClick(mCategory, submenu.title)}
                >
                  {submenu.title.toLowerCase()}
                </span>
                
                {submenu?.child?.length > 0 && (
                    <ul className="Linklist Linklist--bordered Linklist--spacingLoose">
                      {submenu.child.map((childItem: string, i: number) => (
                        <li
                          className="Linklist__Item"
                          key={childItem + i}
                          onClick={() =>
                            MenuItemHandleClick(
                              mCategory,
                              submenu.title,
                              childItem
                            )
                          }
                        >
                          <span className="Link Link--primary Text--subdued level-3">
                            {childItem.toLowerCase()}
                          </span>
                        </li>
                      ))}
                    </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};
