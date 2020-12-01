import React, {useEffect} from 'react';
import {getUsers} from '../../redux/users/operations';
import {useDispatch, useSelector} from 'react-redux';
import {getUsersSelector} from '../../redux/users/selectors';
import {changeUsersChecked} from '../../redux/users/actions';
import style from './EmployeesItem.module.css';

export const EmployeesItem = ({header}) => {
  const dispatch = useDispatch();
  const users = useSelector(getUsersSelector);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers());
    }
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
    <li className={style.item}>
      <h3 className={style.header}>{header}</h3>
      {relevantUsers.length !== 0 ? (
        <ul className={style.list}>
          {relevantUsers.map(({id, lastName, firstName, checked}) => (
            <li key={id}>
              <label className={style.label}>
                <span>{`${lastName} ${firstName}`}</span>
                <input
                  id={id}
                  type="checkbox"
                  checked={checked}
                  onChange={handleCheckbox}
                  className={style.input}
                />
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <p className={style.note}>-----</p>
      )}
    </li>
  );
};
