import React from 'react';
import "./Equipment.scss"

const Equipment = ({title}) => {
  return (
    <div className='equipment-cell'>
      {title}
    </div>
  );
};

export default Equipment;