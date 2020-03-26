import React, {useEffect, useState} from 'react';
import './mainView.scss'
import Stats from "../components/Stats/Stats";
import Equipment from "../components/equipment/Equipment";
import {armor, boots, capes, headGear, orbs, weapons} from '../gear';
import Portrait from "../components/Portrait/Portrait";

const MainView = () => {

  const characterBaseStats = {
    health: 400,
    attack: 28,
    defense: 24,
    magic: 6,
    magicResist: 7,
    speed: 14
  };

  const [characterStats, setCharacterStats] = useState(characterBaseStats);
  const baseBonuses = {
    health: 1, attack: 3, defense: 4,
    magic: 1, magicResist: 2, speed: 5
  };
  const bonuses = baseBonuses;
  const [equippedGear, setEquippedGear] = useState({
    weapon: weapons[0], armor: armor[0], boots: boots[0], headGear: headGear[0], cape: capes[0], orb: orbs[0]
  });

  const getBonus = (stat) => {
    return(
    equippedGear.weapon[stat] + equippedGear.armor[stat] + equippedGear.boots[stat] +
    equippedGear.headGear[stat] + equippedGear.cape[stat] + equippedGear.orb[stat]
    );
  };

  const healthBonus = getBonus('health');
  const attackBonus = getBonus('attack');
  const defenseBonus = getBonus('defense');
  const magicBonus = getBonus('magic');
  const magicResistBonus = getBonus('magicResist');
  const speedBonus = getBonus('speed');


  const gearBonuses = {
    health: healthBonus, attack: attackBonus, defense: defenseBonus,
    magic: magicBonus, magicResist: magicResistBonus, speed: speedBonus
  };

  const getStatsForRender = (stat) => {
    return (
      bonuses[stat] + gearBonuses[stat] + characterBaseStats[stat]
    );
  };

  const renderedStat = () => {
    setCharacterStats({
      health: getStatsForRender('health'),
      attack: getStatsForRender('attack'),
      defense: getStatsForRender('defense'),
      magic: getStatsForRender('magic'),
      magicResist: getStatsForRender('magicResist'),
      speed: getStatsForRender('speed')
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
          <Portrait/>
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
    </div>
  );
};

export default MainView;