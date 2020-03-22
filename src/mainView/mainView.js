import React, {useState} from 'react';
import './mainView.scss'
import Stats from "../components/Stats/Stats";
import Equipment from "../components/equipment/Equipment";
import { weapons, headGear, armor, boots, capes, orbs } from '../gear';

const MainView = () => {

  console.log(weapons);

  const [characterBaseStats, setCharacterBaseStats] = useState({
    health: 400,
    attack: 28,
    defense: 24,
    magic: 6,
    magicResist: 7,
    speed: 14
  });
  const [characterStats, setCharacterStats] = useState(characterBaseStats);
  const [currentWeapon, setCurrentWeapon] = useState(weapons[0]);
  const [currentHeadGear, setCurrentHeadGear] = useState(headGear[0]);

  const equipWeapon = (gear) => {
    setCurrentWeapon(gear);
    setCharacterStats({
      health: characterBaseStats.health + gear.health,
      attack: characterBaseStats.attack + gear.attack,
      defense: characterBaseStats.defense + gear.defense,
      magic: characterBaseStats.magic + gear.magic,
      magicResist: characterBaseStats.magicResist + gear.magicResist,
      speed: characterBaseStats.speed + gear.speed
    },);
    console.log(`Changed from ${currentWeapon.name} to ${gear.name}`)
  };

  const equipHead = (gear) => {
    setCurrentHeadGear(gear);
    setCharacterStats({
      health: characterStats.health + gear.health,
      attack: characterStats.attack + gear.attack,
      defense: characterStats.defense + gear.defense,
      magic: characterStats.magic + gear.magic,
      magicResist: characterStats.magicResist + gear.magicResist,
      speed: characterStats.speed + gear.speed
    },);
    console.log(`Changed from ${currentHeadGear.name} to ${gear.name}`)
  };


  const characterName = 'Dunkirk';
  const currentClass = 'Defiler';

  return (
    <div className='page-view'>
      <div className='character-name'>
        <p>{characterName} the {currentClass}</p>
      </div>
      <div className='character-view'>
        <div className='equipment-column'>
          <Equipment title='Weapon' equipment={currentWeapon}/>
          <Equipment title='Armor' equipment={currentWeapon}/>
          <Equipment title='Boots' equipment={currentWeapon}/>
        </div>
        <div className='portrait-and-stats'>
          <div className='portrait'>Portrait</div>
          <div className='stats'>
            <Stats characterStats={characterStats}
                   weapon={currentWeapon}/>
          </div>
        </div>
        <div className='equipment-column'>
          <Equipment title='HeadGear' equipment={currentHeadGear}/>
          <Equipment title='Cape' equipment={currentWeapon}/>
          <Equipment title='Orb' equipment={currentWeapon}/>
        </div>
      </div>
      <button onClick={() => equipWeapon(weapons[1])}>Equip Hammer</button>
      <button onClick={() => equipWeapon(weapons[2])}>Equip Sword</button>
      <button onClick={() => equipHead(headGear[0])}>Equip Hat</button>
      <button onClick={() => equipHead(headGear[1])}>Equip Helmet</button>
    </div>
  );
};

export default MainView;