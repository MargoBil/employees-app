import {combineReducers, createReducer} from '@reduxjs/toolkit';
import {getUsersSuccess} from './actions';

const onGetUsers = (_, action) => action.payload;

const employees = createReducer([], {
  [getUsersSuccess]: onGetUsers,
});

export default combineReducers({employees});

