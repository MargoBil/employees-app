import React from 'react';

export const SelectedEmployeesItem = ({users, header}) => {
  const filteredUsers = users.filter(item => item.month === header);
  const isFilteredUsers = filteredUsers.length > 0;
  return (
    <>
      <li>
        <h1>{header}</h1>
        <ul>
          {isFilteredUsers &&
            filteredUsers.map(item => (
              <li
                key={item.id}
              >{`${item.lastName} ${item.firstName} - ${item.birthday}`}</li>
            ))}
        </ul>
      </li>
    </>
  );
};
