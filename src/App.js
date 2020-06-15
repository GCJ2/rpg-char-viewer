import React, {useState, useEffect} from 'react';

import './App.css';
import MainView from "./mainView/mainView";
import EditGear from "./components/editGear/EditGear";
import axios from "axios";

function App() {
  const [weaponsAPI, setWeaponsAPI] = useState([]);
  const [hgAPI, sethgAPI] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/weapon')
      .then((res) => {
        // console.log(res.data);
        setWeaponsAPI(res.data);
      })
      .catch(console.error)
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/api/headgear')
      .then((res) => {
        // console.log(res.data);
        sethgAPI(res.data);
      })
      .catch(console.error)
  }, []);


  return (
    <div className="App">
      <MainView weapons={weaponsAPI}
                headgear={hgAPI}/>
      <EditGear weapons={weaponsAPI}
                headgear={hgAPI}/>
    </div>
  );
}

export default App;
