export enum GameType {
  Baseball = 'baseball',
  Cricket = 'cricket',
  Elimination = 'elimination',
  Killer = 'killer',
  X01 = 'x01',
}

export const gameLabels: { [key in GameType]: string } = {
  [GameType.Baseball]: 'Baseball',
  [GameType.Cricket]: 'Cricket',
  [GameType.Elimination]: 'Elimination',
  [GameType.Killer]: 'Killer',
  [GameType.X01]: 'X01',
};

export const gameData = Object.values(GameType).map((value) => ({
  label: gameLabels[value as GameType],
  value,
}));

export const x01Data = [
  { label: '201', value: '201' },
  { label: '301', value: '301' },
  { label: '401', value: '401' },
  { label: '501', value: '501' },
  { label: '601', value: '601' },
  { label: '701', value: '701' },
  { label: '801', value: '801' },
  { label: '901', value: '901' },
  { label: '1001', value: '1001' },
  { label: '1501', value: '1501' },
];

export const eliminationData = [
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '10', value: '10' },
];
