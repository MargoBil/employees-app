import React, {useEffect} from 'react';
import {getUsers} from '../../redux/users/operations';
import {useDispatch, useSelector} from 'react-redux';
import {getUsersSelector} from '../../redux/users/selectors';

export const EmployeesItem = ({header}) => {
  const dispatch = useDispatch();
  const users = useSelector(getUsersSelector);
  console.log(users);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  
  let relevantUsers;

  if(users.length > 0) {
    relevantUsers = users.filter(item => item.lastName[0] === header);
  }
  
  return (
    <>
      <li>
        <h1>{header}</h1>
        <ul>

        </ul>
      </li>
    </>
  );
};
