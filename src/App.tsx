import React from 'react';
import './App.css';
import EmployeeForm from './features/Employee/EmployeeForm';
import EquipmentForm from './features/Equipment/EquipmentForm';
import SendBtn from './SendBtn';

function App() {
  return (
    <div className="App">
      <EmployeeForm/>
      <EquipmentForm/>
      <SendBtn/>
    </div>
  );
}

export default App;
