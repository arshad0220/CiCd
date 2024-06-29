import React from 'react';
import Maps from './Components/Maps';
import Filter from './Components/Filter';
import Reduce from './Components/Reduce';
import Discount from './Components/Discount';
import Unique from './Components/Unique';
import And_Or from './Components/And_Or';
import OcNc from './Components/OcNc';
import Props from './Components/Props';
import Calculator_State from './Components/Calculator_State';
import Counter from './Components/Counter';
import FormComponent from './Components/FormComponent';
import UserList from './Components/UserList';
import Useref_Counter from './Components/Useref_Counter';


function App() {
  return (
    <div>
      <Maps />
      <Filter />  
      <Reduce /> 
      <Discount />
      <h1>Unique</h1>
      <Unique/>
      <And_Or/>
      <OcNc/>
      <Props />
      <Calculator_State />
      <Counter />
      <FormComponent />
      <UserList />
      <Useref_Counter />
    </div>
  );
}

export default App;
