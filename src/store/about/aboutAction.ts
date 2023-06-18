import { IAboutData } from '../../types/about';
import { IAction } from '../../types/common';
import { SET_ABOUT_DATA } from '../consts';

export const setAboutData = function (data: IAboutData): IAction<IAboutData> {
  return {
    type: SET_ABOUT_DATA,
    payload: data,
  };
};
