import React from 'react';
import "./Equipment.scss"

const Equipment = ({title, equipment}) => {

  return (
    <div className='equipment-cell'>
      <p>{title}</p>
      <p>{equipment.name}</p>
      <p>ATK: {equipment.attack}</p>
      <p>DEF: {equipment.defense}</p>
    </div>
  );
};

export default Equipment;