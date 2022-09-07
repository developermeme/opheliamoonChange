import {PayloadAction} from '@reduxjs/toolkit';
import {IInitialState, INotification} from './Types';

export const Reducer = {
  addNotification: (
    state: IInitialState,
    action: PayloadAction<INotification>
  ): void => {
    state.notifications = action.payload;
  },

  removeNotification: (state: IInitialState): void => {
    state.notifications = {} as INotification;
  },
};
