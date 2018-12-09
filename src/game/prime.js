import { randomNum } from '../utils';
import runGame from '..';

const minNumber = 0;
const maxNumber = 1009;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNum = (num) => {
  let isPrime = false;
  let i = 2;
  const maxChecked = Math.floor(Math.sqrt(num));
  while ((i <= maxChecked) && (num % i !== 0)) {
    if (i === maxChecked) {
      isPrime = true;
    }
    i += 1;
  }
  return isPrime;
};

const init = () => {
  const question = randomNum(minNumber, maxNumber);
  const correctAnswer = isPrimeNum(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const runBrainPrime = () => runGame(description, init);

export default runBrainPrime;
