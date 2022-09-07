import React from "react";
import { FiltersController } from "./FiltersController";
import { GridController } from "./GridController";
import "./Toolbar.scss";

export const Toolbar = () => {
  return (
    <div className="toolbar">
      <FiltersController />
      <GridController />
    </div>
  );
};
