const randomNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const randomBoolean = () => Math.random() < 0.5;

export { randomNum, randomBoolean };
