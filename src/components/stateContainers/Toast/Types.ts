export interface INotification {
  isOpen: boolean;
  text: string;
  id?: number;
}

export interface IInitialState {
  notifications: INotification;
}
