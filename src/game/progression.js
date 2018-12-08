import { randomNum } from '../utils';
import { runGame } from '..';

const MIN_START_NUMBER = 0;
const MAX_START_NUMBER = 10;
const MIN_STEP = 1;
const MAX_STEP = 11;
const PROGRESSION_SIZE = 10;
const description = 'What number is missing in the progression?';
const isAnswerNumber = true;

const getProgression = () => {
  const numbers = [];
  const stepSize = randomNum(MIN_STEP, MAX_STEP);
  numbers[0] = randomNum(MIN_START_NUMBER, MAX_START_NUMBER);
  for (let i = 1; i < PROGRESSION_SIZE; i += 1) {
    numbers[i] = numbers[i - 1] + stepSize;
  }
  return numbers;
};


const init = () => {
  const numbersProgression = getProgression();
  const position = randomNum(0, numbersProgression.length - 1);
  const correctAnswer = numbersProgression[position];
  numbersProgression[position] = '..';

  const question = numbersProgression.join(' ');

  return { question, correctAnswer };
};

const runBrainProgression = () => runGame(description, init, isAnswerNumber);

export default runBrainProgression;
