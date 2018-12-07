const initNum = () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;
  return Math.floor(MIN_NUMBER + Math.random() * (MAX_NUMBER + 1 - MIN_NUMBER));
};

const randomBoolean = () => Math.random() < 0.5;

export { initNum, randomBoolean };
