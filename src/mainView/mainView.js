import React from 'react';
import './mainView.scss'
import Stats from "../components/Stats/Stats";
import Equipment from "../components/equipment/Equipment";

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
          <Equipment title='Weapon'/>
          <Equipment title='Armor'/>
          <Equipment title='Boots'/>
        </div>
        <div className='portrait-and-stats'>
          <div className='portrait'>Portrait</div>
          <div className='stats'>
            <Stats/>
          </div>
        </div>
        <div className='equipment-column'>
          <Equipment title='Head'/>
          <Equipment title='Cape'/>
          <Equipment title='Orb'/>
        </div>
      </div>
    </div>
  );
};

export default MainView;