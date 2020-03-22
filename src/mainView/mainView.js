import React, {useState} from 'react';
import './mainView.scss'
import Stats from "../components/Stats/Stats";
import Equipment from "../components/equipment/Equipment";
import { weapons, headGear, armor, boots, capes, orbs, nothing } from '../gear';

const MainView = () => {


  const [characterBaseStats, setCharacterBaseStats] = useState({
    health: 400,
    attack: 28,
    defense: 24,
    magic: 6,
    magicResist: 7,
    speed: 14
  });
  const [characterStats, setCharacterStats] = useState(characterBaseStats);
  const [equippedGear, setEquippedGear] = useState([
    nothing, nothing, nothing, nothing, nothing, nothing
  ]);
  const [currentWeapon, setCurrentWeapon] = useState(equippedGear[0]);
  const [currentHeadGear, setCurrentHeadGear] = useState(nothing);
  const [bonuses, setBonuses] = useState({
    health: 1, attack: 3, defense: 4,
    magic: 1, magicResist: 2, speed: 5
  });

  const equipGear = (gear) => {
    setCurrentWeapon(gear);
    console.log({currentWeapon});
    setBonuses({
      ...bonuses,
      health: gear.health,
      attack: gear.attack,
      defense: gear.defense,
      magic: gear.magic,
      magicResist: gear.magicResist,
      speed: gear.speed,
      });
    updateStats();
  };

  const updateStats = () => {
    setCharacterStats({
      health: bonuses.health + characterBaseStats.health,
      attack: bonuses.attack + characterBaseStats.attack,
      defense: bonuses.defense + characterBaseStats.defense,
      magic: bonuses.magic + characterBaseStats.magic,
      magicResist: bonuses.magicResist + characterBaseStats.magicResist,
      speed: bonuses.speed + characterBaseStats.speed
    })
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
          <Equipment title='Armor' equipment={equippedGear[1]}/>
          <Equipment title='Boots' equipment={equippedGear[2]}/>
        </div>
        <div className='portrait-and-stats'>
          <div className='portrait'>Portrait</div>
          <div className='stats'>
            <Stats characterStats={characterStats}
                   bonuses={bonuses}/>
          </div>
        </div>
        <div className='equipment-column'>
          <Equipment title='HeadGear' equipment={equippedGear[3]}/>
          <Equipment title='Cape' equipment={equippedGear[4]}/>
          <Equipment title='Orb' equipment={equippedGear[5]}/>
        </div>
      </div>
      <button onClick={() => equipGear(weapons[0])}>Equip Hammer</button>
      <button onClick={() => equipGear(weapons[1])}>Equip Sword</button>
      <button onClick={() => equipGear(nothing)}>Unequip Weapon</button>
    </div>
  );
};

export default MainView;