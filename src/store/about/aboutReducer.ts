import { IAboutData } from '../../types/about';
import { IAction } from '../../types/common';
import { SET_ABOUT_DATA } from '../consts';

const aboutDataInitValue = {
  phone: '+7 (932) 307-43-20',
  email: 'automatii4esski@gmail.com',
};

export const aboutReducer = function (
  state: IAboutData = aboutDataInitValue,
  action: IAction<IAboutData>
) {
  switch (action.type) {
    case SET_ABOUT_DATA:
      return action.payload;

    default:
      return state;
  }
};
