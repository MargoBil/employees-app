import {combineReducers, createReducer} from '@reduxjs/toolkit';
import {getUsersSuccess, changeUsersChecked} from './actions';

export const onGetUsers = (state, action) => {
  if(state.length !== 0) {
    return state;
  }
  return action.payload;
} 

export const onChangeChecked = (state, action) => {
  state.map(item => {
    if (item.id === action.payload.id) {
      item.checked = action.payload.checked;
    }
    return item;
  });
  return state;
};

const employees = createReducer([], {
  [getUsersSuccess]: onGetUsers,
  [changeUsersChecked]: onChangeChecked,
});

export default combineReducers({employees});
