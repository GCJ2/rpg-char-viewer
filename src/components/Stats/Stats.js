import React from 'react';
import "./Stats.scss"

const Stats = ({characterStats, bonuses}) => {

  return (
    <div className='stats-overview'>
      <div className='stats-left'>
        <p>Health: {characterStats.health} (+{bonuses.health})</p>
        <p>Attack: {characterStats.attack} (+{bonuses.attack})</p>
        <p>Defense: {characterStats.defense} (+{bonuses.defense})</p>
      </div>
      <div className='stats-right'>
        <p>Magic: {characterStats.magic} (+{bonuses.magic})</p>
        <p>Magic Resist: {characterStats.magicResist} (+{bonuses.magicResist})</p>
        <p>Speed: {characterStats.speed} (+{bonuses.speed})</p>
      </div>
    </div>
  );
};

export default Stats;