import { RootReducer } from '../../types/common';

export const selectAboutData = function (state: RootReducer) {
  return state.about;
};
