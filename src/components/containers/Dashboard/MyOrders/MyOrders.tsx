import React from "react";
import { useSelector } from "react-redux";
import { SideMenu } from "../Layout/SideMenu/SideMenu";
import { IRootState } from "../../../../redux/reducer/CombineReducer";
import { OrderItem } from "./OrderItem/OrderItem";
import { IOrder } from "../../../stateContainers/Order/Types";
import { OrderDesc } from "./OrderItem/OrderDesc";
import EmptyOrders from "../../../common/EmptyOrders/EmptyOrders";

export default function MyOrders() {
  enum OView {
    Ordview,
    OrdDview,
    EmptyView,
  }

  const { orderData } = useSelector((state: IRootState) => state);
  const orderList: IOrder[] = orderData && orderData.orderList;

  const [view, setView] = React.useState(OView.Ordview);
  const [detailsView, setDetailsView] = React.useState<IOrder | null>(null);

  React.useEffect(() => {
    if (orderList.length < 1) {
      setView(OView.EmptyView);
    } else {
      setView(OView.Ordview);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderList]);

  const expandOnClick = (item: IOrder) => {
    setView(OView.OrdDview);
    setDetailsView(item);
  };

  const expandLessOnClick = () => {
    setView(OView.Ordview);
  };

  return (
    <>
      <div className="column main">
        <div className="block">
          <div className="block-title u-h3">My Orders</div>
          {view === OView.EmptyView ? (
            <EmptyOrders />
          ) : view === OView.Ordview ? (
            orderList?.map((item: IOrder) => (
              <OrderItem
                item={item}
                key={item.id}
                expandOnClick={expandOnClick}
              />
            ))
          ) : (
            <OrderDesc
              item={detailsView as IOrder}
              expandLessClick={expandLessOnClick}
            />
          )}
        </div>
      </div>
      <SideMenu />
    </>
  );
}
