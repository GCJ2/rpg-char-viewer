import React, {useState, useEffect} from 'react';
import './mainView.scss'
import Stats from "../components/Stats/Stats";
import Equipment from "../components/equipment/Equipment";
import {weapons, headGear, armor, boots, capes, orbs} from '../gear';

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
  const [baseBonuses, setBaseBonuses] = useState({
    health: 1, attack: 3, defense: 4,
    magic: 1, magicResist: 2, speed: 5
  });
  const [bonuses, setBonuses] = useState(baseBonuses);
  const equippedGear = [
    weapons[0], armor[0], boots[0], headGear[0], capes[0], orbs[0]
  ];
  const [currentWeapon, setCurrentWeapon] = useState(weapons[0]);

  const applyBonus = () => {
    setBonuses({
        health: baseBonuses.health + currentWeapon.health,
        attack: baseBonuses.attack + currentWeapon.attack,
        defense: baseBonuses.defense + currentWeapon.defense,
        magic: baseBonuses.magic + currentWeapon.magic,
        magicResist: baseBonuses.magicResist + currentWeapon.magicResist,
        speed: baseBonuses.speed + currentWeapon.speed,
      }
    )
  };

  const weaponBonus = () => {
    setCharacterStats({
      health: bonuses.health + characterBaseStats.health,
      attack: bonuses.attack + characterBaseStats.attack,
      defense: bonuses.defense + characterBaseStats.defense,
      magic: bonuses.magic + characterBaseStats.magic,
      magicResist: bonuses.magicResist + characterBaseStats.magicResist,
      speed: bonuses.speed + characterBaseStats.speed
    })
  };

  const equipWeapon = (i, e) => {
    e.preventDefault();
    equippedGear.splice(0, 1, weapons[i]);
    setCurrentWeapon(equippedGear[0]);
  };

  useEffect(() => {
    if (currentWeapon) {
      applyBonus();
    }
  }, [currentWeapon]);

  useEffect(() => {
    if (bonuses) {
      weaponBonus();
    }
  }, [bonuses]);

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
      <button onClick={(e) => equipWeapon(0, e)}>Equip Nothing</button>
      <button onClick={(e) => equipWeapon(1, e)}>Equip Hammer</button>
      <button onClick={(e) => equipWeapon(2, e)}>Equip Sword</button>
    </div>
  );
};

export default MainView;