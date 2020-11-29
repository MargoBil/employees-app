import React from 'react';

import {EmployeesList} from './components/EmployeesList/EmployeesList';
import {SelectedEmployees} from './components/SelectedEmployees/SelectedEmployees';

function App() {
  return (
    <>
      <SelectedEmployees />
      <EmployeesList />
    </>
  );
}

export default App;
