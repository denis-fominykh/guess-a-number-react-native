export interface GameOverScreenProps {
  rounds: number;
  userNumber: number | null;
  onRestart: () => void;
}
