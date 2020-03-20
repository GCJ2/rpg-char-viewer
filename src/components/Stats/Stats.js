import React, {useState} from 'react';
import "./Stats.scss"

const Stats = () => {


  const [characterBaseStats, setCharacterBaseStats] = useState({
    health: 400,
    attack: 28,
    defense: 24,
    magic: 6,
    magicResist: 7,
    speed: 14
  });
  const [characterStats, setCharacterStats] = useState(characterBaseStats);

  const weapons = [
    {
      name: 'Unarmed', health: 0, attack: 0, defense: 0, magic: 0, magicResist: 0, speed: 0
    },
    {
      name: 'Hammer', health: 140, attack: 15, defense: 2, magic: 1, magicResist: 2, speed: 1
    },
    {
      name: 'Sword', health: 110, attack: 12, defense: 3, magic: 2, magicResist: 2, speed: 3
    },
    {
      name: 'Dagger', health: 80, attack: 9, defense: 1, magic: 2, magicResist: 2, speed: 6
    },
  ];

  const [currentWeapon, setCurrentWeapon] = useState(weapons[0]);


  const equipWeapon2 = (weapon) => {
    setCurrentWeapon(weapon);
    setCharacterStats({
      health: characterBaseStats.health + weapon.health,
      attack: characterBaseStats.attack + weapon.attack,
      defense: characterBaseStats.defense + weapon.defense,
      magic: characterBaseStats.magic + weapon.magic,
      magicResist: characterBaseStats.magicResist + weapon.magicResist,
      speed: characterBaseStats.speed + weapon.speed
    },);
    console.log(`Changed from ${currentWeapon.name} to ${weapon.name}`)
  };


  return (
    <div className='stats-overview'>
      <div className='stats-left'>
        <p>Health: {characterStats.health}</p>
        <p>Attack: {characterStats.attack}</p>
        <p>Defense: {characterStats.defense}</p>
      </div>
      <div className='stats-right'>
        <p>Magic: {characterStats.magic}</p>
        <p>Magic Resist: {characterStats.magicResist}</p>
        <p>Speed: {characterStats.speed}</p>
      </div>
      <button onClick={() => equipWeapon2(weapons[1])}>Equip Hammer</button>
      <button onClick={() => equipWeapon2(weapons[2])}>Equip Sword</button>
    </div>
  );
};

export default Stats;