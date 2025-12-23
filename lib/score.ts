export function calculateScore(position: number) {
  if (position === 1) return 1000;
  if (position <= 10) return 150;
  if (position <= 20) return 120;
  if (position <= 50) return 90;
  if (position <= 100) return 60;
  return 15;
}
