// Profile Info Details

import { IProfile } from "../../../model/IProductType";

export interface ISubcription {
  cusId: string;
  date: string;
  id: number;
  plan: string;
  status: string;
}

export interface IProfileDetails {
  Profile: IProfile;
  isUpdatedProfile: boolean;
}

export interface IPlans {
  planID: number;
  planName: string;
  planAmount: number;
  bonusPercentage: number;
  imageUrl: string;
}

export interface IInitialState {
  profileDetails: IProfileDetails;
  subcription: ISubcription;
  plans: IPlans[];
  isSubsUpdated: boolean;
}
