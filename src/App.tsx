import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import EmployeeForm from './features/Employee/EmployeeForm';
import EquipmentForm from './features/Equipment/EquipmentForm';
import SendBtn from './SendBtn';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <h1>time to update</h1>
      <EmployeeForm/>
      <EquipmentForm/>
      <SendBtn/>
      <ToastContainer/>

    </div>
  );
}

export default App;
