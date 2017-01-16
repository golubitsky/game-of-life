export const shuffleArray = (a) => {
  let shuffled = a.slice();
  for (let i = shuffled.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [shuffled[i - 1], shuffled[j]] = [shuffled[j], shuffled[i - 1]];
  }
  return shuffled;
}