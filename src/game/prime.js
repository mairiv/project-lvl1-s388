import { randomNum } from '../utils';
import { runGame } from '..';

const minNumber = 2;
const maxNumber = 1009;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNum = (num) => {
  if (num <= 1) {
    return false;
  }
  let divisor = 2;
  const maxDivisor = num < 4 ? num - 1 : Math.floor(Math.sqrt(num));
  while (divisor <= maxDivisor) {
    if (num % divisor === 0) {
      return false;
    }
    divisor += 1;
  }
  return true;
};

const init = () => {
  const question = randomNum(minNumber, maxNumber);
  const correctAnswer = isPrimeNum(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const runBrainPrime = () => runGame(description, init);

export default runBrainPrime;
