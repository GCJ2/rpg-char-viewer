import React from 'react';

import './App.css';
import MainView from "./mainView/mainView";
import EditGear from "./components/editGear/EditGear";

function App() {
  return (
    <div className="App">
      <MainView/>
      <EditGear/>
    </div>
  );
}

export default App;
