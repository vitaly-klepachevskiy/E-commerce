import { createAction } from '../../utils/reducer/reducer';
import { CATEGORIES_ACTION_TYPES } from './categories.types';

export const setCategoriesMap = (categoriesArray) => {
  return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
};
