import { SubscriptionServices, UpdateProfileservice } from "../../../utils/API";
import { LoggedInUser } from "../../common/Script";

export interface IgetProfile {
  phone: string;
}

export interface IupdateProfile {
  userid: number;
  uPhone: string;
  fname: string;
  lname: string;
  file: any;
  email: string;
}

// Get Profile
export const getProfileService = async (item: IgetProfile): Promise<any> => {
  return UpdateProfileservice.getUserProfile(item)
    .then((res: any) => res.data)
    .catch((error: any) => error);
};

export const updateProfileService = async (item: any): Promise<any> => {
  return UpdateProfileservice.updateUserProfile(item)
    .then((res: any) => res.status)
    .catch((error: any) => error);
};

export const subscriptionService = async (): Promise<any> => {
  return SubscriptionServices.Subscription({ cusId: LoggedInUser as string })
    .then((res: any) => res.data)
    .catch((error: any) => error);
};

export const setPlanService = async (): Promise<any> => {
  return SubscriptionServices.plans()
    .then((res: any) => res.data)
    .catch((error: any) => error);
};

export const updateSubscriptionService = async (item: any): Promise<any> => {
  return SubscriptionServices.UpdateSubscription(item)
    .then((res: any) => res.status)
    .catch((error: any) => error);
};
