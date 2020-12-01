import React from 'react';
import {EmployeesList} from './components/EmployeesList/EmployeesList';
import {SelectedEmployees} from './components/SelectedEmployees/SelectedEmployees';
import {Wrapper} from './components/Wrapper/Wraper';

function App() {
  return (
    <Wrapper>
      <EmployeesList />
      <SelectedEmployees />
    </Wrapper>
  );
}

export default App;
