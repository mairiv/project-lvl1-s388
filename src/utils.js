const initNum = (min, max) => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const randomBoolean = () => Math.random() < 0.5;

export { initNum, randomBoolean };
