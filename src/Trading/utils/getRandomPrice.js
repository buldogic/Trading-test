export const getRandomPrice = (min = 2, max = 3) => {
  const value =  Math.random() * (min - max) + min;
  return value.toFixed(4)
};
