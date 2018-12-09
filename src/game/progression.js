import { randomNum } from '../utils';
import runGame from '..';

const minStartNumber = 0;
const maxStartNumber = 10;
const minStep = 1;
const maxStep = 11;
const progressionSize = 10;
const description = 'What number is missing in the progression?';

const getProgression = () => {
  const numbers = [];
  const stepSize = randomNum(minStep, maxStep);
  numbers[0] = randomNum(minStartNumber, maxStartNumber);
  for (let i = 1; i < progressionSize; i += 1) {
    numbers[i] = numbers[i - 1] + stepSize;
  }
  return numbers;
};

const init = () => {
  const numbersProgression = getProgression();
  const position = randomNum(0, numbersProgression.length - 1);
  const correctAnswer = String(numbersProgression[position]);
  numbersProgression[position] = '..';
  const question = numbersProgression.join(' ');
  return { question, correctAnswer };
};

const runBrainProgression = () => runGame(description, init);

export default runBrainProgression;
