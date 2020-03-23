const weapons =
  [
    {
      name: 'Nothing', id: 0, index: 0, type: 'weapon', health: 0, attack: 0, defense: 0, magic: 0, magicResist: 0, speed: 0
    },
    {
      name: 'Hammer', id: 1, index: 0, type: 'weapon', health: 140, attack: 15, defense: 2, magic: 1, magicResist: 2, speed: 1
    },
    {
      name: 'Sword', id: 2, index: 0, type: 'weapon', health: 110, attack: 12, defense: 3, magic: 2, magicResist: 2, speed: 3
    },
    {
      name: 'Dagger', id: 3, index: 0, type: 'weapon', health: 80, attack: 9, defense: 1, magic: 2, magicResist: 2, speed: 6
    }
  ];

const headGear = [
  {
    name: 'Nothing',  id: 0, index: 1, type: 'headGear', health: 0, attack: 0, defense: 0, magic: 0, magicResist: 0, speed: 0
  },
  {
    name: 'Hat', id: 1, index: 1, type: 'headGear', health: 10, attack: 0, defense: 2, magic: 0, magicResist: 3, speed: 0
  },
  {
    name: 'Helmet', id: 2, index: 1, type: 'headGear', health: 30, attack: 0, defense: 4, magic: 1, magicResist: 4, speed: 0
  }
];

const armor = [
  {
    name: 'Nothing', type: 'armor', health: 0, attack: 0, defense: 0, magic: 0, magicResist: 0, speed: 0
  },
  {
    name: 'Leather', type: 'armor', health: 30, attack: 0, defense: 15, magic: 1, magicResist: 14, speed: 0
  },
  {
    name: 'Plate', type: 'armor', health: 20, attack: 0, defense: 20, magic: 0, magicResist: 3, speed: 0
  }
];

const boots = [
  {
    name: 'Nothing', type: 'boot', health: 0, attack: 0, defense: 0, magic: 0, magicResist: 0, speed: 0
  },
  {
    name: 'Leather', type: 'boot', health: 20, attack: 0, defense: 6, magic: 0, magicResist: 8, speed: 6
  },
  {
    name: 'Plate', type: 'boot', health: 30, attack: 0, defense: 10, magic: 1, magicResist: 4, speed: 2
  }
];

const capes = [
  {
    name: 'Nothing', type: 'cape', health: 0, attack: 0, defense: 0, magic: 0, magicResist: 0, speed: 0
  },
  {
    name: 'Wool', type: 'cape', health: 20, attack: 0, defense: 6, magic: 20, magicResist: 8, speed: 12
  },
  {
    name: 'Denim', type: 'cape', health: 10, attack: 0, defense: 40, magic: 9, magicResist: 14, speed: 8
  }
];

const orbs = [
  {
    name: 'Nothing', type: 'orb', health: 0, attack: 0, defense: 0, magic: 0, magicResist: 0, speed: 0
  },
  {
    name: 'Power', type: 'orb', health: 0, attack: 20, defense: 0, magic: 20, magicResist: 0, speed: 8
  },
  {
    name: 'Vitality', type: 'orb', health: 0, attack: 0, defense: 40, magic: 0, magicResist: 20, speed: 4
  }
];

const nothing = {
  name: 'Nothing',
  type: 'nothing',
  health: 0,
  attack: 0,
  defense: 0,
  magic: 0,
  magicResist: 0,
  speed: 0
};

export {
  weapons,
  headGear,
  armor,
  boots,
  capes,
  orbs,
  nothing
}