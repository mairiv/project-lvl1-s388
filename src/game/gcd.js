import { randomNum } from '../utils';
import { runGame } from '..';

const MIN_NUMBER = 1;
const MAX_NUMBER = 1000;
const description = 'Find the greatest common divisor of given numbers.';
const isAnswerNumber = true;

const getCorrectAnswer = (first, second) => {
  let a = first > second ? first : second;
  let b = first > second ? second : first;
  let c = a % b;
  while (c !== 0) {
    a = b;
    b = c;
    c = a % b;
  }
  return b;
};

const init = () => {
  const numFirst = randomNum(MIN_NUMBER, MAX_NUMBER);
  const numSecond = randomNum(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = getCorrectAnswer(numFirst, numSecond);
  const question = `${numFirst} ${numSecond}`;
  return { question, correctAnswer };
};

const runBrainGcd = () => runGame(description, init, isAnswerNumber);

export default runBrainGcd;
