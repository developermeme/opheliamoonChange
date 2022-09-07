import { NavItem } from "./NavItem";
import { useNav } from "../../useNav.hook";
import { useNavInfoContext } from "../../../../react-context/NavContext";
import { MenuDesktop, MenuMobile } from "../../../../assets/icons/headerIcons";
import {
  ICategory,
  IChildCategory1,
  ISubCategory,
} from "../../../stateContainers/NavState/Types";

export default function NavWrapper() {
  const { MenuIconClick } = useNavInfoContext();
  const { categories, MenuItemHandleClick } = useNav();

  const shopBy = ["SHOP BY PRODUCTS", "SHOP BY COLLECTIONS"];

  return (
    <div className="Header__FlexItem Header__FlexItem--fill">
      <button
        className="Header__Icon Icon-Wrapper--clickable hidden-desk"
        onClick={MenuIconClick}
      >
        <span className="hidden-tablet-and-up">
          <MenuMobile />
        </span>
        <span className="hidden-phone">
          <MenuDesktop />
        </span>
      </button>
      <nav className="Header__MainNav hidden-pocket hidden-lap">
        <ul className="HorizontalList HorizontalList--spacingExtraLoose">
          <NavItem
            mCategory="NEW THIS WEEK"
            onMenuClick={() => MenuItemHandleClick("NEW THIS WEEK")}
          />

          {categories &&
            categories?.map((item: ICategory) => {
              return (
                <NavItem
                  key={item.mainCatName}
                  mCategory={item.mainCatName}
                  sCategory={item.categories.map(
                    ({ cName, subcategories }: ISubCategory) => {
                      return {
                        title: cName,
                        child: subcategories.map(
                          (Citem: IChildCategory1) => Citem.cName
                        ),
                      };
                    }
                  )}
                  onMenuClick={() => {
                    MenuItemHandleClick(item.mainCatName);
                  }}
                />
              );
            })}
          <NavItem
            mCategory="HOT"
            onMenuClick={() => {
              MenuItemHandleClick("HOT");
            }}
          />
          <NavItem
            mCategory="SHOP BY"
            sCategory={shopBy.map((item: string) => {
              return {
                title: item,
                child: [],
              };
            })}
          />
        </ul>
      </nav>
    </div>
  );
}
