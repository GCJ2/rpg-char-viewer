import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './EditGear.scss'

const EditGear = ({weapons, headgear}) => {

  const deleteGear = (gear, id) => {
    const url = `http://localhost:5000/api/${gear.type}/${gear.id}`;
    axios.delete(url)
      .then((res) => {
        console.log(res.data.message)
      })
      .catch(console.error);
  };



  return (
    <div>
      <h1>Select a piece of gear to delete</h1>
      <div className='gear-selection'>
        <h3>Weapons</h3>
        {weapons
          ? weapons.map(gear => (
            <ul key={gear.id}
                onClick={() => deleteGear(gear)}>
              {gear.name}
            </ul>
          )) : "Loading..."}
      </div>
      <div className='gear-selection'>
        <h3>HeadGear</h3>
        {headgear
          ? headgear.map(gear => (
            <ul key={gear.id}
                onClick={() => deleteGear(gear)}>
              {gear.name}
            </ul>
          )) : "Loading..."}
      </div>
    </div>
  );
};

export default EditGear;