import React from 'react';
import "./Stats.scss"

const Stats = ({characterStats, weapon, equipWeapon}) => {

  return (
    <div className='stats-overview'>
      <div className='stats-left'>
        <p>Health: {characterStats.health} (+{weapon.health})</p>
        <p>Attack: {characterStats.attack} (+{weapon.attack})</p>
        <p>Defense: {characterStats.defense} (+{weapon.defense})</p>
      </div>
      <div className='stats-right'>
        <p>Magic: {characterStats.magic} (+{weapon.magic})</p>
        <p>Magic Resist: {characterStats.magicResist} (+{weapon.magicResist})</p>
        <p>Speed: {characterStats.speed} (+{weapon.speed})</p>
      </div>

    </div>
  );
};

export default Stats;