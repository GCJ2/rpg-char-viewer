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
  const [equippedGear, setEquippedGear] = useState({
    weapon: weapons[1], armor: armor[1], boots: boots[1], headGear: headGear[1], cape: capes[1], orb: orbs[1]
  });

  const weaponBonus = () => {
    setBonuses({
        health: baseBonuses.health + equippedGear.weapon.health,
        attack: baseBonuses.attack + equippedGear.weapon.attack,
        defense: baseBonuses.defense + equippedGear.weapon.defense,
        magic: baseBonuses.magic + equippedGear.weapon.magic,
        magicResist: baseBonuses.magicResist + equippedGear.weapon.magicResist,
        speed: baseBonuses.speed + equippedGear.weapon.speed,
      }
    )
  };

  const healthBonus =
    equippedGear.weapon.health + equippedGear.armor.health + equippedGear.boots.health +
    equippedGear.headGear.health + equippedGear.cape.health + equippedGear.orb.health;

  const attackBonus =
    equippedGear.weapon.attack + equippedGear.armor.attack + equippedGear.boots.attack +
    equippedGear.headGear.attack + equippedGear.cape.attack + equippedGear.orb.attack;

  const defenseBonus =
    equippedGear.weapon.defense + equippedGear.armor.defense + equippedGear.boots.defense +
    equippedGear.headGear.defense + equippedGear.cape.defense + equippedGear.orb.defense;

  const magicBonus =
    equippedGear.weapon.magic + equippedGear.armor.magic + equippedGear.boots.magic +
    equippedGear.headGear.magic + equippedGear.cape.magic + equippedGear.orb.magic;

  const magicResistBonus =
    equippedGear.weapon.magicResist + equippedGear.armor.magicResist + equippedGear.boots.magicResist +
    equippedGear.headGear.magicResist + equippedGear.cape.magicResist + equippedGear.orb.magicResist;

  const speedBonus =
    equippedGear.weapon.speed + equippedGear.armor.speed + equippedGear.boots.speed +
    equippedGear.headGear.speed + equippedGear.cape.speed + equippedGear.orb.speed;

  const gearBonuses = {
    health: healthBonus, attack: attackBonus, defense: defenseBonus,
    magic: magicBonus, magicResist: magicResistBonus, speed: speedBonus
  };

  const renderedBonus = () => {
    setCharacterStats({
      health: bonuses.health + characterBaseStats.health,
      attack: bonuses.attack + characterBaseStats.attack,
      defense: bonuses.defense + characterBaseStats.defense,
      magic: bonuses.magic + characterBaseStats.magic,
      magicResist: bonuses.magicResist + characterBaseStats.magicResist,
      speed: bonuses.speed + characterBaseStats.speed
    })
  };

  const equipWeapon = (e, i) => {
    e.preventDefault();
    setEquippedGear({...equippedGear, weapon: weapons[i]});
  };

  useEffect(() => {
    if (equippedGear) {
      weaponBonus();
      console.log(gearBonuses)
    }
  }, [equippedGear]);

  useEffect(() => {
    if (bonuses) {
      renderedBonus();

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
          <Equipment title='Weapon' equipment={equippedGear.weapon}/>
          <Equipment title='Armor' equipment={equippedGear.armor}/>
          <Equipment title='Boots' equipment={equippedGear.boots}/>
        </div>
        <div className='portrait-and-stats'>
          <div className='portrait'>Portrait</div>
          <div className='stats'>
            <Stats characterStats={characterStats}
                   bonuses={bonuses}/>
          </div>
        </div>
        <div className='equipment-column'>
          <Equipment title='HeadGear' equipment={equippedGear.headGear}/>
          <Equipment title='Cape' equipment={equippedGear.cape}/>
          <Equipment title='Orb' equipment={equippedGear.orb}/>
        </div>
      </div>
      <button onClick={(e) => equipWeapon(e, 0)}>Equip Nothing</button>
      <button onClick={(e) => equipWeapon(e, 1)}>Equip Hammer</button>
      <button onClick={(e) => equipWeapon(e, 2)}>Equip Sword</button>
    </div>
  );
};

export default MainView;