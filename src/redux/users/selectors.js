import {createSelector} from '@reduxjs/toolkit';

export const getUsersSelector = state => state.users.employees;

export const getUsersCheckedSelector = createSelector(
  [getUsersSelector],
  items => items.filter(item => item.checked === true),
);
