export const getBackgroundStats = (bg: number) => {
  if (bg < 70) {
    return 'red';
  } else if (bg >= 70 && bg <= 99) {
    return 'gold';
  } else if (bg >= 100) {
    return 'green';
  }
}