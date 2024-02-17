export type GameVariants =
  | 'overall'
  | 'baseball'
  | 'cricket'
  | 'elimination'
  | 'killer'
  | 'x01';

interface KillerResumeGame {
  playerTargets: number[];
}
// type KillerStateToPass = Omit<StateToPass, 'settings'> & KillerResumeGame;
