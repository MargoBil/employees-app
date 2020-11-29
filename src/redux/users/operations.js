import axios from 'axios';
import {getUsersRequest, getUsersSuccess, getUsersFailure} from './actions';

const baseURL =
  'https://yalantis-react-school-api.yalantis.com/api/task0/users';

export const getUsers = () => async dispatch => {
  try {
    dispatch(getUsersRequest());
    const {data} = await axios.get(baseURL);
    const users = await data.map(item => {
      item.checked = false;
      return item;
    });
    dispatch(getUsersSuccess(users));
  } catch (error) {
    dispatch(getUsersFailure(error));
  }
};
