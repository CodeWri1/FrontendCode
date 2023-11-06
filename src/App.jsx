import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavbarComp from './Components/NavbarComp';
import Pages from './Pages';

function App() {
  return (
    <div className="App">
       <NavbarComp/>
       <Pages/>
    </div>
  );
}

export default App;
