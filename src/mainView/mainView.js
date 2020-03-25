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
    weapon: weapons[0], armor: armor[0], boots: boots[0], headGear: headGear[0], cape: capes[0], orb: orbs[0]
  });

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

  const renderedStat = () => {
    setCharacterStats({
      health: bonuses.health + gearBonuses.health + characterBaseStats.health,
      attack: bonuses.attack + gearBonuses.attack + characterBaseStats.attack,
      defense: bonuses.defense + gearBonuses.defense + characterBaseStats.defense,
      magic: bonuses.magic + gearBonuses.magic + characterBaseStats.magic,
      magicResist: bonuses.magicResist + gearBonuses.magicResist + characterBaseStats.magicResist,
      speed: bonuses.speed + gearBonuses.speed + characterBaseStats.speed
    })
  };

  const renderedBonuses = {
    health: healthBonus + baseBonuses.health,
    attack: attackBonus + baseBonuses.attack,
    defense: defenseBonus + baseBonuses.defense,
    magic: magicBonus + baseBonuses.magic,
    magicResist: magicResistBonus + baseBonuses.magicResist,
    speed: speedBonus + baseBonuses.speed
  };

  const equipWeapon = (i) => {
    setEquippedGear({...equippedGear, weapon: weapons[i]});
  };
  const equipArmor = (i) => {
    setEquippedGear({...equippedGear, armor: armor[i]});
  };
  const equipBoots = (i) => {
    setEquippedGear({...equippedGear, boots: boots[i]});
  };
  const equipHeadGear = (i) => {
    setEquippedGear({...equippedGear, headGear: headGear[i]});
  };
  const equipCape = (i) => {
    setEquippedGear({...equippedGear, cape: capes[i]});
  };
  const equipOrb = (i) => {
    setEquippedGear({...equippedGear, orb: orbs[i]});
  };

  useEffect(() => {
    if (equippedGear) {
      renderedStat();
    }
  }, [equippedGear]);

  const characterName = 'Dunkirk';
  const currentClass = 'Defiler';

  return (
    <div className='page-view'>
      <div className='character-name'>
        <p>{characterName} the {currentClass}</p>
      </div>
      <div className='character-view'>
        <div className='equipment-column'>
          <Equipment title='Weapon' equipment={equippedGear.weapon}
                     equipGear={equipWeapon}
                     gear={weapons}/>
          <Equipment title='Armor' equipment={equippedGear.armor}
                     equipGear={equipArmor}
                     gear={armor}/>
          <Equipment title='Boots' equipment={equippedGear.boots}
                     equipGear={equipBoots}
                     gear={boots}/>
        </div>
        <div className='portrait-and-stats'>
          <div className='portrait'>Portrait</div>
          <div className='stats'>
            <Stats characterStats={characterStats}
                   bonuses={renderedBonuses}/>
          </div>
        </div>
        <div className='equipment-column'>
          <Equipment title='Headgear' equipment={equippedGear.headGear}
                     equipGear={equipHeadGear}
                     gear={headGear}/>
          <Equipment title='Cape' equipment={equippedGear.cape}
                     equipGear={equipCape}
                     gear={capes}/>
          <Equipment title='Orb' equipment={equippedGear.orb}
                     equipGear={equipOrb}
                     gear={orbs}/>
        </div>
      </div>
      <button onClick={() => equipWeapon(0)}>Equip Nothing</button>
      <button onClick={() => equipWeapon(1)}>Equip Hammer</button>
      <button onClick={() => equipWeapon(2)}>Equip Sword</button>
    </div>
  );
};

export default MainView;