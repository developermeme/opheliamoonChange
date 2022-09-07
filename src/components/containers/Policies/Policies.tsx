import React from "react";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { TermsAndConditions } from "./TermsAndConditions";
import "./Policies.scss";
import { AboutUs } from "./AboutUs";
import TermsOfService from "./TermsOfService";
import { ReturnsAndExchanges } from "./ReturnsAndExchanges";
import { ShippingPolicy } from "./ShippingPolicy";
import { useLocation } from "react-router-dom";

export const Policies = () => {
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();
  let name = query.get("name");

  const getComponent = (name: string) => {
    switch (name) {
      case "AboutUs":
        return <AboutUs />;
      case "PrivacyPolicy":
        return <PrivacyPolicy />;
      case "TermsAndConitions":
        return <TermsAndConditions />;
      case "ShippingSerivice":
        return <ShippingPolicy />;
      case "TermsOfService":
        return <TermsOfService />;
      case "ReturnPolicy":
        return <ReturnsAndExchanges />;
      default:
        return <ReturnsAndExchanges />;
    }
  };

  return (
    <section>
      <div className="policy">{getComponent(name as string)}</div>
    </section>
  );
};
