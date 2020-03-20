import React from 'react';
import './mainView.scss'
import Stats from "../components/Stats/Stats";

const MainView = () => {

  const characterName = 'Dunkirk';
  const currentClass = 'Defiler';

  return (
    <div className='page-view'>
      <div className='character-name'>
        <p>{characterName} the {currentClass}</p>
      </div>
      <div className='character-view'>
        <div className='equipment-column'>
          <div className='equipment-cell'>Weapon</div>
          <div className='equipment-cell'>Armor</div>
          <div className='equipment-cell'>Boots</div>
        </div>
        <div className='portrait-and-stats'>
          <div className='portrait'>Portrait</div>
          <div className='stats'>
            <Stats/>
          </div>
        </div>
        <div className='equipment-column'>
          <div className='equipment-cell'>Head</div>
          <div className='equipment-cell'>Cape</div>
          <div className='equipment-cell'>Orb</div>
        </div>
      </div>
    </div>
  );
};

export default MainView;