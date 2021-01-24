import React from 'react';
import './App.css';
import InfoBlock from './Components/InfoBlock/InfoBlock';
import SpecificationBlock from "./Components/SpecificationBlock/SpecificationBlock";
import ClientsBlock from "./Components/ClientsBlock/ClientsBlock";
import ContactBlock from "./Components/ContactBlock/ContactBlock";

function App() {
  return (
    <div className="App">
      <InfoBlock/>
      <SpecificationBlock/>
      <ClientsBlock/>
      <ContactBlock/>
    </div>
  );
}

export default App;
