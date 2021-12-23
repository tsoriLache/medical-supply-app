import React from 'react';
import './App.css';
import EmployeeForm from './features/Employee/EmployeeForm';
import EquipmentForm from './features/Equipment/EquipmentForm';

function App() {
  return (
    <div className="App">
      <EmployeeForm/>
       <EquipmentForm/>
    </div>
  );
}

export default App;
