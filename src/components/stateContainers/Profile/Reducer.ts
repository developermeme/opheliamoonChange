import { PayloadAction } from "@reduxjs/toolkit";
import { IProfile } from "../../../model/IProductType";
import { IInitialState, IPlans, ISubcription } from "./Types";

export const Reducer = {
  setProfileDetails: (
    state: IInitialState,
    action: PayloadAction<IProfile>
  ): void => {
    let copystate = { ...state };
    copystate.profileDetails.Profile = action.payload;
    state = copystate;
  },
  setUpdateDetails: (
    state: IInitialState,
    action: PayloadAction<boolean>
  ): void => {
    let copystate = { ...state };
    copystate.profileDetails.isUpdatedProfile = action.payload;
    state = copystate;
  },
  setReferral: (
    state: IInitialState,
    action: PayloadAction<ISubcription>
  ): void => {
    state.subcription = action.payload;
  },

  setPlan: (state: IInitialState, action: PayloadAction<IPlans[]>): void => {
    state.plans = action.payload;
  },
  setUpdateSubscription: (
    state: IInitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.isSubsUpdated = action.payload;
  },
};
