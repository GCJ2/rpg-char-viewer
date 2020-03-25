import React from 'react';
import "./Equipment.scss"

const Equipment = ({title, equipment, equipGear, gear}) => {

  return (
    <div className='equipment-cell'>
      <div className='dropdown'>
        <p className='dropdown-p'>{title}</p>
        <div className='dropdown-content'>
          {gear.map((gear, i) => (
            <ul key={gear.name + i}
                onClick={() => equipGear(gear.id)} >
              {gear.name}</ul>
          ))}
        </div>
      </div>
      <p>{equipment.name}</p>
      <p>HP: {equipment.health}</p>
      <p>ATK: {equipment.attack}</p>
      <p>DEF: {equipment.defense}</p>
      <p>MAG: {equipment.magic}</p>
      <p>MDEF: {equipment.magicResist}</p>
      <p>SPD: {equipment.speed}</p>
    </div>
  );
};

export default Equipment;