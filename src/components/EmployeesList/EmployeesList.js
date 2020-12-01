import React from 'react';
import {ABC} from '../../data/alfabet';
import {EmployeesItem} from '../EmployeesItem/EmployeesItem';
import style from './EmployeesList.module.css';

export const EmployeesList = () => {
  return (
    <div className={style.container}>
      <h2 className={style.header}>Employees</h2>
      <ul className={style.list}>
        {ABC.map(item => (
          <EmployeesItem key={item} header={item} />
        ))}
      </ul>
    </div>
  );
};
