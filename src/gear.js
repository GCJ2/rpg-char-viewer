const weapons =
  [
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
    }
  ];

const headGear = [
  {
    name: 'Hat', health: 10, attack: 0, defense: 2, magic: 0, magicResist: 3, speed: 0
  },
  {
    name: 'Helmet', health: 30, attack: 0, defense: 4, magic: 1, magicResist: 4, speed: 0
  },
];

const armor = [
  {
    name: 'Leather', health: 30, attack: 0, defense: 15, magic: 1, magicResist: 14, speed: 0
  },
  {
    name: 'Plate', health: 20, attack: 0, defense: 20, magic: 0, magicResist: 3, speed: 0
  },
];

const boots = [
  {
    name: 'Leather', health: 20, attack: 0, defense: 6, magic: 0, magicResist: 8, speed: 0
  },
  {
    name: 'Plate', health: 30, attack: 0, defense: 10, magic: 1, magicResist: 4, speed: 0
  },
];

const capes = [
  {
    name: 'Wool', health: 20, attack: 0, defense: 6, magic: 20, magicResist: 8, speed: 12
  },
  {
    name: 'Denim', health: 10, attack: 0, defense: 40, magic: 9, magicResist: 14, speed: 8
  },
];

const orbs = [
  {
    name: 'Power', health: 0, attack: 20, defense: 0, magic: 20, magicResist: 0, speed: 8
  },
  {
    name: 'Vitality', health: 0, attack: 0, defense: 40, magic: 0, magicResist: 20, speed: 4
  },
];

export {
  weapons,
  headGear,
  armor,
  boots,
  capes,
  orbs
}