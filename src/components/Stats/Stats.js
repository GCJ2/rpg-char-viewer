import React, {useState} from 'react';
import "./Stats.scss"

const Stats = () => {

  const [characterStats, setCharacterStats] = useState({
    health: 400,
    attack: 28,
    defense: 24,
    magic: 6,
    magicResist: 7,
    speed: 14
  });

  const [currentWeapon, setCurrentWeapon] = useState({});

  const weapons = [
    {
      hammer: {
        health: 140, attack: 15, defense: 2, magic: 1, magicResist: 2, speed: 1
      }
    },
    {
      sword: {
        health: 140, attack: 15, defense: 3, magic: 2, magicResist: 2, speed: 3
      }
    },
    {
      dagger: {
        health: 80, attack: 9, defense: 1, magic: 2, magicResist: 2, speed: 6
      }
    },
  ];

  const {hammer} = weapons[0];
  console.log(hammer.health);


  // const equipWeapon = (weapon) => {
  //   setCharacterStats({
  //     ...characterStats,
  //     health: characterStats.health + weapon.health,
  //     attack: characterStats.attack + weapon.attack,
  //     defense: characterStats.defense + weapon.defense,
  //     magic: characterStats.magic + weapon.magic,
  //     magicResist: characterStats.magicResist + weapon.magicResist,
  //     speed: characterStats.speed + weapon.speed
  //   })
  // };

  const equipHammer = () => {
    setCharacterStats({
      ...characterStats,
      health: characterStats.health + hammer.health,
      attack: characterStats.attack + hammer.attack,
      defense: characterStats.defense + hammer.defense,
      magic: characterStats.magic + hammer.magic,
      magicResist: characterStats.magicResist + hammer.magicResist,
      speed: characterStats.speed + hammer.speed
    })
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
      <button onClick={equipHammer}>Equip Hammer</button>
    </div>
  );
};

export default Stats;