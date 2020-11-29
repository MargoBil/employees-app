import React from 'react';
import {useSelector} from 'react-redux';
import {getUsersCheckedSelector} from '../../redux/users/selectors';
import {SelectedEmployeesItem} from '../SelectedEmployeesItem/SelectedEmployeesItem';
import {months} from '../../data/months';

export const SelectedEmployees = () => {
  const checkedUsers = useSelector(getUsersCheckedSelector);
  const currentMonths = checkedUsers.reduce((acc, item) => {
    const currentMonth = new Date(item.dob).getMonth();
    const fullMonthName = months[currentMonth];
    const usersBirthday = `${new Date(
      item.dob,
    ).getDate()} ${fullMonthName}, ${new Date(item.dob).getFullYear()} year`;
    const employeesInfo = {
      ...item,
      month: fullMonthName,
      birthday: usersBirthday,
    };
    return [...acc, employeesInfo];
  }, []);
  const uniqueMonths = [...new Set(currentMonths.map(item => item.month))];
  const isUniqueMonths = uniqueMonths.length > 0;
  return (
    <>
      <h1>Employees birthday</h1>
      <ul>
        {isUniqueMonths ? (
          uniqueMonths.map(item => (
            <SelectedEmployeesItem
              users={currentMonths}
              header={item}
              key={item}
            />
          ))
        ) : (
          <p>No selected employees</p>
        )}
      </ul>
    </>
  );
};
