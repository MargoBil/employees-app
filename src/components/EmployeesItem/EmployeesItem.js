import React, {useEffect} from 'react';
import {getUsers} from '../../redux/users/operations';
import {useDispatch, useSelector} from 'react-redux';
import {getUsersSelector} from '../../redux/users/selectors';
import {changeUsersChecked} from '../../redux/users/actions';

export const EmployeesItem = ({header}) => {
  const dispatch = useDispatch();
  const users = useSelector(getUsersSelector);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  let relevantUsers = [];

  if (users.length > 0) {
    relevantUsers = users.filter(item => item.lastName[0] === header);
  }

  const handleCheckbox = ({target}) => {
    const {checked, id} = target;
    dispatch(changeUsersChecked({checked, id}));
  };

  return (
    <li>
      <h1>{header}</h1>
      {relevantUsers.length !== 0 ? (
        <ul>
          {relevantUsers.map(({id, lastName, firstName, checked}) => (
            <li key={id}>
              <label>
                {`${lastName} ${firstName}`}
                <input
                  id={id}
                  type="checkbox"
                  checked={checked}
                  onChange={handleCheckbox}
                />
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <p>-----</p>
      )}
    </li>
  );
};
