import axios from 'axios';
import {getUsersRequest, getUsersSuccess, getUsersFailure} from './actions';

const baseURL = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';

export const getUsers = () => async dispatch => {
  try {
    dispatch(getUsersRequest());
    const {data} = await axios.get(baseURL);
    console.log(data);
    dispatch(getUsersSuccess(data));
  } catch (error) {
    dispatch(getUsersFailure(error));
  }
};
