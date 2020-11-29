import {combineReducers, createReducer} from '@reduxjs/toolkit';
import {getUsersSuccess, changeUsersChecked} from './actions';

const onGetUsers = state => state;

const onChangeChecked = (state, action) => {
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
