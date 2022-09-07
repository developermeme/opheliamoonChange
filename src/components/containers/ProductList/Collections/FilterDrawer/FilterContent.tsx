import React from "react";
import { onClick } from "../../../../../constant/Types";
import Categories from "../aside/Categories";

function FilterContent() {
  const [selectedType, setSelectedType] = React.useState("Categories");

  const handleSelectedType = (e: onClick, value: string) => {
    e.preventDefault();
    setSelectedType(value);
  };

  const FilterTypes = ["Categories"];

  const Headers = () => {
    return (
      <div className="f-filters">
        {FilterTypes.map((item: string) => {
          const selected = selectedType === item ? "f-shead" : "f-head";
          return (
            <button
              key={item}
              className={selected}
              onClick={(e: onClick) => handleSelectedType(e, item)}
            >
              <span className="title">{item}</span>
            </button>
          );
        })}
      </div>
    );
  };

  const ContentTypes = () => {
    return (
      <div className="f-filterui">
        <div className="f-filterui-wrapper">
          <div className="fs-content">
            <div className="fs-content-inner">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="f-content">
      <Headers />
      <ContentTypes />
    </div>
  );
}

export default FilterContent;
