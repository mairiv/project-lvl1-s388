import { randomNum } from '../utils';
import { runGame } from '..';

const minNumber = 1;
const maxNumber = 1000;
const description = 'Find the greatest common divisor of given numbers.';

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
  const numFirst = randomNum(minNumber, maxNumber);
  const numSecond = randomNum(minNumber, maxNumber);
  const correctAnswer = String(getCorrectAnswer(numFirst, numSecond));
  const question = `${numFirst} ${numSecond}`;
  return { question, correctAnswer };
};

const runBrainGcd = () => runGame(description, init);

export default runBrainGcd;
