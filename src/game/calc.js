import { randomNum, randomBoolean } from '../utils';
import { runGame } from '..';

const MIN_NUMBER = 0;
const MAX_NUMBER = 100;
const description = 'What is the result of the expression?';
const isAnswerNumber = true;

const getExrpession = (isAddition, first, second) => {
  if (isAddition) {
    return first + second;
  }
  return first * second;
};

const getExrpessionToString = (isAddition, first, second) => {
  if (isAddition) {
    return `${first} + ${second}`;
  }
  return `${first} * ${second}`;
};

const init = () => {
  const numFirst = randomNum(MIN_NUMBER, MAX_NUMBER);
  const numSecond = randomNum();
  const isAddition = randomBoolean();
  const correctAnswer = getExrpession(isAddition, numFirst, numSecond);
  const question = getExrpessionToString(isAddition, numFirst, numSecond);
  return { question, correctAnswer };
};

const runBrainCalc = () => runGame(description, init, isAnswerNumber);

export default runBrainCalc;
