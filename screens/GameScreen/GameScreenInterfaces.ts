export interface GameScreenProps {
  userChoice: number;
  onGameOver: (numOfRounds: number) => void;
}
