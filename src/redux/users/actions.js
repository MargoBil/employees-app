import {createAction} from '@reduxjs/toolkit';

const FETCH_USERS_REQUEST = "transactions/getRequest";
const FETCH_USERS_SUCCESS = "transactions/getSuccess";
const FETCH_USERS_FAILURE = "transactions/getFailure";

export const getUsersRequest = createAction(FETCH_USERS_REQUEST);
export const getUsersSuccess = createAction(FETCH_USERS_SUCCESS);
export const getUsersFailure = createAction(FETCH_USERS_FAILURE);
