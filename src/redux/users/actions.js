import {createAction} from '@reduxjs/toolkit';

const FETCH_USERS_REQUEST = "users/getRequest";
const FETCH_USERS_SUCCESS = "users/getSuccess";
const FETCH_USERS_FAILURE = "users/getFailure";

const CHANGE_CHECKED_SUCCESS = "checked/succsess";

export const getUsersRequest = createAction(FETCH_USERS_REQUEST);
export const getUsersSuccess = createAction(FETCH_USERS_SUCCESS);
export const getUsersFailure = createAction(FETCH_USERS_FAILURE);
export const changeUsersChecked = createAction(CHANGE_CHECKED_SUCCESS);