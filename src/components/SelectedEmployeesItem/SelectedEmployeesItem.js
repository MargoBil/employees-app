import React from 'react';
import style from './SelectedEmployeesItem.module.css';

export const SelectedEmployeesItem = ({users, header}) => {
  const filteredUsers = users.filter(item => item.month === header);
  const isFilteredUsers = filteredUsers.length > 0;
  return (
    <>
      <li className={style.item}>
        <h3 className={style.header}>{header}</h3>
        <ul className={style.list}>
          {isFilteredUsers &&
            filteredUsers.map(item => (
              <li
                className={style.usersItem}
                key={item.id}
              >{`${item.lastName} ${item.firstName} - ${item.birthday}`}</li>
            ))}
        </ul>
      </li>
    </>
  );
};
