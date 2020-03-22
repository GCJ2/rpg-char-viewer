import React from 'react';
import "./Equipment.scss"

const Equipment = ({title, equipment}) => {

  console.log(equipment);

  return (
    <div className='equipment-cell'>
      <p>{title}</p>
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