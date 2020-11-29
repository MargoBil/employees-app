import React from 'react';
import {ABC} from '../../data/alfabet';
import {EmployeesItem} from '../EmployeesItem/EmployeesItem';

export const EmployeesList = () => {
  return (
    <ul>
      {ABC.map(item => (
        <EmployeesItem key={item} header={item} />
      ))}
    </ul>
  );
};
